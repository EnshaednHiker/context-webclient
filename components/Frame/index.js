import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {markUpText} from '~/actions';
import Words from '~/components/Words';
import splitAt from 'split-at';



export class Frame extends React.Component {
    constructor(props){
        super(props)
        
    }


    render(){

        if(this.props.annotation === null && this.props.dbPediaError === null) {
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
        else if (this.props.annotation.Resources === undefined || this.props.dbPediaError !== null){
            return (
                <p className="frame">
                    Whoops something went wrong or that passage of text returned no annotations. 
                    <br></br>Clear this and try again.
                    <br></br>Error: {this.props.dbPediaError || this.props.annoString}
                </p>
            )
        }
        else {
            let separator = "45098quarksdfglijhg34bitcoin5987xvckjhg3madness562867"            
            let newString = this.props.annotation['@text'];
            console.log("this.props.annotation:", this.props.annotation);
            //remove duplicate named entities flagged by dbPedia
            let arrayResources;
            if(this.props.annotation !== undefined){
                arrayResources = this.props.annotation.Resources.filter((resource, index, self)=>{
                    return index === self.findIndex((r) => {
                        return r['@surfaceForm'] === resource['@surfaceForm']
                    })
                });
            }
            
            //build indices for splitAt function
            let indicesSplitsEndArray = arrayResources.map((resource)=>{
                return resource['@surfaceForm'].length+parseInt(resource['@offset']) - 1
            });
            let indicesSplitsStartArray = arrayResources.map((resource)=>{
                return parseInt(resource['@offset']) - 1
            });
            let indicesArray = indicesSplitsStartArray.concat(indicesSplitsEndArray);
            indicesArray.sort((a, b) => {
                return a - b;
              });
            console.log("indicesArray: ", indicesArray);
            //cut up string with the multiple splits
            let splitArray = splitAt(newString,indicesArray);
            console.log("splitArray: ", splitArray);
            //use a .map to return an array where elements that exactly match to '@surfaceForm' get changed into the proper object
            console.log("arrayResources: ", arrayResources);
            let surfaceForm = '@surfaceForm';
            let uri = '@URI';
        
            let convertedSplitArray = splitArray.map((splitString)=>{
                let matchedResource = arrayResources.find((element)=>{
                    return element[surfaceForm]===splitString 
                })
                if (matchedResource){
                    return JSON.stringify({uri:matchedResource[uri],word:matchedResource[surfaceForm]})
                }
                else {
                    return splitString
                }
            });
            console.log("convertedSplitArray: ",convertedSplitArray);
            //put each array chunk into the Words component where that components decides whether to return a named entity button or span of text
            let wordComponents = convertedSplitArray.map((word, index)=>{
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
        annoString: state.annotations.annoString,
        dbPediaError: state.annotations.dbPediaError
    })
 };
 export default connect(mapStateToProps)(Frame);


//  let separator = "45098quarksdfglijhg34bitcoin5987xvckjhg3madness562867"            
//  let newString = this.props.annotation['@text'];
//  console.log("this.props.annotation:", this.props.annotation);
//  //remove duplicate named entities flagged by dbPedia
//  let arrayResources;
//  if(this.props.annotation !== undefined){
//      arrayResources = this.props.annotation.Resources.filter((resource, index, self)=>{
//          return index === self.findIndex((r) => {
//              return r['@surfaceForm'] === resource['@surfaceForm']
//          })
//      });
//  }
//  console.log("arrayResources: ", arrayResources);


//  //replace the first named entity for each with a JSON string of relevant data to be decoded and used in the Words component
//  arrayResources.forEach(function(resource, index){
//      let word = resource['@surfaceForm']
//      let regex = new RegExp(`(?<!_|\/|")${word}(?!_|\/|\")`,"i");
     
//      let uri = resource['@URI'];
//      let replacementString = JSON.stringify({uri:uri,word:word});
//      console.log("replacementString: ", replacementString);
//      let dupString = newString.replace(regex,separator+replacementString+separator);
//      console.log('dupString: ', dupString)
//      newString = dupString;
//  });
//  console.log("newString: ",newString)
//  //Split the string up into an array of either string phrases or JSON named entities
//  let wordArray = newString.split(separator);
//  console.log("wordArray",wordArray);
//  //put each array chunk into the Words component where that components decides whether to return a named entity button or span of text
//  let wordComponents = wordArray.map((word, index)=>{
//      return <Words words={word} key={index} />
//  });
