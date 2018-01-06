
import Main from './main';
import Dashboard from './dashboard';
import GlobalsCSS from '~/assets/styles/globals.css'
import Normalize from 'normalize.css'
import FontAwesome from 'font-awesome-webpack';
import {Router} from 'director/build/director';
import system from '~/system';
import store from '~/public/store.js'; 
import {logout,setLocation} from '~/actions';
//to do: create a second page that takes dynamic segment i.e. user/:ID
const routes = {
    '/': Main ,
    '/dashboard': Dashboard 
}

const router = new Router (routes);

router.configure({
    before: protectRoutes,
    after: setLocationHash
});

router.init('#/');

function protectRoutes () {
        //create system.authorization to decrypt token and check exp and int.
        let user = system.identity();
    
        let userArray=Object.values(user);
        //system.authorization(user) returns true if the decoded token has not expired
        if(userArray.length===0 || !(system.authorization(user)) ){
            store.dispatch(logout());
        }
        else {
            console.log('user verified');
        }
}

function setLocationHash () {
    store.dispatch(setLocation(window.location.hash));
}
