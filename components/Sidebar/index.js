import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'



export class Sidebar extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        console.log("this.props.annotation", this.props.annotation);
        console.log("this.props.isAnnoLoading", this.props.isAnnoLoading);
        console.log("this.props.dbPediaError",this.props.dbPediaError);
        console.log("process.env.DBPEDIA_API: ",process.env.DBPEDIA_API);

        return (
                <aside className="sidebar thistle-background-color">
                    <p>Sidebar content</p>
                </aside>
            )
    }
}
const mapStateToProps = state => {
    return ({
        annotation: state.annotations.annotation,
        isAnnoLoading: state.annotations.isAnnoLoading,
        dbPediaError: state.annotations.dbPediaError
    })
 };
 export default connect(mapStateToProps)(Sidebar);