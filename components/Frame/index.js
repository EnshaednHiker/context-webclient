import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {markUpText} from '~/actions'
import ReactHtmlParser from 'react-html-parser'



export class Frame extends React.Component {
    constructor(props){
        super(props)

        
    }

    render(){

        if(this.props.annotation === null) {
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
        else {            
            let newString = this.props.annotation['@text'];
            console.log("first newString: ", newString);
            let arrayResources = this.props.annotation.Resources;
            arrayResources.forEach(function(resource, index){
                let word = resource['@surfaceForm']
                let regex = new RegExp(`${word}`,"i");
                
                let uri = resource['@URI'];
                let replacement = `<button type="button" class="button-link" data-url="${uri}" >${word}</button>`
                
                let dupString = newString.replace(regex,replacement);
                newString = dupString;
            });
            return (
                <div className="frame">
                    {ReactHtmlParser(newString)}
                </div>
            )
        }

    }
}
const mapStateToProps = state => {
    return ({
        annotation: state.annotations.annotation,
        annoString: state.annotations.annoString
    })
 };
 export default connect(mapStateToProps)(Frame);



