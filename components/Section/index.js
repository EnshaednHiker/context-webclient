import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'
import { If, Then, Else } from 'react-if';

import '~/assets/styles/main.css'

import Scroll from 'react-scroll';


const Element = Scroll.Element;

export class Section extends React.Component {
    constructor(props){
        super(props)

    }



    render(){
        const styles = {
            width: "20%",
            height: "100%"
        }
        console.log(this.props);

        

        

        return (
            <Element name={this.props.name}>
                <div className="row row-margin">
                    <div className="col col-lg-12">
                        <div className="media section-margin transition" id={`${this.props.name}`}>
                            <If condition={this.props.image === null}>
                                <Then>
                                    <span></span>
                                </Then>
                                <Else>
                                    <div className={`mx-auto media-${this.props.position}  col-lg-6`} style={styles}>
                                        <a  href="">
                                            <img className="media-object svg-image img-fluid " src={this.props.image} alt={`Image of ${this.props.title}`}></img>
                                        </a>
                                    </div>
                                </Else>
                            </If>
                                    <div className="media-body col-lg-6">
                                        <h4 className="media-heading">{this.props.title}</h4>
                                        <p>{this.props.copy}</p>
                                    </div>
                        </div>
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
export default connect(mapDispatchToProps)(Section);

// <div className="page-header">
//     <h1 style={styles}>{this.props.title}<br></br><small>{this.props.copy}</small></h1>
// </div>