import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'

import '~/assets/styles/main.css'

import Scroll from 'react-scroll';


const Element = Scroll.Element;

export class Content extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return (
            <Element name={this.props.name}>
                <div className="">
                    <h4 className="">{this.props.title}</h4>
                    <p>{this.props.copy}</p>
                </div>
            </Element>
        )
    }
}

const mapDispatchToProps = dispatch => {
   return ({

   })
};
export default connect(mapDispatchToProps)(Content);
