var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoMongooseApp');

var Todo = mongoose.model('Todo', {
	text: {
type: String
	},
	completed: {
type: Boolean
	},
	completedAt: {
type: Number
	}
});

var newTODO = new Todo({
	text: 'walk cat',
	completed: true,
	completedAt: 12
});

newTODO.save().then((doc) => {
	console.log(JSON.stringify(doc, undefined, 2));
	mongoose.connection.close();
}, (err) => {
	console.log('unable to save', err);
	});

