import React from 'react';
import Dom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import styles from '~/assets/styles/main.css';


class Main extends React.Component {
    constructor(){
        super()
    
    }


    render() {
        const style = {

        }
    
        return (
                <Provider store={store}>
                    <div style={style}>
                        <h1>test</h1>
                    </div>
                </Provider>
            )
    } 
}

export default function (next) {
    Dom.render(<Main />, document.getElementById('root'));
} 