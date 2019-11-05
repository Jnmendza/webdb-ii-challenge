const express = require('express');

const knex = require('../data/dbConfig')
const router = express.Router()


// Read
router.get('/', (req, res) => {
    knex
        .select("*")
        .from("cars")
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: "Failed to retrieve Cars" })
        })
})

// Create
router.post('/', (req, res) => {
    knex
        .insert(req.body, "id")
        .into('cars')
        .then(id => {
            res.status(201).json(id);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: "Failed to add a car." })
        })
})


module.exports = router;