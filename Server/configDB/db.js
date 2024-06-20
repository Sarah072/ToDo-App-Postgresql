require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {

  const mongoDBUri = process.env.MONGODB_URI;

  // Connect to MongoDB
  mongoose.connect(mongoDBUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000, 
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));
};

module.exports = connectDB;
