const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body
    if(!name || !email || !password)
    {
        res.status(400)
        throw new Error('please enter all details')
    }

    const userExist = await User.findOne({ email })
    if(userExist)
    {
        res.status(400)
        throw new Error('User already exist')
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashPassword
    })

    if(user)
    {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            
        })
    } else{
        res.status(400)
        throw new Error('Invalid user data')
    }

    
})

const login = asyncHandler(async(req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email })
    if(user && (await bcrypt.compare(password, user.password)))
    {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }
    else {
        res.status(401)
        throw new Error('Invalid credential')
    }
    
})

const getMe = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'User data'})
})

module.exports = {
    registerUser, login, getMe
}