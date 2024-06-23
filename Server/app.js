// app.js
const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoute');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true,
}));

const db = require('./configDB/db'); 

(async () => {
  try {
    await db.sequelize.sync();
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database', error);
  }
})();

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
