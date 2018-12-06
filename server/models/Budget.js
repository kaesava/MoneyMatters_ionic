var mongoose = require('mongoose');

var budgetSchema = new mongoose.Schema({
  desc: String,
  amt: Number,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Budget', budgetSchema);