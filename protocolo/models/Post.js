const Sequelize = require('sequelize');
const db = require('./db');

const Post = db.define('posta',{
  id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
  },
  titulo:{
      type: Sequelize.STRING,
      allowNull:false
  },
  conteudo:{
      type :Sequelize.STRING,
      allowNull:false

  }
})
module.exports=Post;
