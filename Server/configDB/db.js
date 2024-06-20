const mongoose = require('mongoose');

const connectDB = async () => {

const DB = 'mongodb+srv://sarahnasir555:Ru0hk4inHIzvSGt0@cluster0.joqh69w.mongodb.net/TodoApp?retryWrites=true&w=majority';

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000, 
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));
};

module.exports = connectDB;
