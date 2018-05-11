import React from 'react';
import Dom from 'react-dom';

import '~/assets/styles/main.css'

import Scroll from 'react-scroll';


const Element = Scroll.Element;

export default class Content extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return (
            <Element name={this.props.name}>
                <div className="content p-5">
                    <h4 className="tan-text-color">{this.props.title}</h4>
                    <p className="thistle-text-color">{this.props.copy}</p>
                </div>
            </Element>
        )
    }
}
