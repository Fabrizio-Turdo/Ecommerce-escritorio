import {Router} from 'express';
const router = Router();
const Contenedor = require('../contenedor')
const zapatillas = new Contenedor("zapatillas.txt")

// admin o user
const admin = true;

//middleware para accesos a metodos
function adminOrUserPost(req, res, next){
    if (admin){
        next()
    } else{
        res.json({error: -1, description: "route /api/productos/ metodo post no autorizado"})
    }
}

function adminOrUserPut(req, res, next){
    if (admin){
        next()
    } else{
        res.json({error: -1, description: "route /api/productos/ metodo put no autorizado"})
    }
}

function adminOrUserDelete(req, res, next){
    if (admin){
        next()
    } else{
        res.json({error: -1, description: "route /api/productos/ metodo delete no autorizado"})
    }
}

//todos los productos
router.get('/', async(req,res)=>{
    const productos = await zapatillas.getAll();
    res.json(productos)
})
//agregar zapatillas
router.post('/', async(req,res)=>{

    const zapatilla = req.body
    zapatillas.push(zapatilla)
    console.log('anda')
    res.json({mensaje:'Zapatilla agregada'})

})
router.put('/', async(req,res)=>{

})

export default router;