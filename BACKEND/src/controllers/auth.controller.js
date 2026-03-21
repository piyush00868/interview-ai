const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BlacklistModel = require("../models/blacklist.model");
/**
 * @name registerUserController
 * @description  register a new user in the database accepting username, email and password as input
 * @access Public
 */
async function registerUserController(req, res) {

    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Please provide username, email and password"
        })
    }

    const isUserAlreadyExists = await userModel.findOne({
        $or: [ { username }, { email } ]
    })

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "Account already exists with this email address or username"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hash
    })

    const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "10d" }
    )
    res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000 // ✅ ADD THIS
});
    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })

}

/**
 * @name loginUserController
 * @description login a user by accepting email and password as input and returning a JWT token if the credentials are valid
 * @access Public   
 */
async function loginUserController(req, res) {

    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )
    res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000 // ✅ ADD THIS
});
console.log("Login hit");
    res.status(200).json({
        message: "User loggedIn successfully.",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}

/**
 * @name logoutUserController
 * @description logout a user by blacklisting the token and clearing the cookie
 * @access Public    
 */
async function logoutUserController(req, res) {
    const token = req.cookies.token
    if (token) {
        await BlacklistModel.create({ token })
        
    }
    res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None"
});
    res.status(200).json({
        message: "User logged out successfully , Token has been blacklisted"
    })
}

/**
 * @name getProfileController
 * @description get the profile information of the logged in user
 * @access Private
 */ 
async function getProfileController(req, res) {
    const user = await userModel.findById(req.user.id)
    res.status(200).json({
        message: "User profile fetched successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}

module.exports = {
    registerUserController,
    loginUserController,
    logoutUserController,
    getProfileController
}