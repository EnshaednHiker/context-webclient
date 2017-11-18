import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'

import '~/assets/styles/main.css'

import { Picture } from 'react-responsive-picture';

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
            marginTop: "20%",
            color: "white",
            backgroundColor: "none"
        }

        return (
            
            <header>
                <div className="row no-padding">
                    <div className="col col-md-offset-4 col-md-8 col-sm-offset-4 col-sm-8 col-xs-offset-4 col-xs-8 text-center " style={textStyles}> 
                        <div className="jumbotron transparent">
                            <h1 id="header-text"><strong>CONTEXT</strong> <br /><small className="white-text">consult the <mark>world.</mark></small></h1>
                        </div>
                    </div>
                </div>
                <div className="row no-padding">
                    <div className="col">
                        <img className="img-responsive" alt="background image of books" style={backgroundStyles} src="assets/images/book_stacks_small.jpeg" srcSet="assets/images/book_stacks_small.jpeg 480w, assets/images/book_stacks_medium.jpeg 600w, assets/images/book_stacks_large.jpeg 900w"></img>
                    </div>
                </div>
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