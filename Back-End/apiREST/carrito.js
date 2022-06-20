import {Router} from 'express';
const router = Router();
const emptyCart = []


//de esta forma se muetran todos los elementos agregados?
router.get('/', async(req,res)=>{
    res.json({carrito:emptyCart})

})



export default router;