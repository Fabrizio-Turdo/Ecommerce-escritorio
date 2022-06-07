import {Router} from 'express';

const router = Router();

router.get('/', async(req,res)=>{
    res.send('mi hoja de rutas')
})

export default router;