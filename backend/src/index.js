require("dotenv").config(); 
const express = require("express")
const dbConnect = require("./db");

const app = express()

dbConnect(); 

app.listen(process.env.PORT)