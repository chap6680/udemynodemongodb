// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/* es6 destructing 
var obj = new ObjectID();
console.log(obj);
 */

/*  es6 destructing 
var user = { name: 'David', age: 47 };
var { name } = user;
console.log(name);
 */

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
	if(err){
		console.log('Unable to connect to MongoDB');
	}
	console.log('connected to mongoDb serer');
	const db = client.db('TodoApp');
	
	/* db.collection('Todos').insertOne({
		text: 'do something1',
		completed: false
	}, (err, result) => {
		if (err) {
			return console.log('unable to insert todo', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2))
	});
 */
	
/* 	db.collection('Users').insertOne({
	name: 'david',
	age: 47,	
	location: 'Denver'
}, (err, result) => {
	if (err) {
		return console.log('unable to insert todo', err);
	}

//	console.log(JSON.stringify(result.ops, undefined, 2))
	console.log(result.ops[0]._id.getTimestamp());
});

	 */
	client.close();
});

