const mongoose = require('mongoose');
const URI = 'mongodb://localhost/vacunacion';
const URI2 = 'mongodb://localhost/login-node';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

mongoose.connect(URI2, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
