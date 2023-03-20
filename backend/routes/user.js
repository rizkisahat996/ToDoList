const { json } = require('express')
const express = require('express')
const {
    signupUser,
    loginUser,
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// sign up route
router.post('/signup', signupUser)

// GET all workouts
router.get('/', getUsers)

// GET a single workout
router.get('/:id', getUser)

// POST a new workout
router.post('/', createUser)

// DELETE a new workout
router.delete('/:id', deleteUser)

// UPDATE a new workout
router.patch('/:id', updateUser)

module.exports = router