
//must include this:

//include .footer class for grid

//<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

//this is where I got the wikipedia icon:

//https://www.flaticon.com/free-icon/wikipedia-logo_1262#term=encyclopedia&page=1&position=17


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