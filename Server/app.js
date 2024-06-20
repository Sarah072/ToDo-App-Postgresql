const express = require('express');
const cors = require('cors');
const connectDB = require('./configDB/db');
const taskRoutes = require('./routes/taskRoute');

const app = express();

app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true, // Allow cookies to be sent
  }));


connectDB();

// Routes
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


