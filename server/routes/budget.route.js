const express = require('express');
const app = express();
const budgetRoutes = express.Router();

// Require Budget model in our routes module
let Budget = require('../models/Budget');

// Defined store route
budgetRoutes.route('/create').post(function (req, res) {
  let budget = new Budget(req.body);
  budget.save()
    .then(game => {
    res.status(200).json({'budget': 'Budget created successfully'});
    })
    .catch(err => {
    res.status(400).send("error: Unable to create Budget");
    });
});

// Defined get data(index or listing) route
budgetRoutes.route('/index').get(function (req, res) {
    Budget.find(function (err, budgets){
    if(err){
      console.log(err);
      res.status(400).send("error: Unable to get Budget list");
    }
    else {
      res.json(budgets);
    }
  });
});

// Defined edit route
budgetRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Budget.findById(id, function (err, budget){
      res.json(budget);
  });
});

//  Defined update route
budgetRoutes.route('/:id').put(function (req, res) {
    Budget.findById(req.params.id, function(err, budget) {
    if (!budget)
      return next(new Error('Could not load Document'));
    else {
        budget.desc = req.body.desc;
        budget.amt = req.body.amt;

        budget.save().then(budget => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
budgetRoutes.route('/:id').delete(function (req, res) {
    Budget.findByIdAndRemove({_id: req.params.id}, function(err, budget){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = budgetRoutes;