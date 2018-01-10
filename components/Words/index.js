import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import { getArticleJson,setArticleUrl,showModal,setArticleWord } from '~/actions'
import splitAt from 'split-at';
import Modal from 'react-modal';
import '~/assets/styles/dashboard.css'


export class Words extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this); 
    }
      


    handleClick(event){
        //we have to get the last part of the url so that we can make JSON api call with is
        //i.e. we get "http://dbpedia.org/resource/SpaceX" back from dbPedia initially, but we can't get json with that
        //we neeed the exact phrase from after the last forward slash, i.e. "SpaceX" in order to contract the GET with the right URI.
        //the GET URI is case specific and is sensitive between uses of space and underscores
        //For example, all of the following would return a different result:
        // 1. http://live.dbpedia.org/data/SpaceX.json
        // 2. http://live.dbpedia.org/data/Spacex.json
        // 3. http://live.dbpedia.org/data/Space%20X.json
        // 4. http://live.dbpedia.org/data/Space_X.json
        let lastIndex = event.target.dataset.url.lastIndexOf('/');
        let array = [lastIndex];
        
        let urlArray = splitAt(event.target.dataset.url,array); 
        
        //then dispatch actions to show the text to set 
        this.props.dispatch(getArticleJson(urlArray[1]+".json"));
        this.props.dispatch(setArticleUrl(event.target.dataset.url));
        this.props.dispatch(showModal());
        this.props.dispatch(setArticleWord(event.target.dataset.word))
    }


    render(){
    
        if(this.props.words.startsWith('{"uri":') && this.props.words.endsWith('}')){
            console.log("this.props.words", this.props.words);
            let wordObject;
            try {
                wordObject = JSON.parse(this.props.words);
            } catch (error) {
                console.error(error)
            }
            return (
                <button type="button" onClick={this.handleClick} className="button-link" data-word={wordObject.word} data-url={wordObject.uri} >{wordObject.word}</button>
            )
        }
        else {
            return (
                <span>{this.props.words}</span>
            )
        }

    }
}

const mapStateToProps = state => {
   return ({
        
   })
};
export default connect(mapStateToProps)(Words);