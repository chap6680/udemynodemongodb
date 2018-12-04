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

MongoClient.connect('mongodb://localhost:27017/TodoMongooseApp', { useNewUrlParser: true },(err,client)=>{
	if(err){
		console.log('Unable to connect to MongoDB');
	}
	console.log('connected to mongoDb serer');
	console.log(db);

//	db.collection('Todos').find({completed: true}).toArray().then((docs) => {
	
	db.collection('Todos').countDocuments().then((count) => {
		console.log(`Todos: ${count}`);

	}, (err) => {
		console.log('unable to find docs', err);
	});
 
	
	
	client.close();
});

