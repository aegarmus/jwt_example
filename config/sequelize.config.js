const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres',
    logging: false
}) 

async function syncDB () {
    try {
        await db.authenticate()
        console.log('Conección lograda')
    }catch(error) {
        console.error('No nos pudimos conectar', error)
    }
}

syncDB()

module.exports = db