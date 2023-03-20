const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: false
  }
}, { timestamps: true })

module.exports = mongoose.model('List', listSchema)