const express  = require('express');
const server   = express();

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

const nunjucks = require('nunjucks'); //configura nunjucks (template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true, //tira o cache, ou seja, pega sempre o conteúdo mais recente
    
})

//Inicio e config. do servidor
server //configurar arquivos estáticos (css, scripts, imgs)
.use(express.urlencoded({extended: true}))//receber dados do reg.body
.use(express.static("public"))
.get("/", pageLanding)//rotas da aplicação
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5000)//start do servidor