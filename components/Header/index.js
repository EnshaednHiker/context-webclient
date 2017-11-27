import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'

import '~/assets/styles/main.css'

//import { Picture } from 'react-responsive-picture';

export class Header extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        const backgroundStyles = {
            zIndex: 1,
            width: "100%",
            height: "auto",
            padding: 0
        }

        const textStyles = {
            zIndex: 1000,
            position: "absolute",
            marginTop: "30vw",
            marginLeft: "60vw",
            color: "white",
            backgroundColor: "none"
        }

        return (
            <header className="header">
                <div className="transparent" style={textStyles} id="header-text">
                    <h1 id="header-text" className=""><strong>CONTEXT</strong> <br /><span className="white-text small">consult the <span className="thistle-background-color highlighted-text">world.</span></span></h1>
                </div>
                <img className="" alt="background image of books" style={backgroundStyles} src="assets/images/book_stacks_small.jpeg" srcSet="assets/images/book_stacks_small.jpeg 480w, assets/images/book_stacks_medium.jpeg 600w, assets/images/book_stacks_large.jpeg 900w"></img>
            </header>
            )
    }
}

const mapDispatchToProps = dispatch => {
   return ({

   })
};
export default connect(mapDispatchToProps)(Header);

/*
                <Picture style={backgroundStyles}
                    alt="background of books"
                    src="assets/images/book_stacks_large.jpeg 1080w, assets/images/book_stacks_medium.jpeg 640w, assets/images/book_stacks_small.jpeg 320w"
                    sizes="100vw"
                />
*/