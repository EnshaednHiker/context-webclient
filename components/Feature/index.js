import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'


import '~/assets/styles/main.css'

import Scroll from 'react-scroll';


const Element = Scroll.Element;

export class Feature extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        console.log("this.props on feature: ", this.props);

        return (
            <Element name={this.props.name}>
                <div className="features">
                    <div>
                        <img className="svg-image img-fluid" src={this.props.image} alt={`Image of ${this.props.title}`}></img>
                    </div>
                    <div className="">
                        <h4 className="media-heading">{this.props.title}</h4>
                        <p>{this.props.copy}</p>
                    </div>
                </div>
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