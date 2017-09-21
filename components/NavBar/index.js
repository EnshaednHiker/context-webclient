import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'

import '~/assets/styles/main.css'

import Scroll from 'react-scroll';

const Element = Scroll.Element;
const Link = Scroll.Link;
const scroll = Scroll.animateScroll;

export class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            isTop: true,
            isCollapsed: true
        };
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.setState({ isTop: window.scrollY < 50 })
        });

        document.getElementById("hamburger-button").addEventListener('click', () => {
            let boolean = this.state.isCollapsed;
            this.setState({ isCollapsed: !boolean});
        });
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render(){

        console.log("isTop: ",this.state.isTop);
        console.log("isCollapsed: ",this.state.isCollapsed);

        return (
                 ()=> {
                    if (this.state.isTop===true && this.state.isCollapsed===true) {
                        return (
                            <nav className="navbar navbar-inverse navbar-fixed-top transparent">
                                <div className="container">
                                    <div className="navbar-header transparent">
                                        <button type="button" id="hamburger-button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
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
                    else if (this.state.isTop===true && this.state.isCollapsed===false) {
                        return (
                            <nav className="navbar navbar-inverse navbar-fixed-top cream">
                                <div className="container">
                                    <div className="navbar-header">
                                        <button type="button" id="hamburger-button" className="navbar-toggle collapsed grey" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
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

                    else if (this.state.isTop===false && this.state.isCollapsed===true) {
                        return (
                            <nav className="navbar navbar-inverse navbar-fixed-top cream">
                                <div className="container">
                                    <div className="navbar-header">
                                        <button type="button" id="hamburger-button" className="navbar-toggle collapsed grey" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
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
                                        <button type="button" id="hamburger-button" className="navbar-toggle collapsed grey" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
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

const mapDispatchToProps = dispatch => {
   return ({

   })
};
export default connect(mapDispatchToProps)(NavBar);
