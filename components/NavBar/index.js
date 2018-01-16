import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {hideConvertedText, scrollAtTop, logout, setAnnotationString, annotate, clearAnnotation, 
        getAnnotations,showRecentAnnotationsModal,hideRecentAnnotationsModal,setAnnotatedText, 
        showConvertedText} from '~/actions';
import Modal from 'react-modal';
import '~/assets/styles/main.css'
import Words from '~/components/Words'
import Scroll from 'react-scroll';
import system from '~/system'

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
        this.handleRecentAnnotationsClick = this.handleRecentAnnotationsClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.afterModalOpen = this.afterModalOpen.bind(this);
        this.handleRecentAnnotationClick = this.handleRecentAnnotationClick.bind(this)
    }

    handleCloseModal () {
        this.props.dispatch(hideRecentAnnotationsModal());
    }
    handleOpenModal () {
        this.props.dispatch(showRecentAnnotationsModal());
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            let boolean = window.scrollY < 1;
            this.props.dispatch(scrollAtTop(boolean));
        },{ passive: true });
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', () => {
            let boolean = window.scrollY < 1;
            this.props.dispatch(scrollAtTop(boolean));
        },{ passive: true });
    }

    handleSubmit(e, annotation){
        console.warn("Warning: This site only works if accessed from http, not https. If you access it from https, it will not work.")
        if(annotation === null){
            e.preventDefault();
  
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
    //Recent Annotations, with an 's'
    handleRecentAnnotationsClick () {
        this.props.dispatch(showRecentAnnotationsModal());
    }
    afterModalOpen() {
        let user = system.identity()
        this.props.dispatch(getAnnotations(user.id))
    }
    //RecentAnnoation, with NO 's'
    handleRecentAnnotationClick(event){
        let element = parseInt(event.currentTarget.dataset.element);
        this.props.dispatch(setAnnotatedText(this.props.recentAnnotations[element].annotation));
        this.handleCloseModal();
        this.props.dispatch(showConvertedText());
        
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
                        let modalStyle = {
                            overlay:{
                                zIndex:"100"
                            }
                        }
                        
                        let recentAnnotations = this.props.recentAnnotations.map((annotation,index)=>{
                            return <li key={index}><p><button className="button-link text-left" onClick={this.handleRecentAnnotationClick} data-element={index}><Words words={annotation.annotation[0]} key={index} noButton={true} /><Words words={annotation.annotation[1]} key={index+1} noButton={true} />...</button></p></li>
                        });
                        return (
                            <nav className="thistle-background-color" id="nav-id">

                                <ul className="links dark-slate-gray-text-color">
                                    <div className="brand links margin-top-14">
                                        <a onClick={this.scrollToTop} className="m-2 gray-text-color navbar-brand link"><strong>CONTEXT</strong></a>
                                    </div>
                                    <li className="dark-slate-gray-text-color link m-2" hidden={!this.props.userAuth} onClick={this.handleGoToOtherPage}>{location}</li>
                                    <li><button type="button" onClick={this.handleLogoutClick} hidden={!this.props.userAuth} className="link button-link gray-text-color m-2">Logout ({this.props.user.username})</button></li>
                                    <li><button type="button" onClick={this.handleRecentAnnotationsClick} className="link button-link gray-text-color m-2">Recent Annotations</button></li>  
                                    <form className="float-flex-item-right" id={this.props.formId} onSubmit={(e) => this.handleSubmit(e,this.props.annotation)}>
                                        
                                        <button type="submit" className="button button-primary" name="search-button">{this.props.annotation===null ? "Annotate" : "Clear"}</button>
                                    </form>
                                </ul>
                                <Modal
                                    base=""
                                    ariaHideApp={false}
                                    style={modalStyle}
                                    closeTimeOutMS={10}
                                    onRequestClose={this.handleCloseModal}
                                    isOpen={this.props.showRecentAnnotationsModal}
                                    contentLabel='Recent Annotations Modal'
                                    onAfterOpen={this.afterModalOpen}
                                >
                                    <button className="modalCloseButton" onClick={this.handleCloseModal}><i className="fa fa-times-circle fa-2x" aria-hidden="true"></i></button>
                                    <div className="info-modal-div">
                                        <h2>Recent Annotations</h2>
                                        <ol>
                                            {recentAnnotations}
                                        </ol>
                                    </div>
                                </Modal>
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
         annotation:state.annotations.annotation,
         showRecentAnnotationsModal: state.dashboardUi.showRecentAnnotationsModal,
         recentAnnotations: state.annotations.recentAnnotations
    })
};

export default connect(mapStateToProps)(NavBar);
