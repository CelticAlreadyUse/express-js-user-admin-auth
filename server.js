const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000
const dotenv = require('dotenv')
const session = require('express-session')
dotenv.config()
app.use(session({
	secret:process.env.SESSION_KEY,
	resave:false,
	saveUninitialized:true,
	cookie:{
		secure:'auto',

	}
}))
app.use(cors({
	origin:`http://localhost:5173`
}))
app.use(express.json())
app.use(express.static('public'))
const userRouter = require('./src/Users/user.controller')

app.use('/users',userRouter)
app.listen(port)