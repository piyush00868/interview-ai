const mongoose = require("mongoose");
const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required to be blacklisted"],
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields time stamps is set to true to automatically manage these fields time 
const BlacklistModel = mongoose.model("Blacklist", blacklistSchema); // Blacklist is the name of the collection in MongoDB, and blacklistSchema is the schema we defined for that collection
module.exports = BlacklistModel;
