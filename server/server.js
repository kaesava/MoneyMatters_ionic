const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./config/DB');

var indexRouter = require('./routes/index.route');
var budgetsRouter = require('./routes/budget.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Could not connect to the database'+ err)}
);

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router setup

app.use('/api/budgets', budgetsRouter);
app.use('/api', indexRouter);

// error handler
app.use(function errorHandler (err, req, res, next) {
  console.log(err.message);
  res.status(err.status || 500);
  res.json({
    errors: [''+err.message]
  });
});

// start the server
const port = process.env.PORT || 4000;
const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

