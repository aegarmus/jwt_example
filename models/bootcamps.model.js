const { DataTypes: dt } = require('sequelize')
const db = require('../config/sequelize.config')

const Bootcamp = db.define('bootcamp', {
  title: {
    type: dt.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 45],
        msg: 'El largo del titulo debe medir entre 2 y 45 caracteres'
      }
    }
  },
  cue: {
    type: dt.INTEGER,
    allowNull: false,
    default: 1
  },
  description: {
    type: dt.STRING,
    allowNull: false,
  }
}, {timestamps: true})

module.exports = Bootcamp