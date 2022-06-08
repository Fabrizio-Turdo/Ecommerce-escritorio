const express = require ('express');
const morgan = require("morgan");
const path = require('path')
const publicPath = path.join(process.cwd(), '/Back-End/public')
import hojaRuta from '../routes/route'
import apiZapas from '../apiREST/zapatillas'


const app = express();

//diferencias entre estas dos ?
app.use('/rutas', hojaRuta)
app.use('/zapatillas', apiZapas)

app.use(morgan("dev"));
app.use(express.static(publicPath))







const PORT = 8080; //server establecido
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando el puerto: ${PORT}`)
})
server.on('err', err=> console.log(`Codigo de error en el servidor: ${err}`))