const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize1', 'adriano', '1234', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

// try {

//     sequelize.authenticate()
//     console.log('Conectado com sucesso ao sequelize')

// } catch(err) {
//     console.log('Não foi possível conectar: ', error)
// }

module.exports = sequelize