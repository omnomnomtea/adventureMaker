const Sequelize = require('sequelize')
const db = require('../db')

const Passage = db.define('passage', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
  }
})

module.exports = Passage;
