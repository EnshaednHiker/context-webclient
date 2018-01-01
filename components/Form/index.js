import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import { toggleForm } from '~/actions'
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
    }

    handleToggleForm() {
        this.props.dispatch(toggleForm(!this.props.isLogin));
    }

    handleSubmitLogin(e) {
        e.preventDefault();
        console.log("e.target.password.value: ",e.target.password.value);
        console.log("e.target.username.value: ",e.target.username.value);
    }

    handleSubmitRegister(e){
        e.preventDefault();
        console.log("e.target.username.value: ",e.target.username.value);
        console.log("e.target.email.value: ",e.target.email.value);
        console.log("e.target.confirmEmail.value: ",e.target.confirmEmail.value);
        console.log("e.target.password.value: ",e.target.password.value);
        console.log("e.target.confirmPassword.value: ",e.target.confirmPassword.value);
    }

    render(){
    
        if (this.props.isLogin){
            return (
                <div className="form-container">
                    <form className="form" id="userForm" name="userForm" onSubmit={(e) => this.handleSubmitLogin(e)}>
                        <Element name="form">
                            <h2 className="tan-text-color m-3">Login</h2>
                        </Element>
                        <p className="thistle-text-color m-2">Don't have an account? Click <button onClick={this.handleToggleForm} type="button" className="button-link">here</button> to register.</p>
                        <div className="form-fields">
                            <div className="form-field">
                                <label htmlFor='username' className="thistle-text-color m-1">Username: </label>
                                <input name='username' required type='verbatim' className='m-1' id='loginUsername' placeholder='Username'></input>
                            </div>
                            <div className="form-field">
                                <label htmlFor="password" className="thistle-text-color m-1">Password: </label>
                                <input type="password"  required name="password" className="m-1" id="loginPassword" placeholder="Password"></input>
                            </div>
                        </div>
                        <div className="">
                            <button type="submit"  className="m-2 button thistle-text-color light-sea-green-background-color" name="sign-in-button">Sign in</button>
                        </div>
                        <div id="errorDiv">
                            <span id="errorSpan"></span>
                        </div>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div className="form-container">
                    <form className="form" name="userForm" onSubmit={(e) => this.handleSubmitRegister(e)}>
                        <Element name="form">
                            <h2 className="tan-text-color m-3">Register</h2>
                        </Element>
                        <p className="thistle-text-color m-2">Already have an account? Click <button onClick={this.handleToggleForm} type="button" className="button-link">here</button> to login.</p>
                        <div className="form-fields">
                            <div className="form-field">
                                <label htmlFor='username' className="thistle-text-color m-1">Username: </label>
                                <input name='username' required type='verbatim' className='m-1' id='loginUsername' placeholder='Username'></input>
                                <span className='m-1 thistle-text-color' id='username-validation-error'></span>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" className="thistle-text-color m-1">Email: </label>
                                <input required name='email' type='email' className='m-1' id='registerEmail' placeholder='Email'></input>
                                <span className='m-1 thistle-text-color' id='email-validation-error'></span>
                            </div>
                            <div className="form-field">
                                <label htmlFor='confirmEmail' className="thistle-text-color m-1">Confirm Email: </label>
                                <input title="The Confirm Email field must be the same as the 'Email' field." required name='confirmEmail' type='email' className='m-1' id='registerConfirmEmail' placeholder='Confirm Email'></input>
                                <span id='confirmMessageEmail' className='thistle-text-color confirmMessage m-1'></span>
                            </div>
                            <div className="form-field">
                                <label htmlFor="password" className="thistle-text-color m-1">Password: </label>
                                <input type="password" className="m-1" id="registrationPassword" placeholder="Password"></input>
                                <span className="m-1"></span>
                            </div>
                            <div className="form-field">
                                <label htmlFor='confirmPassword' className="thistle-text-color m-1">Confirm Password: </label>
                                <input required title="The 'Confirm Password' field must be the same as the 'Password' field." type='password' name='confirmPassword' className='m-1' id='registerConfirmPassword' placeholder='Confirm Password'></input>
                                <span id='confirmMessagePass' className='thistle-text-color confirmMessage m-1'></span>
                            </div>
                        </div>
                        <div className="">
                            <button type="submit"  className="m-2 button thistle-text-color light-sea-green-background-color">Sign up</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return ({
        isLogin: state.mainUi.isLogin
    })
};
export default connect(mapStateToProps)(Form);
