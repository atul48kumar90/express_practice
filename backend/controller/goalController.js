const express = require('express')

const getGoals = (req, res) => {

    
    res.status(200).json({message: 'goals list'})
}

const setGoals = (req, res) => {

    console.log(req.body.text)
    res.status(200).json({message: "goal created"})
}

const updateGoals = (req, res) => {
    res.status(200).json({ message: `goal updated ${req.params.id}`})
}

const deleteGoals = (req, res) => {
    res.status(200).json({message: `deleted goal ${req.params.id}`})
}

module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}