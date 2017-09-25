import React from 'react';
import Dom from 'react-dom';

import { connect } from 'react-redux';
import {scrollAtTop, hamburgerClick } from '~/actions'

import '~/assets/styles/main.css'

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const Link = Scroll.Link;
const scroll = Scroll.animateScroll;

export class NavBar extends React.Component {
    constructor(props){
        super(props)
        
        this.scrollToTop = this.scrollToTop.bind(this);
        this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
        //this.handleScroll = this.handleScroll.bind(this);
    }


    componentDidMount() {
        document.addEventListener('scroll', () => {
            let boolean = window.scrollY < 1;
            this.props.dispatch(scrollAtTop(boolean));
        });
    }

    // handleScroll () {
    //     //onScroll={this.handleScroll}
    //     let boolean = window.scrollY < 1;
    //     this.props.dispatch(scrollAtTop(boolean));       
    // }

    handleHamburgerClick () {
        let boolean = this.props.isCollapsed;
        this.props.dispatch(hamburgerClick(!boolean));
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render(){
        
        console.log("isTop: ",this.props.isTop);
        console.log("isCollapsed: ",this.props.isCollapsed);

        
        return (
                 ()=> {
                    if (this.props.isTop===true && this.props.isCollapsed===true) {
                        return (
                            <nav className="navbar navbar-inverse navbar-fixed-top transparent">
                                <div className="container">
                                    <div className="navbar-header transparent">
                                        <button onClick={this.handleHamburgerClick} type="button" id="hamburger-button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a onClick={this.scrollToTop} className="white-text navbar-brand link"><strong>CONTEXT</strong></a>
                                    </div>
                                    <div id="navbar" className="collapse navbar-collapse">
                                        <ul className="nav navbar-nav white-text">
                                            <li><Link className="white-text link" to={this.props.name0} spy={true} smooth={true} duration={500}>About</Link></li>
                                            <li><Link className="white-text link" to={this.props.name1} spy={true} smooth={true} duration={500}>Features</Link></li>
                                            <li><Link className="white-text link" to={this.props.name2} spy={true} smooth={true} duration={500}>Sign Up</Link></li>
                                        </ul>
                                        <button type="button" className="link btn btn-default navbar-nav navbar-btn btn-primary pull-right">Sign In/Demo Account</button>
                                    </div>
                                </div>
                            </nav>
                        )
                    }
                    else if (this.props.isTop===true && this.props.isCollapsed===false) {
                        return (
                            <nav className="navbar navbar-inverse navbar-fixed-top cream">
                                <div className="container">
                                    <div className="navbar-header">
                                        <button onClick={this.handleHamburgerClick} type="button" id="hamburger-button" className="navbar-toggle collapsed grey" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a onClick={this.scrollToTop} className="grey-text navbar-brand link"><strong>CONTEXT</strong></a>
                                    </div>
                                    <div id="navbar" className="collapse navbar-collapse cream">
                                        <ul className="nav navbar-nav grey-text">
                                            <li><Link className="grey-text link" to={this.props.name0} spy={true} smooth={true} duration={500}>About</Link></li>
                                            <li><Link className="grey-text link" to={this.props.name1} spy={true} smooth={true} duration={500}>Features</Link></li>
                                            <li><Link className="grey-text link" to={this.props.name2} spy={true} smooth={true} duration={500}>Sign Up</Link></li>
                                            <button type="button" className="link btn btn-default navbar-nav navbar-btn grey white-text margin-left-14">Sign In/Demo Account</button>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </nav>
                        )
                    }

                    else if (this.props.isTop===false && this.props.isCollapsed===true) {
                        return (
                            <nav className="navbar navbar-inverse navbar-fixed-top cream">
                                <div className="container">
                                    <div className="navbar-header">
                                        <button onClick={this.handleHamburgerClick} type="button" id="hamburger-button" className="navbar-toggle collapsed grey" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a onClick={this.scrollToTop} className="grey-text navbar-brand link"><strong>CONTEXT</strong></a>
                                    </div>
                                    <div id="navbar" className="collapse navbar-collapse cream">
                                        <ul className="nav navbar-nav grey-text">
                                            <li><Link className="grey-text link" to={this.props.name0} spy={true} smooth={true} duration={500}>About</Link></li>
                                            <li><Link className="grey-text link" to={this.props.name1} spy={true} smooth={true} duration={500}>Features</Link></li>
                                            <li><Link className="grey-text link" to={this.props.name2} spy={true} smooth={true} duration={500}>Sign Up</Link></li>
                                        </ul>
                                        <button type="button" className="link btn btn-default navbar-nav navbar-btn grey white-text pull-right">Sign In/Demo Account</button>
                                    </div>
                                </div>
                            </nav>
                        )
                    }

                    else {
                        return (
                            <nav className="navbar navbar-inverse navbar-fixed-top cream">
                                <div className="container">
                                    <div className="navbar-header">
                                        <button onClick={this.handleHamburgerClick} type="button" id="hamburger-button" className="navbar-toggle collapsed grey" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a onClick={this.scrollToTop} className="grey-text navbar-brand link" ><strong>CONTEXT</strong></a>
                                    </div>
                                    <div id="navbar" className="collapse navbar-collapse cream">
                                        <ul className="nav navbar-nav grey-text">
                                            <li><Link className="grey-text link" to={this.props.name0} spy={true} smooth={true} duration={500}>About</Link></li>
                                            <li><Link className="grey-text link" to={this.props.name1} spy={true} smooth={true} duration={500}>Features</Link></li>
                                            <li><Link className="grey-text link" to={this.props.name2} spy={true} smooth={true} duration={500}>Sign Up</Link></li>
                                            <button type="button" className="link btn btn-default navbar-nav navbar-btn grey white-text margin-left-14">Sign In/Demo Account</button>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        )
                    }
                }
            )()
        }
}

const mapStateToProps = (state) => {
    return ({
         isTop: state.isTop,
         isCollapsed: state.isCollapsed
    })
};

export default connect(mapStateToProps)(NavBar);
