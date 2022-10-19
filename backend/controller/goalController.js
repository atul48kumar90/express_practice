const express = require('express')
const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find();
    
    res.status(200).json(goals)
})

const setGoals = asyncHandler(async(req, res) => {

    if(!req.body.text)
    {
        res.status(400)
        throw new Error('please add text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })


    res.status(200).json(goal)
})

const updateGoals = asyncHandler(async(req, res) => {

    const goal = Goal.findById(req.params.id)
    if(!goal)
    {
        res.status(404)
        throw new Error('goal not found')
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json({ message: `goal updated ${req.params.id}`})
})

const deleteGoals = asyncHandler(async(req, res) => {
    const goal = Goal.findById(req.params.id)
    if(!goal)
    {
        res.status(404)
        throw new Error('Goal not found')
    }
    await goal.remove()
    res.status(200).json({message: `deleted goal ${req.params.id}`})
})

module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}