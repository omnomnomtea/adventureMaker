const Sequelize = require('sequelize')
const db = require('../db')

const Passage = db.define('passage', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
  },
  canStartAdventure: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Passage;
