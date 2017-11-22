import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'

//works well with redux-form
//validate-this
//

import '~/assets/styles/main.css'


export class Form extends React.Component {
    constructor(props){
        super(props)

    }

//have this component be configurable with taking props "email," "username," and "password," and "confirmPassword"
//that way I can configure a sign up form and a log in form
//how would I have a parent form component with field children components? That would be better, I think

    render(){
    

        return (
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-6">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-6">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-6">
                            <button type="submit" className="btn btn-default">Sign up</button>
                        </div>
                    </div>
                </form>
            )
    }
}

const mapDispatchToProps = dispatch => {
   return ({

   })
};
export default connect(mapDispatchToProps)(Form);
