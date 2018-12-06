var express = require('express');
var router = express.Router();
var Budget = require('../models/budget');

/* GET ALL Budgets */
router.get('', function(req, res, next) {
  Budget.find(function (err, budgets) {
    if (err || !budgets) return next(err);
    res.json(budgets);
  });
});

/* GET SINGLE Budget BY Id */
router.get('/:id', function(req, res, next) {
  Budget.findById(req.params.id, function (err, budget) {
    if (err || !budget) return next(err);
    res.json(budget);
  });
});

/* CREATE Budget */
router.post('/', function(req, res, next) {
  Budget.create(req.body, function (err, budget) {
    if (err || !budget) return next(err);
    res.json(budget);
  });
});

/* UPDATE Budget */
router.put('/:id', function(req, res, next) {
  Budget.findByIdAndUpdate(req.params.id, req.body, function (err, budget) {
    if (err || !budget) return next(err);
    res.json(budget);
  });
});

/* DELETE Budget */
router.delete('/:id', function(req, res, next) {
  Budget.findByIdAndRemove(req.params.id, req.body, function (err, budget) {
    if (err || !budget) return next(err);
    res.json(budget);
  });
});

module.exports = router;