const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '2d' })
}
    
// login user
const loginUser = async(req, res) => {

    // get user data
    
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // create a token

        const token = createToken(user._id)

        res.status(200).json({email, token})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async(req, res) => {
    const { name, email, password} = req.body

    try {
        const user = await User.signup(name, email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({name, email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// get all users
const getUsers = async(req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

// get a single user
const getUser = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(user)
}

// create new user
const createUser = async(req, res) => {
    const {name, email, password} = req.body

    let emptyFields = []

    if (!name){
        emptyFields.push('name')
    }
    if(!email){
        emptyFields.push('email')
    }
    if(!password){
        emptyFields.push('password')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to db
    try {
        const user = await User.create({
            name, email, password
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

// delete a user
const deleteUser = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findOneAndDelete({ _id: id })

    if (!user) {
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(user)
}

// update a user
const updateUser = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findOneAndUpdate({
        _id: id
    }, { 
        ...req.body
     })

    if (!user) {
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(user)
}

module.exports = {
    signupUser,
    loginUser,
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser
}