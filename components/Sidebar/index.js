import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'

export class Sidebar extends React.Component {
    constructor(props){
        super(props)

    }

    render(){


        return (
                <aside className="sidebar thistle-background-color">
                    <p>Sidebar content</p>
                </aside>
            )
    }
}
const mapDispatchToProps = dispatch => {
    return ({
 
    })
 };
 export default connect(mapDispatchToProps)(Sidebar);