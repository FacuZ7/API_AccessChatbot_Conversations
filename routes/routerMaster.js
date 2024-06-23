//maestro de rutas
import {Router} from 'express';
import vectorRouter from './vectorRouter.js';
import conversationsRoutes from './conversationRouter.js';
import sessionRoutes from './sessionRouter.js';
import clientRouter from './clientRouter.js';

const routerMaster = Router()  

routerMaster.use('/conversations', conversationsRoutes);
routerMaster.use('/create-vector', vectorRouter);
routerMaster.use('/session', sessionRoutes);
routerMaster.use('/clients', clientRouter);

routerMaster.use('/', (req, res)=>{
    res.json('use the following paths: /conversations, /session, /clients')
});

export default routerMaster

