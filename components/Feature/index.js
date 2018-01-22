import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import {  } from '~/actions'
import {If, Then, Else} from 'react-if';
import '~/assets/styles/main.css'
import Scroll from 'react-scroll';
import MediaQuery from 'react-responsive';
const Element = Scroll.Element;

export class Feature extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return (
            <Element name={this.props.name}>
                <MediaQuery query="(max-width:650px)">
                    <div className="feature">
                    <div className="feature-content p-1">
                        <h4 className="tan-text-color">{this.props.title}</h4>
                        <p className="thistle-text-color">{this.props.copy}</p>
                    </div>
                    <div className="">
                        <img className="feature-image thistle-text-color" src={this.props.image} alt={`Image of ${this.props.title}`}></img>
                    </div>
                </div>
                </MediaQuery>
                <MediaQuery query="(min-width:651px)">
                    <If condition={this.props.position === 'left'} >
                        <Then>
                            <div className="feature">
                                <div className="">
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
                                <div className="">
                                    <img className="feature-image thistle-text-color" src={this.props.image} alt={`Image of ${this.props.title}`}></img>
                                </div>
                            </div>
                        </Else>
                    </If>
                </MediaQuery>
            </Element>
        )
    }
}

const mapStateToProps = dispatch => {
   return ({

   })
};
export default connect(mapStateToProps)(Feature);