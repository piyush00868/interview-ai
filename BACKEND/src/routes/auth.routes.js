const express = require("express");  
const authcontroller = require("../controllers/auth.controller");   
const authMiddleware = require("../middlewares/auth.middleware");
const authrouter = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authrouter.post("/register", authcontroller.registerUserController);

 
/**
 * @route POST /api/auth/login
 * @desc Login a user with email and password
 * @access Public  
 * */
authrouter.post("/login", authcontroller.loginUserController);

/**
 * @route GET /api/auth/logout
 * @desc Logout a user by blacklisting the token
 * @access Public
 * */
authrouter.get("/logout", authcontroller.logoutUserController);


/**
 * @route GET /api/auth/getprofile
 * @desc Get the current user's profile information
 * @access Private
 */
authrouter.get("/getprofile", authMiddleware.authUser, authcontroller.getProfileController)

 module.exports = authrouter;