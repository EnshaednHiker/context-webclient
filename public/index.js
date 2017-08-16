import Router from '~/system/router.js';
import Main from './main';


//to do: create a second page that takes dynamic segment i.e. user/:ID
const routes = {
    '/': Main
}

Router.register(routes).init('#/');
