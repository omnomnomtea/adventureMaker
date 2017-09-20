const Sequelize = require('sequelize')
const db = require('../db')

const StringFlag = db.define('stringFlag', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  operation: {
    // the first thing in the enum is an instruction to set a variable
    // the remaining one is an instruction to compare the variable in state
    // (in store or session) to the "value" and return true or false
    type: Sequelize.enum('=', '==='),
    allowNull: false
  },
  value: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = StringFlag;
