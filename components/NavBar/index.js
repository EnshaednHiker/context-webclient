import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'

import '~/assets/styles/main.css'

import Scroll from 'react-scroll';

import { If, Then, Else } from 'react-if';

const Element = Scroll.Element;
const scroller = Scroll.scroller;
const scrollSpy  = Scroll.scrollSpy;
const Link = Scroll.Link;

export class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            isTop: true,
            isCollapsed: true
        };
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
            // if(this.state.isCollapsed===false) {
            //     document.getElementById("hamburger-button").click();
            // }
            this.setState({ isTop: window.scrollY < 50 })
        });

        // document.addEventListener('click', () => {
        //     if(){
        //         document.getElementById("hamburger-button").click();
        //     }
        // });



        document.getElementById("hamburger-button").addEventListener('click', () => {
            let boolean = this.state.isCollapsed;
            this.setState({ isCollapsed: !boolean});
        });
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
    
    onClick () {
        if (this.state.isCollapsed===false) {
            
        }
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
                                        <button type="button" id="hamburger-button" className="navbar-toggle collapsed transparent" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a className="navbar-brand white-text transition" href="#"><strong>CONTEXT</strong></a>
                                    </div>
                                    <div id="navbar" className="collapse navbar-collapse transparent">
                                        <ul className="nav navbar-nav white-text">
                                            <li className=""><Link className="white-text" to={this.props.name0} spy={true} smooth={true} duration={500}>About</Link></li>
                                            <li className=""><Link className="white-text" to={this.props.name1} spy={true} smooth={true} duration={500}>Features</Link></li>
                                            <li className=""><Link className="white-text" to={this.props.name2} spy={true} smooth={true} duration={500}>Sign Up</Link></li>
                                        </ul>
                                        <button type="button" className="btn btn-default navbar-nav navbar-btn btn-primary pull-right">Sign In/Demo Account</button>
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
                                        <a className="navbar-brand grey-text" href="#"><strong>CONTEXT</strong></a>
                                    </div>
                                    <div id="navbar" className="collapse navbar-collapse cream">
                                        <ul className="nav navbar-nav grey-text">
                                            <li className=""><a className="transition grey-text" href="#about">About</a></li>
                                            <li className=""><a className="transition grey-text" href="#feature1">Features</a></li>
                                            <li className=""><a className="transition grey-text" href="#sign-up">Sign Up</a></li>
                                            <button type="button" className="btn btn-default navbar-nav navbar-btn grey white-text margin-left-14">Sign In/Demo Account</button>
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
                                        <a className="navbar-brand grey-text" href="#"><strong>CONTEXT</strong></a>
                                    </div>
                                    <div id="navbar" className="collapse navbar-collapse cream">
                                        <ul className="nav navbar-nav grey-text">
                                            <li className=""><a className="transition grey-text" href="#about">About</a></li>
                                            <li className=""><a className="transition grey-text" href="#feature1">Features</a></li>
                                            <li className=""><a className="transition grey-text" href="#sign-up">Sign Up</a></li>
                                        </ul>
                                        <button type="button" className="btn btn-default navbar-nav navbar-btn grey white-text pull-right">Sign In/Demo Account</button>
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
                                        <a className="navbar-brand grey-text" href="#"><strong>CONTEXT</strong></a>
                                    </div>
                                    <div id="navbar" className="collapse navbar-collapse cream">
                                        <ul className="nav navbar-nav grey-text">
                                            <li className=""><a className="transition grey-text" href="#about">About</a></li>
                                            <li className=""><a className="transition grey-text" href="#feature1">Features</a></li>
                                            <li className=""><a className="transition grey-text" href="#sign-up">Sign Up</a></li>
                                            <button type="button" className="btn btn-default navbar-nav navbar-btn grey white-text margin-left-14">Sign In/Demo Account</button>
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


/*
            <span>
                <If condition={this.state.isTop===true && this.state.isCollapsed===true}>
                    <Then>
                        <nav className="navbar navbar-inverse navbar-fixed-top transparent">
                            <div className="container">
                                <div className="navbar-header transparent">
                                    <button type="button" id="hamburger-button" className="navbar-toggle collapsed transparent" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand white-text" href="#"><strong>CONTEXT</strong></a>
                                </div>
                                <div id="navbar" className="collapse navbar-collapse transparent">
                                    <ul className="nav navbar-nav white-text">
                                        <li><a className="white-text" href="#about">About</a></li>
                                        <li><a className="white-text" href="#features">Features</a></li>
                                        <li><a className="white-text" href="#sign-up">Sign Up</a></li>
                                    </ul>
                                    <button type="button" className="btn btn-default navbar-nav navbar-btn btn-primary pull-right">Sign In/Demo Account</button>
                                </div>
                            </div>
                        </nav>
                    </Then>
                    <Else>
                        <nav className="navbar navbar-inverse navbar-fixed-top">
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="#"><strong>CONTEXT</strong></a>
                                </div>
                                <div id="navbar" className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav">
                                        <li><a className="" href="#about">About</a></li>
                                        <li><a className="" href="#features">Features</a></li>
                                        <li><a className="" href="#sign-up">Sign Up</a></li>
                                    </ul>
                                    <button type="button" className="btn btn-default navbar-nav navbar-btn btn-primary pull-right">Sign In/Demo Account</button>
                                </div>
                            </div>
                        </nav>
                    </Else>
                </If>
                <If condition={this.state.isTop===true && this.state.isCollapsed===false}>
                    <Then>
                        <nav className="navbar navbar-inverse navbar-fixed-top transparent">
                            <div className="container">
                                <div className="navbar-header transparent">
                                    <button type="button" id="hamburger-button" className="navbar-toggle collapsed transparent" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand white-text" href="#"><strong>CONTEXT</strong></a>
                                </div>
                                <div id="navbar" className="collapse navbar-collapse transparent">
                                    <ul className="nav navbar-nav white-text">
                                        <li><a className="white-text" href="#about">About</a></li>
                                        <li><a className="white-text" href="#features">Features</a></li>
                                        <li><a className="white-text" href="#sign-up">Sign Up</a></li>
                                    </ul>
                                    <button type="button" className="btn btn-default navbar-nav navbar-btn btn-primary pull-right">Sign In/Demo Account</button>
                                </div>
                            </div>
                        </nav>
                    </Then>
                    <Else>
                        <nav className="navbar navbar-inverse navbar-fixed-top">
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="#"><strong>CONTEXT</strong></a>
                                </div>
                                <div id="navbar" className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav">
                                        <li><a className="" href="#about">About</a></li>
                                        <li><a className="" href="#features">Features</a></li>
                                        <li><a className="" href="#sign-up">Sign Up</a></li>
                                    </ul>
                                    <button type="button" className="btn btn-default navbar-nav navbar-btn btn-primary pull-right">Sign In/Demo Account</button>
                                </div>
                            </div>
                        </nav>
                    </Else>
                </If>
            </span>
*/