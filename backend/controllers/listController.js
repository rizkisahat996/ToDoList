const List = require('../models/listModel')
const mongoose = require('mongoose')

const getLists = async (req, res) => {
  // this gets each user's task but it doesnt work
  const user_id = req.user._id

  const lists = await List.find({ user_id }).sort({createdAt: -1})
  // const lists = await List.find({  }).sort({createdAt: -1})

  res.status(200).json(lists)
}

const getList = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such list'})
  }

  const list = await List.findById(id)

  if (!list) {
    return res.status(404).json({error: 'No such list'})
  }
  
  res.status(200).json(list)
}


const createList = async (req, res) => {
  const {title, description} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!description) {
    emptyFields.push('description')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    // this supposedly create each user's task but it doesnt work

    const user_id = req.user_id
    const list = await List.create({title, description, user_id})
    // const list = await List.create({title, description})
    res.status(200).json(list)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const deleteList = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such list'})
  }

  const list = await List.findOneAndDelete({_id: id})

  if (!list) {
    return res.status(400).json({error: 'No such list'})
  }

  res.status(200).json(list)
}

// update a list
const updateList = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such list'})
  }

  const list = await List.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!list) {
    return res.status(400).json({error: 'No such list'})
  }

  res.status(200).json(list)
}


module.exports = {
  getLists,
  getList,
  createList,
  deleteList,
  updateList
}