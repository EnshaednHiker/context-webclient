import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'
import Typed from 'typed.js';
import '~/assets/styles/main.css'




export class Header extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
            strings: this.props.strings,
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: false
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting to prevent memory leaks
        this.typed.destroy();
    }

    render(){

        const backgroundStyles = {
            zIndex: 1,
            width: "100%",
            height: "auto",
            padding: 0
        }

        const textStyles = {
            position: "absolute",
            marginTop: "30vw",
            marginLeft: "60vw",
            color: "white",
            backgroundColor: "none",
            whiteSpace: "nowrap",
        }

        return (
            <header className="header">
                <div className="transparent header-text" style={textStyles} id="">
                    <h1 id="" className="header-text no-text-wrap"><strong>CONTEXT</strong> <br />
                        <div className="">
                            <span className="white-text small">consult </span>
                            <span className=" thistle-background-color highlighted-text" ref={(el) => { this.el = el; }}></span>
                            <span className="typed-cursor "></span>
                        </div>
                    </h1>
                </div>
                <img className="" alt="background image of books" style={backgroundStyles} src="assets/images/book_stacks_small.jpeg" srcSet="assets/images/book_stacks_small.jpeg 480w, assets/images/book_stacks_medium.jpeg 600w, assets/images/book_stacks_large.jpeg 900w"></img>
            </header>
            )
    }
}

const mapStateToProps = state => {
   return ({

   })
};
export default connect(mapStateToProps)(Header);
