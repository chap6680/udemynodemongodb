const lodash = require('lodash'); 
var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

//DEPLOY TO HEROKU
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/todos', (req, res) => { 
	Todo.find().then((todos) => {
		res.send({ todos });
	}, (e) => {
		res.status(400).send(e);
	});
});


app.get('/todos/:id', (req, res) => {
	console.log('start');
	var id = req.params.id;
	console.log(id);
	//	res.send(req.parms);
	
	//validateid
	if (!ObjectID.isValid(id)) {
		console.log('checkvalid');
		return res.status(404).send();
	};
	
	Todo.findById(id).then((todo) => {
		console.log('find function');
		if (!todo) {
			return res.status(404).send();
		}
		res.send({ todo });
		//console.log('todos by id:', todo);
	}).catch((e) => {
		return res.status(400).send();
	});
});

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

app.post('/todos', (req, res) => {
	var todo = new Todo({
	  text: req.body.text
	});
  
	todo.save().then((doc) => {
	  res.send(doc);
	}, (e) => {
	  res.status(400).send(e);
	});
  });


app.patch('/todos/:id', (req, res) => {
	var id = req.params.id;
	var body = lodash.pick(req.body, ['text', 'completed']);

	//validateid
	if (!ObjectID.isValid(id)) {
		console.log('checkvalid');
		return res.status(404).send();
	};
	
	if (lodash.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	};

	Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}
		res.send({ todo });
	}).catch((e)=> {
		res.status(400).send();
	})
});

// DEPLOY TO HEROKU - CHANGE 3000 to PORT
app.listen(port, () => {
	console.log(`Server started on ${port}`);
});

module.exports = { app };