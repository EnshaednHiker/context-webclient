import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import '~/assets/styles/dashboard.css'
 
export class LoadingScreen extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        let modalStyle = {
            overlay : {
              position          : 'fixed',
              top               : 0,
              left              : 0,
              right             : 0,
              bottom            : 0,
              backgroundColor   : 'rgba(255, 255, 255, 0.75)',
              zIndex            : '100'
            },
            content : {
              position                   : 'absolute',
              top                        : '0px',
              left                       : '0px',
              right                      : '0px',
              bottom                     : '0px',
              border                     : 'none',
              background                 : 'rgba(255, 255, 255, 0.75)',
              overflow                   : 'auto',
              WebkitOverflowScrolling    : 'touch',
              borderRadius               : 'none',
              outline                    : 'none',
              padding                    : '20px'
          
            }
          }
        let boolean = this.props.postingAnnotation === true || this.props.areAnnotationsLoading === true || this.props.isAnnoLoading === true || this.props.isArticleJsonLoading === true || this.props.isUserLoading === true;

        return (
            <div id="loading-screen-id">
                <Modal
                    ariaHideApp={false}
                    style={modalStyle}
                    closeTimeOutMS={10}
                    isOpen={boolean}
                    contentLabel={"Loading Screen"}
                >
                    <div className="loading-screen-div">
                        <i className="fa fa-spinner fa-pulse fa-5x" aria-hidden="true">
                        </i>
                    </div>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
   return ({
        postingAnnotation: state.annotations.postingAnnotation,
        areAnnotationsLoading:state.annotations.areAnnotationsLoading,
        isAnnoLoading: state.annotations.isAnnoLoading,
        isArticleJsonLoading: state.annotations.isArticleJsonLoading,
        isUserLoading: state.user.isUserLoading
   })
};
export default connect(mapStateToProps)(LoadingScreen);