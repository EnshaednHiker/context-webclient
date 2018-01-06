import React from 'react';
import Dom from 'react-dom';

import { connect } from 'react-redux';
const ClickOutHandler = require('react-onclickout');
import {scrollAtTop, hamburgerClick, collapseMenu, logout } from '~/actions'

import '~/assets/styles/main.css'

import Scroll from 'react-scroll';
import MediaQuery from 'react-responsive';


const Element = Scroll.Element;
const Link = Scroll.Link;
const scroll = Scroll.animateScroll;

export class NavBar extends React.Component {
    constructor(props){
        super(props)
        
        this.scrollToTop = this.scrollToTop.bind(this);
        this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleGoToOtherPage = this.handleGoToOtherPage.bind(this);
        //this.handleScroll = this.handleScroll.bind(this);
    }


    componentDidMount() {
        document.addEventListener('scroll', () => {
            let boolean = window.scrollY < 1;
            this.props.dispatch(scrollAtTop(boolean));
        });
    }

    onClickOut() {

       // console.log("this.props._owner._instance: ",this.props.children._owner._instance.props);
       // this.props.children._owner._instance.props.dispatch(collapseMenu('click'));
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

    handleLogoutClick () {
        this.props.dispatch(logout());
    }
    handleGoToOtherPage() {
        if(window.location.hash !== "#/dashboard" ){
            window.location.hash="#/dashboard";
        }
        else {
            window.location.hash="#/";
        }
            
    }

    render(){
        const props = this.props;
        let session = "";

        console.log("window.location.hash", window.location.hash)

        if (this.props.isLoginForm && !this.props.userAuth)
            session = "Sign in"
        else if (!this.props.isLoginForm && !this.props.userAuth) {
            session = "Sign up"
        } 
        else {
            session = `Logged in as ${this.props.user.username}`
        }

        let location = "";
        if (window.location.hash === "#/dashboard"){
            location = "Main"
        }
        else {
            location = "Dashboard"
        }

        return (
                 ()=> {
                    if (this.props.isTop===true && this.props.isCollapsed===true) {
                        return (
                            <nav className="transparent">
                                <div className="brand margin-top-14">
                                    <a onClick={this.scrollToTop} className="m-2 white-text navbar-brand link"><strong>CONTEXT</strong></a>
                                </div>
                                    <ul className="white-text links">
                                        <li><Link className="thistle-text-color link m-2" to={this.props.link1} spy={true} smooth={true} duration={750}>About</Link></li>
                                        <li><Link className="thistle-text-color link m-2" to={this.props.link2} spy={true} smooth={true} duration={750}>Features</Link></li>
                                        <li><Link className="thistle-text-color link m-2" to={this.props.link3} spy={true} smooth={true} duration={750}>{session}</Link></li>
                                        <li className="thistle-text-color link m-2" hidden={!this.props.userAuth} onClick={this.handleGoToOtherPage}>{location}</li>
                                    </ul>
                                    <button type="button" hidden={this.props.userAuth} className="link button button-primary m-2">Sign In/Demo Account</button>
                                    <button type="button" hidden={!this.props.userAuth} className="link button button-primary m-2" onClick={this.handleLogoutClick}>Logout</button>
                                    <button type="button" className="button hamburger-link m-2">
                                        <i className="fa fa-bars white-text" aria-hidden="true"></i>
                                    </button>
                            </nav>
                        )
                    }

                    else {
                        return (
                            <nav className="thistle-background-color">
                                <div className="brand margin-top-14">
                                    <a onClick={this.scrollToTop} className="m-2 gray-text-color navbar-brand link"><strong>CONTEXT</strong></a>
                                </div>
                                <ul className="links dark-slate-gray-text-color">
                                    <li><Link className="dark-slate-gray-text-color link m-2" to={this.props.link1} spy={true} smooth={true} duration={750}>About</Link></li>
                                    <li><Link className="dark-slate-gray-text-color link m-2" to={this.props.link2} spy={true} smooth={true} duration={750}>Features</Link></li>
                                    <li><Link className="dark-slate-gray-text-color link m-2" to={this.props.link3} spy={true} smooth={true} duration={750}>{session}</Link></li>
                                    <li className="dark-slate-gray-text-color link m-2" hidden={!this.props.userAuth} onClick={this.handleGoToOtherPage}>{location}</li>
                                </ul>
                                
                                <button type="button"  hidden={this.props.userAuth} className="link button thistle-text-color light-sea-green-background-color m-2">Sign In/Demo Account</button>
                                <button type="button" onClick={this.handleLogoutClick} hidden={!this.props.userAuth} className="link button thistle-text-color light-sea-green-background-color m-2">Logout</button>
                            </nav>
                        )
                    }
                }
            )()
        }
}

const mapStateToProps = (state) => {
    
    return ({
         isTop: state.mainUi.isTop,
         isCollapsed: state.mainUi.isCollapsed,
         isLoginForm: state.mainUi.isLoginForm,
         user: state.user.user,
         userAuth: state.user.userAuth,
         location: state.user.location
    })
};

export default connect(mapStateToProps)(NavBar);
