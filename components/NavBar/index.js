import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'

import '~/assets/styles/main.css'

import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

export class NavBar extends React.Component {
    constructor(props){
        super(props)

    }



    render(){

        const whiteText = {
            color: "white"
        }

        return (
            <Navbar fixedTop className="transparent no-border" >
                <Navbar.Header>
                    <Navbar.Brand >
                        <a  style={whiteText} href="#">CONTEXT</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem id="navbar-id" eventKey={1} href="#">About</NavItem>
                    <NavItem id="navbar-id" eventKey={2} href="#">Features</NavItem>
                    <NavItem id="navbar-id" eventKey={3} href="#">Sign Up</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem bsStyle={"primary"} id="navbar-id" eventKey={5} href="#">Sign In/Demo Account</NavItem>
                    <Button bsStyle={"primary"}>Sign In/Demo Account</Button>
                </Nav>
          </Navbar>
            )
    }
}

const mapDispatchToProps = dispatch => {
   return ({

   })
};
export default connect(mapDispatchToProps)(NavBar);