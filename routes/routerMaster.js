//maestro de rutas
import {Router} from 'express'
import conversationsRoutes from './conversationRouter.js'
import sessionRoutes from './sessionRouter.js'

const routerMaster = Router()  

routerMaster.use('/conversations', conversationsRoutes)
routerMaster.use('/session', sessionRoutes)

export default routerMaster

