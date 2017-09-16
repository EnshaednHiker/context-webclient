import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'

import '~/assets/styles/main.css'


import { If, Then, Else } from 'react-if';

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
            this.setState({ isTop: window.scrollY < 50 })
        });

        document.getElementById("hamburger-button").addEventListener('click', () => {
            let boolean = this.state.isCollapsed;
            this.setState({ isCollapsed: !boolean});
        });
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
                                            <li><a className="grey-text" href="#about">About</a></li>
                                            <li><a className="grey-text" href="#features">Features</a></li>
                                            <li><a className="grey-text" href="#sign-up">Sign Up</a></li>
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
                                            <li><a className="grey-text" href="#about">About</a></li>
                                            <li><a className="grey-text" href="#features">Features</a></li>
                                            <li><a className="grey-text" href="#sign-up">Sign Up</a></li>
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
                                            <li><a className="grey-text" href="#about">About</a></li>
                                            <li><a className="grey-text" href="#features">Features</a></li>
                                            <li><a className="grey-text" href="#sign-up">Sign Up</a></li>
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