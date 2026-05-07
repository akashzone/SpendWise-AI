
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

const main = async ()=>{
    await mongoose.connect(MONGO_URI);
};

main().then(()=>{
    console.log("MongoDB Connected");
}).catch(err => console.log(`ERR : ${err}`));

app.get("/",(req,res)=>{
    res.send("root route working!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});