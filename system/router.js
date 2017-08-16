import {Router} from 'director/build/director';

const router = new Router()
router.register = function (routes={}) {
    Object.keys(routes).forEach((route)=>{
        router.on(route,routes[route]);
    });
    return router
}

export default router;