const mongoose = require('mongoose');
const secret = require('../secrets.js')
const MONGO_URI = secret.mongoURI;

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'pets'
})

    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

//Create schema for user database
const userSchema = new Schema({
  username: String,
  pets: Array,
  
});

//Create model for pet database
const User = mongoose.model('user', userSchema);

module.exports = User;