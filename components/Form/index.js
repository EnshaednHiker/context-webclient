import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import { toggleForm, register, setEmail, setConfirmEmail, setPassword, setConfirmPassword, login, logout } from '~/actions'
import Scroll from 'react-scroll';
const Element = Scroll.Element;
import system from '~/system';
import '~/assets/styles/main.css'



export class Form extends React.Component {
    constructor(props){
        super(props)
        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleConfirmEmailChange = this.handleConfirmEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleToggleForm() {
        this.props.dispatch(toggleForm(!this.props.isLoginForm));
    }

    handleClearForm(formId) {
        document.getElementById(formId).reset()
    }

    handleEmailChange (e) {
        this.props.dispatch(setEmail(e.target.value));
    }
    handleConfirmEmailChange (e){
        this.props.dispatch(setConfirmEmail(e.target.value));
    }

    handlePasswordChange (e){
        this.props.dispatch(setPassword(e.target.value));
    }

    handleConfirmPasswordChange (e) {
        this.props.dispatch(setConfirmPassword(e.target.value));
    }

    handleSubmitLogin(e) {
        e.preventDefault();
        let payload = system.security.encrypt(
            {
              "user": {
                "username": e.target.username.value.toString(),
                "password": e.target.password.value.toString()
              }
            }
        );
        this.props.dispatch(login(payload));
    }

    handleSubmitRegister(e){
        e.preventDefault();
        let payload = system.security.encrypt(
            {
              "user": {
                "username": e.target.username.value.toString(),
                "email": e.target.email.value.toString(),
                "password": e.target.password.value.toString()
              }
            }
        );
        this.props.dispatch(register(payload));
    }

    handleLogoutClick () {
        this.props.dispatch(logout());
    }

    render(){
        
        const badColor = {
            backgroundColor: "#ff6666",
            color: "white"
        }

        const goodColor = {
            backgroundColor: "#66cc66",
            color: "white"
        }

        const disableColor = {
            backgroundColor: "gray",
            color: "white"
        }

        const disabledCheck = this.props.email !== this.props.confirmEmail || this.props.password !== this.props.confirmPassword
    
        if (this.props.isLoginForm && !this.props.userAuth){
            return (
                <div className="form-container">
                    <form className="form" id="userForm" name="userForm" onSubmit={(e) => {this.handleSubmitLogin(e); this.handleClearForm("userForm");}}>
                        <Element name="form">
                            <h2 className="tan-text-color m-3">Login</h2>
                        </Element>
                        <p className="thistle-text-color m-2">Don't have an account? Click <button onClick={this.handleToggleForm} type="button" className="button-link">here</button> to register.</p>
                        <div className="form-fields">
                            <div className="form-field">
                                <label htmlFor='username' className="thistle-text-color m-1">Username: </label>
                                <input name='username' autoComplete="true" required type='text' className='m-1' id='loginUsername' placeholder='Username'></input>
                            </div>
                            <div className="form-field">
                                <label htmlFor="password" className="thistle-text-color m-1">Password: </label>
                                <input type="password"  autoComplete="true" required name="password" className="m-1" id="loginPassword" placeholder="Password"></input>
                            </div>
                            <div className="form-field">
                                <span className="m-1 thistle-text-color" id="errorSpan">{this.props.loginError === true ? "Incorrect login, please enter the correct credentials" : ""}</span>
                            </div>
                        </div>
                        <div className="">
                            <button type="submit"  className="m-2 button thistle-text-color light-sea-green-background-color" name="sign-in-button">Sign in</button>
                        </div>
                    </form>
                </div>
            )
        }
        else if (!this.props.isLoginForm && !this.props.userAuth) {
            return (
                <div className="form-container">
                    <form className="form" id="userForm" name="userForm" onSubmit={(e) => {this.handleSubmitRegister(e); this.handleClearForm("userForm");}}>
                        <Element name="form">
                            <h2 className="tan-text-color m-3">Register</h2>
                        </Element>
                        <p className="thistle-text-color m-2">Already have an account? Click <button onClick={this.handleToggleForm} type="button" className="button-link">here</button> to login.</p>
                        <div className="form-fields">
                            <div className="form-field">
                                <label htmlFor='username' className="thistle-text-color m-1">Username: </label>
                                <input name='username' autoComplete="true" required type='text' className='m-1' id='loginUsername' placeholder='Username'></input>
                                <span className="m-1"></span>
                            </div>
                            <div className="form-field">
                                <span className='m-1 thistle-text-color' id='username-validation-error'>{this.props.usernameValidationError ? "That username has already being used in another account. Choose a different username." : ""}</span>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" className="thistle-text-color m-1">Email: </label>
                                <input required onChange={this.handleEmailChange} autoComplete="true" name='email' type='email' className='m-1' id='registerEmail' placeholder='Email'></input>
                                <span className="m-1"></span>
                            </div>
                            <div className="form-field">
                                <span className='m-1 thistle-text-color' id='email-validation-error'>{this.props.emailValidationError ? "That email address is already being used in another account. Choose a different email." : ""}</span>
                            </div>
                            <div className="form-field">
                                <label htmlFor='confirmEmail' className="thistle-text-color m-1">Confirm Email: </label>
                                <input onChange={this.handleConfirmEmailChange} autoComplete="true" style={this.props.email !== this.props.confirmEmail ? badColor : goodColor} title="The Confirm Email field must be the same as the 'Email' field." required name='confirmEmail' type='email' className='m-1' id='registerConfirmEmail' placeholder='Confirm Email'></input>
                                <span className="m-1"></span>
                            </div>
                            <div className="form-field">
                                <span id='confirmMessageEmail' className='thistle-text-color confirmMessage m-1'>{this.props.email !== this.props.confirmEmail ? "Email doesn't match." : "Email matches!"}</span>
                            </div>
                            <div className="form-field">
                                <label htmlFor="password" className="thistle-text-color m-1">Password: </label>
                                <input onChange={this.handlePasswordChange} autoComplete="true" name="password" type="password" className="m-1" id="registrationPassword" placeholder="Password"></input>
                                <span className="m-1"></span>
                            </div>
                            <div className="form-field">
                                <label htmlFor='confirmPassword' className="thistle-text-color m-1">Confirm Password: </label>
                                <input onChange={this.handleConfirmPasswordChange} autoComplete="true" style={this.props.password !== this.props.confirmPassword ? badColor : goodColor} required title="The 'Confirm Password' field must be the same as the 'Password' field." type='password' name='confirmPassword' className='m-1' id='registerConfirmPassword' placeholder='Confirm Password'></input>
                                <span className="m-1"></span>
                            </div>
                            <div className="form-field">
                                <span id='confirmMessagePass' className='thistle-text-color confirmMessage m-1'>{this.props.password !== this.props.confirmPassword ? "Password doesn't match." : "Password matches!"}</span>
                            </div>
                        </div>
                        <div className="">
                            <button type="submit" disabled={disabledCheck}  className="m-2 button thistle-text-color light-sea-green-background-color" style={disabledCheck ? disableColor : {}}>Sign up</button>
                        </div>
                    </form>
                </div>
            )
        }
        else {
            let user = system.identity()
            
            return (
                <div className="form-container">
                    <div className="form">
                        <Element name="form">
                            <h2 className="tan-text-color m-2">Logged In</h2>
                        </Element>
                        <p className="thistle-text-color m-1">Welcome back, {user.username}. You are currently logged in.</p>
                        <button type="button" onClick={this.handleLogoutClick} className="m-2 button thistle-text-color light-sea-green-background-color" name="sign-in-button">Logout</button>
                    </div>
                </div>
            )    
        }
    }
}

const mapStateToProps = state => {
    return ({
        isLoginForm: state.mainUi.isLoginForm,
        email: state.user.email,
        confirmEmail: state.user.confirmEmail,
        password: state.user.password,
        confirmPassword: state.user.confirmPassword,
        loginError: state.user.loginError,
        usernameValidationError: state.user.usernameValidationError,
        emailValidationError: state.user.emailValidationError,
        userAuth: state.user.userAuth
    })
};
export default connect(mapStateToProps)(Form);
