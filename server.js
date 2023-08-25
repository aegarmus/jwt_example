var createError = require('http-errors');
var express = require('express');
var path = require('path');
const dotenv = require('dotenv')

dotenv.config()


//para autentificar
var authRouter = require('./routes/auth.routes');
//rutas de usuarios
var usersRouter = require('./routes/users.routes');
//rutas de bootcamps
var bootcampsRouter = require('./routes/bootcamps.routes');

var app = express();
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//carga la autentificacion
app.use('/api', authRouter);
app.use(usersRouter);
app.use(bootcampsRouter);


module.exports = app;

app.listen(3000, () => {
  console.log("Server is running on port: 3000" )
})