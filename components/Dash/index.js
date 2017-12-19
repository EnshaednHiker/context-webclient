import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import { setAnnotationString, annotate, clearAnnotation } from '~/actions'

export class Dash extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, annotation){
        if(annotation === null){
            e.preventDefault();
            //console.log("event.target.search-box.value: ",e.target.userInput.value)
            let annoString = "" + `${e.target.userInput.value}`;
            this.props.dispatch(setAnnotationString(annoString));
            this.props.dispatch(annotate(annoString));
        }
        else {
            e.preventDefault()
            this.props.dispatch(clearAnnotation());
        }
    }



    render(){
        if(this.props.annotation===null){
            return (
                <nav className="dash light-sea-green-background-color">
                    <p>CONTEXT</p>
                    <form id={this.props.formId} onSubmit={(e) => this.handleSubmit(e,this.props.annotation)}>
                        <button type="submit" name="search-button">Annotate</button>
                    </form>
                </nav>
            )  
        }
        return (
                <nav className="dash light-sea-green-background-color">
                    <p>CONTEXT</p>
                    <form id={this.props.formId} onSubmit={(e) => this.handleSubmit(e,this.props.annotation)}>
                        <button type="submit" name="search-button">Clear</button>
                    </form>
                </nav>
            )
    }
}
const mapStateToProps = state => {
    return ({
        annotation:state.annotations.annotation
    })
 };
 export default connect(mapStateToProps)(Dash);

 //onChange={this.getSearch} value={this.props.currentSearch}