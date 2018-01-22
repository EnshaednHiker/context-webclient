import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {hideModal,showTips} from '~/actions';
import Words from '~/components/Words';
import Modal from 'react-modal';
import Typed from 'typed.js';

export class Frame extends React.Component {
    constructor(props){
        super(props)
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    componentDidMount() {
        if (this.props.showTips===true){
            let strings = [
                "Time for some tips and tricks.",
                "Paste in text to annotate here, you won't hurt my feelings.",
                "More text is better than less text. Paragraphs and articles, not tweets or titles.",
                "Once you paste in text, click the 'Annotate' button. Click the 'Clear' button afterwards to get rid of your annotation.",
                "Clicking 'Recent Annotations' will bring up a list of what you've previously annotated. You have a max of 10 recent annotations.",
                "Upon annotating your 11th annotation, the oldest annotation disappears from the list.",
                "paste in text to annotate here",
            ]
            const options = {
                strings: strings,
                typeSpeed: 15,
                backSpeed: 0,
                attr: 'placeholder',
                bindInputFocusEvents: true,
                showCursor: false,
                onStart: this.props.dispatch(showTips(false))
            };
            this.typed2 = new Typed("#user-input-id", options);
        }
        else{
            console.log("no tips running");
        }
    }
  
    componentWillUnmount() {
        if (this.props.showTips===true){
            // Make sure to destroy Typed instance on unmounting to prevent memory leaks
            this.typed2.destroy();
        }
        else {
            console.log("don't need this unmounting logic");
        }
    }

    handleCloseModal () {
        this.props.dispatch(hideModal());
    }

    render(){

        if(this.props.annotation === null && this.props.dbPediaError === null && this.props.showTips ===true) {
                return (
                    <div className="frame type-wrap">
                        <textarea 
                            name="userInput"
                            id="user-input-id"
                            form={this.props.formId}  
                            required
                        > 
                        </textarea> 
                    </div>
                )
        }
        else if (this.props.annotation === null && this.props.dbPediaError === null && this.props.showTips ===false){
            return (
                <div className="frame type-wrap">
                    <textarea 
                        name="userInput"
                        id="user-input-id"
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
                    Whoops something went wrong or that passage of text returned no annotations. What you entered has not been added to your Recent Annotations list. 
                    <br></br>Click the Clear button and try again.
                    <br></br>The following section was too weird, too short, too boring: {this.props.annoString}
                    <br></br>We encountered the following error: {this.props.dbPediaError || "no error found." }
                </p>
            )
        }
        else if (this.props.showConvertedText){
            
            //put each array chunk into the Words component where that components decides whether to return a named entity button or span of text
            let wordComponents = this.props.annotatedText.map((word, index)=>{
                return <Words words={word} key={index} noButton={false} />
            });
            
            let modalStyle = {
                overlay:{
                    zIndex:"100"
                }
            }
            let urlRegex;
            
            let externalLinks = this.props.externalLinks.map((link, index)=>{
                urlRegex = new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)
                
                if (urlRegex.test(link)){
                    return <li key={index}><a className="text-wrap" target="_blank" href={link}>{link}</a></li>
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
                        ariaHideApp={false}
                        style={modalStyle}
                        closeTimeOutMS={10}
                        onRequestClose={this.handleCloseModal}
                        isOpen={this.props.showModal}
                        contentLabel={this.props.articleWord}
                    >
                        <button className="modalCloseButton" onClick={this.handleCloseModal}><i className="fa fa-times-circle fa-2x" aria-hidden="true"></i></button>
                        <div className="info-modal-div">
                            <h2>{this.props.articleWord}</h2>
                            <h3>Abstract:</h3>
                            <p>{this.props.abstract}</p>
                            <h3>External Links:</h3>
                            <ul>
                                {externalLinks}
                            </ul>
                        </div>
                    </Modal>
                </div>

            )
            
        }
        else {
        
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
        showConvertedText: state.dashboardUi.showConvertedText,
        showTips:state.dashboardUi.showTips
    })
 };
 export default connect(mapStateToProps)(Frame);

