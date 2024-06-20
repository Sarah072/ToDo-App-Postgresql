const express = require('express');
const cors = require('cors');
const connectDB = require('./configDB/db');
const taskRoutes = require('./routes/taskRoute');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true, 
  }));


connectDB();

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


