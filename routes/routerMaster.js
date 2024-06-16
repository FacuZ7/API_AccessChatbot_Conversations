//maestro de rutas
import {Router} from 'express'
import conversationsRoutes from './conversationRouter.js'

const routerMaster = Router()  

routerMaster.use('/conversations', conversationsRoutes)

export default routerMaster

