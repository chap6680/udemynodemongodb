var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => { 
	console.log(req.body);
	var todo = new Todo({
		text: req.body.text
	});

	console.log('going into save');

	todo.save().then((doc) => {
		console.log('inside save');
		res.send(doc);
	}, (err) => {
		console.log('error: ');
		res.status(400).send(err);
	});
});

app.listen(3000, () => {
	console.log('Server started on 3000');
});

module.exports = { app };