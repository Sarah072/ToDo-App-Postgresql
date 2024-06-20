const express = require('express');
const { getAllTasks, createTask, deleteTask, updateTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/getTasks', getAllTasks);
router.post('/createTasks', createTask);
router.post('/deleteTasks', deleteTask);
router.post('/updateTasks', updateTask);

module.exports = router;
