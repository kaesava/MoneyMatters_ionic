const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Budgets
let Budget = new Schema({
  desc: {
    type: String
  },
  amt: {
    type: Number
  }
},{
    collection: 'budget'
});

module.exports = mongoose.model('Budget', Budget);