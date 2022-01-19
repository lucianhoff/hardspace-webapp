const express = require("express");
const cors = require("cors");
const passport = require('passport')
const Router = require('./routes/routes')
require('dotenv').config()
require('./config/database')
const app = express()
const fileUpload = require('express-fileupload')

// middlewares

app.use(cors())
app.use(express.json());
app.use(passport.initialize())
app.use(fileUpload())
app.use('/api', Router)

app.listen( process.env.PORT || 4000, process.env.HOST || '0.0.0.0' ,()=> console.log(`Server listening on port ${process.env.PORT || 4000}`))