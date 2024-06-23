const { DataTypes } = require('sequelize');
const { sequelize } = require('../configDB/db'); 

const userTask = sequelize.define('userTask', {
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  completedTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  creationTime: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

module.exports = userTask;

