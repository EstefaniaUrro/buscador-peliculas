const morgan = require('morgan');
const express = require('express')
const app = express()
app.use(express.urlencoded());
app.use(morgan('dev'));
app.get('/hola', function (req, res) {
    res.send('<form method="post">Nombre:<input type = "text" name = "nombre" /></form > ')
})
app.post('/hola', function (req, res) {
    var name = req.body.nombre;
    res.send(`<h1>Hola ${name}!</h1>`);
})
app.listen(3000, function () {
    console.log('Escuchando en puerto 3000!')
})