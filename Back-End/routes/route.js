import {Router} from 'express';

const router = Router();

router.get('/', async(req,res)=>{
    res.send('esta ruta si anda ')
})

export default router;