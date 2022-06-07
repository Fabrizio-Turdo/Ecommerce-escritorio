const express = require ('express');
import morgan from 'morgan';
import hojaRuta from '../routes/route'


const app = express();

app.use('/rutas', hojaRuta)













const PORT = 8080; //server establecido
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando el puerto: ${PORT}`)
})
server.on('err', err=> console.log(`Codigo de error en el servidor: ${err}`))