import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'
import {If, Then, Else} from 'react-if';


import '~/assets/styles/main.css'

import Scroll from 'react-scroll';


const Element = Scroll.Element;

export class Feature extends React.Component {
    constructor(props){
        super(props)

    }

    render(){

        return (
            <Element name={this.props.name}>
                <If condition={this.props.position === 'left'} >
                    <Then>
                        <div className="feature">
                            <div className="p-1">
                                <img className="feature-image thistle-text-color" src={this.props.image} alt={`Image of ${this.props.title}`}></img>
                            </div>
                            <div className="feature-content p-1">
                                <h4 className="tan-text-color">{this.props.title}</h4>
                                <p className="thistle-text-color">{this.props.copy}</p>
                            </div>
                        </div>
                    </Then>
                    <Else>
                        <div className="feature">
                            <div className="feature-content p-1">
                                <h4 className="tan-text-color">{this.props.title}</h4>
                                <p className="thistle-text-color">{this.props.copy}</p>
                            </div>
                            <div className="p-1">
                                <img className="feature-image thistle-text-color" src={this.props.image} alt={`Image of ${this.props.title}`}></img>
                            </div>
                        </div>
                    </Else>
                </If>
            </Element>
        )
    }
}

const mapDispatchToProps = dispatch => {
   return ({

   })
};
export default connect(mapDispatchToProps)(Feature);

// <div className="" id={`${this.props.name}`}>
// <div className={`mx-auto media-${this.props.position}  col-lg-6`} style={styles}>
//     <a  href="">
//         <img className="media-object svg-image img-fluid " src={this.props.image} alt={`Image of ${this.props.title}`}></img>
//     </a>
// </div>
// <div className="media-body col-lg-6">
//     <h4 className="media-heading">{this.props.title}</h4>
//     <p>{this.props.copy}</p>
// </div>
// </div>