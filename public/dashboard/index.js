import React from 'react';
import Dom from 'react-dom';
import {Provider} from 'react-redux';
import store from '~/public/store.js';
import viewStyles from '~/assets/styles/dashboard.css';
import globalStyles from '~/assets/styles/globals.css';

import Frame from '~/components/Frame';
import NavBar from '~/components/NavBar';
import LoadingScreen from '~/components/LoadingScreen';

class Dashboard extends React.Component {
    constructor(){
        super()
    
    }


    render() {
    
        return (
                <Provider store={store}>
                    <div className="" id="dashboard-view">
                        <NavBar textareaId="user-input-id" formId="annotate-form" link1='foo1' link2='foo2' link3="foo3"/>
                        <Frame formId="annotate-form" />
                        <LoadingScreen />
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