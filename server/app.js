require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
// const DB="mongodb+srv://knitika1129@cluster0.3vg8vvi.mongodb.net/mernstack.users?=true&w=majority"

require("./db/conn");




const port=8003;

app.listen(port,()=>{
    console.log(`sever is satrt port  number ${port}`);
});
