import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {markUpText, hideModal} from '~/actions';
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
        console.log("this.props.annotatedText",this.props.annotatedText);
        console.log("this.props.dbPediaError",this.props.dbPediaError);
        console.log("this.props.annotation",this.props.annotation);
        console.log("this.props.showConvertedText",this.props.showConvertedText)

        if(this.props.annotatedText === null && this.props.dbPediaError === null) {
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
        else if (this.props.showConvertedText){
            
            //put each array chunk into the Words component where that components decides whether to return a named entity button or span of text
            let wordComponents = this.props.annotatedText.map((word, index)=>{
                return <Words words={word} key={index} noButton={false} />
            });
            
            //let abstract = this.getAbstract(this.props.articleJson, this.props.articleUrl)
            //let links = this.getLinks(this.props.articleJson, this.props.articleUrl)
            let modalStyle = {
                overlay:{
                    zIndex:"100"
                }
            }
            let urlRegex;
            
            let externalLinks = this.props.externalLinks.map((link, index)=>{
                urlRegex = new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)
                console.log(`${link}: `, urlRegex.test(link));
                if (urlRegex.test(link)){
                    return <li key={index}><a target="_blank" href={link}>{link}</a></li>
                }
                else {
                    return <li key={index}>{link}</li>
                }
                    
            });

            return (
                <div className="frame" id="frame-id">
                    {wordComponents}
                    <Modal
                        base="frame"
                        appElement={document.getElementById('frame-id')}
                        style={modalStyle}
                        closeTimeOutMS={10}
                        onRequestClose={this.handleCloseModal}
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
        else {
            console.log("this.props.showConvertedText",this.props.showConvertedText);
            return (
                <div className="frame">
                    <h2>Whoops! Some kind of error.</h2>
                    <p>Try reloading the page.</p>
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
        externalLinks: state.annotations.externalLinks,
        annotatedText: state.annotations.annotatedText,
        showConvertedText: state.dashboardUi.showConvertedText
    })
 };
 export default connect(mapStateToProps)(Frame);

