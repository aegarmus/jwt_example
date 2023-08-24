const db = require('../config/sequelize.config')
const User = require('../models/users.model')
const Bootcamp = require('../models/bootcamps.model')

User.belongsToMany(Bootcamp, { through: 'user_bootcamp', as : 'bootcamps'})
Bootcamp.belongsToMany(User, { through: 'user_bootcamp', as : 'users'})

try {
    db.sync()
}
catch (err) {
    console.error('Something went wrong with the SYNC of the table Transferencia', err)
}


module.exports = { User, Bootcamp }