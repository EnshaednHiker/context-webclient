
import Main from './main';
import Dashboard from './dashboard';
import GlobalsCSS from '~/assets/styles/globals.css'
import Normalize from 'normalize.css'
import FontAwesome from 'font-awesome-webpack';
import {Router} from 'director/build/director';
import system from '~/system';
import store from '~/public/store.js'; 
import {logout,setLocation} from '~/actions';
import { getAnnotations } from '../actions/index';
import imgLarge from '~/assets/images/book_stacks_large.jpeg';
import imgMedium from '~/assets/images/book_stacks_medium.jpeg';
import imgSmall from '~/assets/images/book_stacks_small.jpeg';
import gif1 from '~/assets/images/step1gif.gif';
import gif2 from '~/assets/images/step2gif.gif';
import gif3 from '~/assets/images/step3gif.gif';
import gif4 from '~/assets/images/step4gif.gif';

//to do: create a second page that takes dynamic segment i.e. user/:ID
const routes = {
    '/': Main ,
    '/dashboard': Dashboard 
}

const router = new Router (routes);

router.configure({
    before: protectRoutes,
    before:getRecentAnnotations,
    after: setLocationHash,
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

function getRecentAnnotations () {
    let currentStore = store.getState()

    if (currentStore.user.location.includes('dashboard')){
        let user = system.identity();
        store.dispatch(getAnnotations(user.id));
    }
    else {
        console.log("No annotations to get here!")
    }
}

function setLocationHash () {
    store.dispatch(setLocation(window.location.hash));
}
