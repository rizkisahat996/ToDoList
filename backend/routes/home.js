const { json } = require('express')
const express = require('express')

const router = express.Router()

// GET all datas
router.get('/', (req, res) => {
    res.json({
        msg: 'GET all datas'
    })
})

// GET a single data
router.get('/:id', (req, res) => {
    res.json({
        msg: 'Get a single data'
    })
})

// POST a new data
router.post('/', (req, res) => {
    res.json({
        msg: 'POST a new data'
    })
})

// DELETE a new data
router.delete('/:id', (req, res) => {
    res.json({
        msg: 'DELETE a new data'
    })
})

// UPDATE a new data
router.patch('/:id', (req, res) => {
    res.json({
        msg: 'UPDATE a new data'
    })
})

module.exports = router