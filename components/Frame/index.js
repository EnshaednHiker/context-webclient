import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {markUpText} from '~/actions';
import Words from '~/components/Words';





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
            let separator = "45098quarksdfglijhg34bitcoin5987xvckjhg3madness562867"            
            let newString = this.props.annotation['@text'];
            
            //remove duplicate named entities flagged by dbPedia
            let arrayResources = this.props.annotation.Resources.filter((resource, index, self)=>{
                return index === self.findIndex((r) => {
                    return r['@surfaceForm'] === resource['@surfaceForm']
                })
            });

            //replace the first named entity for each with a JSON string of relevant data to be decoded and used in the Words component
            arrayResources.forEach(function(resource, index){
                let word = resource['@surfaceForm']
                let regex = new RegExp(`${word}`,"i");
                
                let uri = resource['@URI'];
                let replacementString = JSON.stringify({uri:uri,word:word});
                
                let dupString = newString.replace(regex,separator+replacementString+separator);
                newString = dupString;
            });

            //Split the string up into an array of either string phrases or JSON named entities
            let wordArray = newString.split(separator);

            //put each array chunk into the Words component where that components decides whether to return a named entity button or span of text
            let wordComponents = wordArray.map((word, index)=>{
                return <Words words={word} key={index} />
            });
            
            return (
                <div className="frame">
                    {wordComponents}
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



