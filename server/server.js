var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var players = require('./routes/players');
var coachs = require('./routes/coachs');
var trainings = require('./routes/trainings');
var historyTable = require('./routes/historyTable');

var app = express();

var port = 3000;

app.listen(port, function() {
  console.log('Server running on port', port);
});

//views

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Body parser MW

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routes

app.use('/', index);
app.use('/api', players);
app.use('/api', coachs);
app.use('/api', trainings);
app.use('/api', historyTable);
