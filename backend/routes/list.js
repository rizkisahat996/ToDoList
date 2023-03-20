const express = require('express')
const {
  createList,
  getLists,
  getList,
  deleteList,
  updateList
} = require('../controllers/listController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// auth middleware
router.use(requireAuth)

// GET all Lists
router.get('/', getLists)

//GET a single List
router.get('/:id', getList)

// POST a new List
router.post('/', createList)

// DELETE a List
router.delete('/:id', deleteList)

// UPDATE a List
router.patch('/:id', updateList)


module.exports = router