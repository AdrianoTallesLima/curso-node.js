const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc1', 'adriano', '1234', {
    host: '127.0.0.1',
    dialect: 'mysql',
})

try {

    sequelize.authenticate()
    console.log('Conectamos ao MySql')

} catch(error) {
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize