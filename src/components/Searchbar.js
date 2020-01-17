import React, { Component } from "react";
import "./Searchbar.css";
 
class SearchBar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="maindiv">
                <input className="search" placeholder="Search"/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default SearchBar;