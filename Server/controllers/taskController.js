const userTask = require('../models/task');

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await userTask.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new task
const createTask = async (req, res) => {
  const { task, completed } = req.body;

  try {
    const newTask = await userTask.create({
      task,
      completed,
      completedTime: completed ? new Date() : null,
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  const { task } = req.body;

  try {
    const deletedTask = await userTask.destroy({ where: { task } });

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a task
const updateTask = async (req, res) => {
  const { task, completed } = req.body;

  try {
    const existingTask = await userTask.findOne({ where: { task } });

    if (!existingTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    existingTask.completed = completed;
    existingTask.completedTime = completed ? new Date() : null;

    const updatedTask = await existingTask.save();

    res.json({ message: 'Task updated successfully', updatedTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
};
