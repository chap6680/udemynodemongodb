var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODDB_URI||'mongodb://localhost:27017/TodoMongooseApp', {useNewUrlParser: true});

module.exports = { mongoose };

