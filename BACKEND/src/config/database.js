const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DataBase");
    } catch (error) {
        console.error('Error connecting DataBase:', error);
    }
}

module.exports = connectDB;
