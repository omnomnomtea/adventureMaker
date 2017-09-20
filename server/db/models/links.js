const Sequelize = require('sequelize')
const db = require('../db')

const Link = db.define('link', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
  }
})

module.exports = Link;
