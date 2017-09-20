const Sequelize = require('sequelize')
const db = require('../db')

const Adventure = db.define('adventure', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
  }
})

module.exports = Adventure;
