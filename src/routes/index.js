import {Router} from 'express'
import userRoutes from './UserRouter.js'

const routes = Router();

routes.get('/',(req,res) => {
    res.send(`<h1>Welcome to password Reset Flow Backend</h1>`)
})

routes.use('/user',userRoutes);

export default routes