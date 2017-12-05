import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'

export class Frame extends React.Component {
    constructor(props){
        super(props)

    }

    render(){


        return (
                <iframe 
                    title="frame" 
                    name="frame" 
                    marginHeight="0" 
                    marginWidth="0" 
                    className="frame" 
                    frameBorder="0" 
                    scrolling="auto" 
                    src="https://www.gatesnotes.com/About-Bill-Gates/Best-Books-2017">
                </iframe>
            )
    }
}
const mapStateToProps = state => {
    return ({
        
    })
 };
 export default connect(mapStateToProps)(Frame);