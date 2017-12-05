import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import { search } from '~/actions'

export class Dash extends React.Component {
    constructor(props){
        super(props)
        this.searchClick = this.searchClick.bind(this);
        this.getSearch = this.getSearch.bind(this);
    }

    searchClick(e){
        e.preventDefault();
        let url = getSearch();
        console.log("url: ", url);
        this.dispatch(search(url));
    }

    getSearch (event) {
        console.log("event.target.value: ",event.target.value);
        return event.target.value
    }

    render(){
        console.log("this.props.currentSearch: ",this.props.currentSearch);

        return (
                <nav className="dash light-sea-green-background-color">
                    <p>CONTEXT</p>
                    <form id="search-form">
                        <label></label>
                        <input id="search-bar" value={this.props.currentSearch} onChange={this.getSearch} placeholder="enter full website here" type="search" autoComplete="url" form="search-form" name="search-box"></input>
                        <button onClick={this.searchClick} name="search-button" htmlFor="search-box">Search</button>
                    </form>
                    <button type="button">annotate</button>
                    
                </nav>
            )
    }
}
const mapStateToProps = state => {
    return ({
        currentSearch: state.currentSearch
    })
 };
 export default connect(mapStateToProps)(Dash);