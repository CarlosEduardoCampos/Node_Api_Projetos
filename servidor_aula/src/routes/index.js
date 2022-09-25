import{Router} from 'express';

const routes = new Router();

routes.get('/',(res,req) => {
    res.status(200).json({ok:'conected'})
})

export default routes;