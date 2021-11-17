const express = require('express')
const app = express()
const port = 3000 // variavel de ambiente
const path = require("path")

const basePath = path.join(__dirname, 'templates')

// const checkAuth = function(req, res, next) {

//     req.authStatus = true

//     if(req.authStatus) {
//         console.log('Está logado, pode continuar')
//         next()
//     } else {
//         console.log('Não está logado, faça o login para continuar')
//         next()
//     }
// }

// app.use(checkAuth)

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //leitura da tabela users, resgatar um usuário
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/index.html`)

})

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})

app.listen(port, () => {

    console.log(`App rodando na porta ${port}`)

})
