import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'

export class Footer extends React.Component {
    constructor(props){
        super(props)

    }

    render(){


        return (
                <footer className="">
                    <p className="thistle-text-color text-center">Crafted by Nick Bingham 
                        <a className="button tan-background-color margin-10" href="https://github.com/EnshaednHiker/context-webclient" target="_blank"><span className="fa fa-github fa-lg"></span></a> 
                        <a className="button tan-background-color" href="https://www.linkedin.com/in/nicholas-bingham-a0696326/" target="_blank"><span className="fa fa-linkedin fa-lg"></span></a>
                    </p>
                </footer>
            )
    }
}
const mapDispatchToProps = dispatch => {
    return ({
 
    })
 };
 export default connect(mapDispatchToProps)(Footer);