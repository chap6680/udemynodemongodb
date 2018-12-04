// const MongoClient = require('mongodb').MongoClient;
//const {MongoClient, ObjectID} = require('mongodb');
const {ObjectID} = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
var id = '6c0sdfa4a60603058821084b35c5';

if (!ObjectID.isValid(id)) { 
	console.log('not valid');
};

//if nothing is found, and the id is a valid mongod id structure, 
//it does not error out - just keeps going

//returns an Array - 
/* 
Todo.find({
	_id: id
}).then((todos) => {
	console.log('todos', todos);
});


//returns object of one
//if empty - null
Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('todos:', todo);
});
 */


//returns object of one
//if empty - null
Todo.findById(id).then((todo) => {
	if (!todo) { 
		return console.log('ID not found');
	}
	console.log('todos by id:', todo);
}).catch((e) => console.log(e));
