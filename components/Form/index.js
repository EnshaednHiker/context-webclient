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



    render(){
    

        return (
                <span></span>
            )
    }
}

const mapDispatchToProps = dispatch => {
   return ({

   })
};
export default connect(mapDispatchToProps)(Form);
