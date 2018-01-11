import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {hideConvertedText, scrollAtTop, logout, setAnnotationString, annotate, clearAnnotation} from '~/actions'

import '~/assets/styles/main.css'

import Scroll from 'react-scroll';


const Element = Scroll.Element;
const Link = Scroll.Link;
const scroll = Scroll.animateScroll;

export class NavBar extends React.Component {
    constructor(props){
        super(props)
        
        this.scrollToTop = this.scrollToTop.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleGoToOtherPage = this.handleGoToOtherPage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            let boolean = window.scrollY < 1;
            this.props.dispatch(scrollAtTop(boolean));
        });
    }
    handleSubmit(e, annotation){
        if(annotation === null){
            e.preventDefault();
            //console.log("event.target.search-box.value: ",e.target.userInput.value)
            let annoString = "" + `${e.target.userInput.value}`;
            this.props.dispatch(setAnnotationString(annoString));
            this.props.dispatch(annotate(annoString));
        }
        else {
            e.preventDefault()
            this.props.dispatch(hideConvertedText());
            this.props.dispatch(clearAnnotation());
            
        }
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    handleLogoutClick () {
        this.props.dispatch(logout());
    }

    handleGoToOtherPage() {
        if(!this.props.location.includes("dashboard")){
            window.location.hash="#/dashboard";
        }
        else {
            window.location.hash="#/";
        }
            
    }

    render(){
        const props = this.props;
        let session = "";

        if (this.props.isLoginForm && !this.props.userAuth)
            session = "Sign in"
        else if (!this.props.isLoginForm && !this.props.userAuth) {
            session = "Sign up"
        } 
        else {
            session = `Logged in`
        }

        let location = "";
        if (this.props.location === "#/dashboard"){
            location = "Main"
        }
        else {
            location = "Dashboard"
        }

                                    // <button type="button" onClick={this.handleHamburgerClick} className="button hamburger-link m-2">
                                    //     <i className="fa fa-bars white-text" aria-hidden="true"></i>
                                    // </button>
                                    //<ClickOutHandler onClickOut={this.onClickOut}><span></span></ClickOutHandler>

        return (
                 ()=> {
                    if (this.props.isTop===true && !this.props.location.includes("dashboard")) {
                        return (
                            <nav className="transparent">
                                <div className="brand margin-top-14">
                                    <a onClick={this.scrollToTop} className="m-2 white-text navbar-brand link"><strong>CONTEXT</strong></a>
                                </div>
                                    <ul className="white-text links">
                                        <li><Link hidden={this.props.userAuth} className="thistle-text-color link m-2" to={this.props.link1} spy={true} smooth={true} duration={750}>About</Link></li>
                                        <li><Link hidden={this.props.userAuth} className="thistle-text-color link m-2" to={this.props.link2} spy={true} smooth={true} duration={750}>Features</Link></li>
                                        <li><Link hidden={this.props.userAuth} className="thistle-text-color link m-2" to={this.props.link3} spy={true} smooth={true} duration={750}>{session}</Link></li>
                                        <li className="thistle-text-color link m-2" hidden={!this.props.userAuth} onClick={this.handleGoToOtherPage}>{location}</li>
                                        <button type="button" hidden={!this.props.userAuth} className="link button-link m-2 white-text float-flex-item-right" onClick={this.handleLogoutClick}>Logout ({this.props.user.username})</button>
                                    </ul>

                            </nav>
                        )
                    }

                    else if (this.props.isTop===false && !this.props.location.includes("dashboard")) {
                        return (
                            <nav className="thistle-background-color">
                                <div className="brand margin-top-14">
                                    <a onClick={this.scrollToTop} className="m-2 gray-text-color navbar-brand link"><strong>CONTEXT</strong></a>
                                </div>
                                <ul className="links dark-slate-gray-text-color">
                                    <li><Link hidden={this.props.userAuth} className="dark-slate-gray-text-color link m-2" to={this.props.link1} spy={true} smooth={true} duration={750}>About</Link></li>
                                    <li><Link hidden={this.props.userAuth} className="dark-slate-gray-text-color link m-2" to={this.props.link2} spy={true} smooth={true} duration={750}>Features</Link></li>
                                    <li><Link hidden={this.props.userAuth} className="dark-slate-gray-text-color link m-2" to={this.props.link3} spy={true} smooth={true} duration={750}>{session}</Link></li>
                                    <li className="dark-slate-gray-text-color link m-2" hidden={!this.props.userAuth} onClick={this.handleGoToOtherPage}>{location}</li>
                                    <button type="button" onClick={this.handleLogoutClick} hidden={!this.props.userAuth} className="link button-link gray-text-color m-2 float-flex-item-right">Logout ({this.props.user.username})</button>  
                                </ul>
                            </nav>
                        )
                    }
                    else if (this.props.location.includes("dashboard")) {
                        return (
                            <nav className="thistle-background-color">
                                <div className="brand margin-top-14">
                                    <a onClick={this.scrollToTop} className="m-2 gray-text-color navbar-brand link"><strong>CONTEXT</strong></a>
                                </div>
                                <ul className="links dark-slate-gray-text-color">
                                    <li className="dark-slate-gray-text-color link m-2" hidden={!this.props.userAuth} onClick={this.handleGoToOtherPage}>{location}</li>
                                        <button type="button" onClick={this.handleLogoutClick} hidden={!this.props.userAuth} className="link button-link gray-text-color m-2">Logout ({this.props.user.username})</button>  
                                    <form className="float-flex-item-right" id={this.props.formId} onSubmit={(e) => this.handleSubmit(e,this.props.annotation)}>
                                        <button type="submit" className="button button-primary" name="search-button">{this.props.annotation===null ? "Annotate" : "Clear"}</button>
                                    </form>
                                </ul>

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
         isLoginForm: state.mainUi.isLoginForm,
         user: state.user.user,
         userAuth: state.user.userAuth,
         location: state.user.location,
         annotation:state.annotations.annotation
    })
};

export default connect(mapStateToProps)(NavBar);
