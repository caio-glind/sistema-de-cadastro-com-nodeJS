const express = require("express");// ta exportantodo a biblioteca exprss que cria o servidor
const app = express();//ta gusradando as funçãos da biblioteca 
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const database=require('./models/db');
const Post = require('./models/Post');

                                    

                                                                   // |sequelize: concta com o banco de dados                          |
                                                                   // |exprese: ta criando as rotas                                    |
                                                                   // |handlebars: ta exportanto os formularios e tudo que involve html|

//------------------------------------------------------------------------------------------------------------------------------------

  






//--------------------------------------------------------------------------------------------------------------------------------------



  // body parser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
 
  //Config
  //Templeite enegine
app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


//rotas

app.get('/relogio', function(req, res){
 
  res.sendFile(`${__dirname}/x.html`)
})

app.get('/',function (req,res){
   Post.findAll().then(function(posta){
     res.render(__dirname +'/views/layouts/home',{posta : posta})
   })
  
 })  
app.get('/formulario', function(req, res){
 
  res.render(__dirname +'/views/layouts/formulario')//rota do formulario
})
 


app.post('/add',function(req,res){
  (async()=>{

   
    await database.sync();
    
    const novapostagem = await Post.create({
        titulo: req.body.titulo,
        conteudo:req.body.conteudo
    })
  })
  ();//esta adiconando o conteudo do formulario 
   
res.redirect('/')

})
app.get('/deleta/:id', function(req,res){
  Post.destroy({where: {'id':req.params.id}})
  res.sendFile(`${__dirname}/delet.html`)
})






app.listen(8078,function(){
  console.log(" servido ta ligado na url : http://localhost:8078/")
})
