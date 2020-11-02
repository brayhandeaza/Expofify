const { Sequelize } = require('sequelize')

module.exports = new Sequelize({
    database: "spotify",
    dialect: "postgres"
})