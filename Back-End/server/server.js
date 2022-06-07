const express = require ('express');
const app = express();

const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando el puerto: ${PORT}`)
})
server.on('err', err=> console.log(`Codigo de error en el servidor: ${err}`))