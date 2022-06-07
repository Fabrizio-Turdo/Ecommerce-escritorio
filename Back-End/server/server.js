const express = require ('express');
const morgan = require("morgan");
import hojaRuta from '../routes/route'
import apiZapas from '../apiREST/zapatillas'


const app = express();

app.use('/rutas', hojaRuta)
app.use('/zapatillas', apiZapas)

app.use(morgan("dev"));
app.use(express.static(__dirname + "./public"));












const PORT = 8080; //server establecido
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando el puerto: ${PORT}`)
})
server.on('err', err=> console.log(`Codigo de error en el servidor: ${err}`))