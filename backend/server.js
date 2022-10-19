const express = require('express')
const dotenv = require('dotenv').config()
const { errHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')


const PORT = 5000

const app = express()

connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errHandler)

app.listen(PORT, () => console.log(`server started at ${PORT}`));
