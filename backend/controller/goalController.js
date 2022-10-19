const express = require('express')
const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async(req, res) => {

    
    res.status(200).json({message: 'goals list'})
})

const setGoals = asyncHandler(async(req, res) => {

    if(!req.body.text)
    {
        res.status(400)
        throw new Error('please add text field')
    }


    res.status(200).json({message: "goal created"})
})

const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `goal updated ${req.params.id}`})
})

const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: `deleted goal ${req.params.id}`})
})

module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}