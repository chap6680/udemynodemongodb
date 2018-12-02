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

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client)=>{
	if(err){
		console.log('Unable to connect to MongoDB');
	}
	console.log('connected to mongoDb serer');
	const db = client.db('TodoApp');

	// delete many
/* 	db.collection('Todos').deleteMany({ text: 'eat' }).then((result) => { 
		console.log(result);
	}, (err) => { 
		console.log("error: ", err);
	});
 */	// delete one
/* 	db.collection('Todos').deleteOne({ text: 'eat' }).then((result) => { 
		console.log(result);
	}, (err) => { 
		console.log("error: ", err);
	});
 */
	db.collection('Todos').findOneAndDelete({ completed: true }).then((result) => { 
	console.log(result);
}, (err) => { 
	console.log("error: ", err);
});


	// find one and delete

/* 
	db.collection('Todos').countDocuments().then((count) => {
		console.log(`Todos: ${count}`);

	}, (err) => {
		console.log('unable to find docs', err);
	});
 */ 
	
	
//	client.close();
});

