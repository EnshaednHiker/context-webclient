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
            
            let arrayResources = this.props.annotation.Resources.filter((resource, index, self)=>{
                return index === self.findIndex((r) => {
                    return r['@surfaceForm'] === resource['@surfaceForm']
                })
            });

            arrayResources.forEach(function(resource, index){
                let word = resource['@surfaceForm']
                let regex = new RegExp(`${word}`,"i");
                
                let uri = resource['@URI'];
                let replacement = {uri:uri,word:word}
                let replacementString = JSON.stringify({uri:uri,word:word});
                
                let dupString = newString.replace(regex,separator+replacementString+separator);
                newString = dupString;
            });
            let wordArray = newString.split(separator);
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



