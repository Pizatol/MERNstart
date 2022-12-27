const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.mongoConnection, {
    useNewUrlParser: true,
});



app.listen(process.env.PORT || 3001, () => {
    console.log("Server runs on 3001");
});
