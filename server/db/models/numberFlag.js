const Sequelize = require('sequelize')
const db = require('../db')

const NumberFlag = db.define('numberFlag', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  operation: {
    // the first 5 are instructions to set a variable
    // the remaining ones are instructions to compare the variable in state
    // (in store or session) to the "value"
    type: Sequelize.ENUM('+', '-', '*', '/', '=', '>', '<', '<=', '>=', '==='),
    allowNull: false
  },
  value: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = NumberFlag;
