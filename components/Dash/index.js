import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import { setAnnotationString, annotate } from '~/actions'

export class Dash extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        //console.log("event.target.search-box.value: ",e.target.userInput.value)
        let annoString = "" + `${e.target.userInput.value}`;
        this.props.dispatch(setAnnotationString(annoString));
        this.props.dispatch(annotate(annoString));
    }



    render(){
        
        return (
                <nav className="dash light-sea-green-background-color">
                    <p>CONTEXT</p>
                    <form id={this.props.formId} onSubmit={(e) => this.handleSubmit(e)}>
                        <button type="submit" name="search-button">Annotate</button>
                    </form>
                    
                </nav>
            )
    }
}
const mapStateToProps = state => {
    return ({
        
    })
 };
 export default connect(mapStateToProps)(Dash);

 //onChange={this.getSearch} value={this.props.currentSearch}