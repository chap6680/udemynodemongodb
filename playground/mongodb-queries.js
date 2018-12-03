// const MongoClient = require('mongodb').MongoClient;
//const {MongoClient, ObjectID} = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../models/todo');
var id = '5c0421381c597024d45f6471';


Todo.find({
	_id: id
}).then((todos) => {
	console.log('todos', todos);
	});

	Todo.findOne({
	_id: id
		}).then((todos) => {
	console.log('todos', todos);
	});


