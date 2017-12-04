import Router from '~/system/router.js';
import Main from './main';
import Dashboard from './dashboard';
import GlobalsCSS from '~/assets/styles/globals.css'
import Normalize from 'normalize.css'
import FontAwesome from 'font-awesome-webpack';


//to do: create a second page that takes dynamic segment i.e. user/:ID
const routes = {
    '/': Main ,
    '/dashboard': Dashboard /*,
    '/about' : About,
    '/contact' : Contact */
}

Router.register(routes).init('#/');
