// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

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

	db.collection('Users').findOneAndUpdate({
			_id: new ObjectId("5c03f5901fb02e33e4117d79")
		}, {
			$set: {
				name: 'Jen',
				completed: false
			},
			$inc: {
				age: 1
			}
		}, {
			returnOriginal:false
		})
		.then((result) => { 
			console.log(result);
		}, (err) => { 
		console.log("error: ", err);
});

	client.close();
});

