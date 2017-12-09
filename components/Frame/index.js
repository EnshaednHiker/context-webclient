import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {   } from '~/actions'



export class Frame extends React.Component {
    constructor(props){
        super(props)

        
    }

    render(){

        return (
                <textarea 
                    name="userInput"
                    form={this.props.formId} 
                    className="frame" 
                    required
                    placeholder="paste in text to annotate here"
                > 
                </textarea> 
            )
    }
}
const mapStateToProps = state => {
    return ({
        annoString: state.annoString
        
    })
 };
 export default connect(mapStateToProps)(Frame);
