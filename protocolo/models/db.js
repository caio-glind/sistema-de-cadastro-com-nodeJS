const Sequelize = require('sequelize')
//CONXÃO COM O BANCO DE DADOS MYSQL
const sequelize = new Sequelize('postagem', 'root', 'aladim',{
    host: "localhost",
    dialect: 'mysql',
    port:8081
  })
  module.exports=sequelize;
  