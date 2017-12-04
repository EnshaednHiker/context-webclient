import React from 'react';
import Dom from 'react-dom';
import {Provider} from 'react-redux';
import store from '~/public/store.js';
import viewStyles from '~/assets/styles/dashboard.css';
import globalStyles from '~/assets/styles/globals.css';

class Dashboard extends React.Component {
    constructor(){
        super()
    
    }


    render() {
    
        return (
                <Provider store={store}>
                    <div className="" id="dashboard-view">

                    </div>
                </Provider>  
            )
    } 
}

export default function (next) {
    Dom.render(
        <Dashboard />
        , document.getElementById('root'));
} 