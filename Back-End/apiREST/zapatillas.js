import {Router} from 'express';
const router = Router();
const zapatillas = []

router.get('/', async(req,res)=>{
    // res.send('Aca van las zapas ?')
    res.json({zapatillas:zapatillas})
})
//agregar zapatillas
router.post('/', async(req,res)=>{
    const zapatilla = req.body
    zapatillas.push(zapatilla)
    res.json({mensaje:'Zapatilla agregada'})

})
router.put('/', async(req,res)=>{

})

export default router;