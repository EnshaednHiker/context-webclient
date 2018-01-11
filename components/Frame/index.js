import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {markUpText,hideModal} from '~/actions';
import Words from '~/components/Words';
import splitAt from 'split-at';
import Modal from 'react-modal';


export class Frame extends React.Component {
    constructor(props){
        super(props)
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleCloseModal () {
        this.props.dispatch(hideModal());
    }

    render(){

        if(this.props.annotation === null && this.props.dbPediaError === null) {
            return (
                <div className="frame">
                    <textarea 
                        name="userInput"
                        form={this.props.formId}  
                        required
                        placeholder="paste in text to annotate here"
                    > 
                    </textarea> 
                </div>
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
            
            //cut up string with the multiple splits
            let splitArray = splitAt(newString,indicesArray);
            
            //use a .map to return an array where elements that exactly match to '@surfaceForm' get changed into the proper object
            
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
            
            //put each array chunk into the Words component where that components decides whether to return a named entity button or span of text
            let wordComponents = convertedSplitArray.map((word, index)=>{
                return <Words words={word} key={index} />
            });
            
            //let abstract = this.getAbstract(this.props.articleJson, this.props.articleUrl)
            //let links = this.getLinks(this.props.articleJson, this.props.articleUrl)
            let modalStyle = {
                overlay:{
                    zIndex:"100"
                }
            }
            let externalLinks = this.props.externalLinks.map((link, index)=>{
                

                let urlRegex = new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)
                console.log(`${link}: `, urlRegex.test(link));
                if (urlRegex.test(link)){
                    return <li key={index}><a target="_blank" href={link}>{link}</a></li>
                }
                else {
                    return <li key={index}>{link}</li>
                }
                    
            });

            return (
                <div className="frame">
                    {wordComponents}
                    <Modal
                        base="frame"
                        
                        style={modalStyle}
                        isOpen={this.props.showModal}
                        contentLabel={this.props.articleWord}
                    >
                        <button className="modalCloseButton" onClick={this.handleCloseModal}><i className="fa fa-times-circle fa-2x" aria-hidden="true"></i></button>
                        <h2>{this.props.articleWord}</h2>
                        <h3>Abstract:</h3>
                        <p>{this.props.abstract}</p>
                        <h3>External Links</h3>
                        <ul>
                            {externalLinks}
                        </ul>
                    </Modal>
                </div>

            )
        }

    }
}
const mapStateToProps = state => {
    return ({
        annotation: state.annotations.annotation,
        annoString: state.annotations.annoString,
        dbPediaError: state.annotations.dbPediaError,
        showModal: state.dashboardUi.showModal,
        articleUrl: state.annotations.articleUrl,
        articleJson: state.annotations.articleJson,
        isArticleJsonLoading: state.annotations.isArticleJsonLoading,
        articleJsonError: state.annotations.articleJsonError,
        articleWord: state.annotations.articleWord,
        abstract: state.annotations.abstract,
        externalLinks: state.annotations.externalLinks
    })
 };
 export default connect(mapStateToProps)(Frame);

