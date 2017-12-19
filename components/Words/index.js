import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'


import '~/assets/styles/dashboard.css'


export class Words extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        console.log("event.target.dataset.url: ", event.target.dataset.url)
        //then dispatch action to show the text
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
                <button type="button" onClick={this.handleClick} className="button-link" data-url={wordObject.uri} >{wordObject.word}</button>
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