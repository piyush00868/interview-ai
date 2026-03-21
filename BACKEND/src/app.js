const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors')

const app = express();
app.set("trust proxy", 1);
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'https://interview-ai-gamma-three.vercel.app',
    credentials : true
}))

// require all the routes here
const authrouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");


// use the routes here
app.use("/api/auth", authrouter);
app.use("/api/interview", interviewRouter);

module.exports = app;
