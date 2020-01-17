import React, { Component } from "react";
import Searchbar from './Searchbar';
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css';
 
class NavBar extends Component {  
    render() {
        const isSideBarOpen = this.props.isSideBarOpen;
        return (
            <React.Fragment>
                <div className="topnav">
                    <a className="icon" href="/#" onClick={this.props.handle}>
                        { 
                          !isSideBarOpen 
                          ? <i className="fa fa-bars"></i> 
                          : <i className="fa fa-times"></i>
                        }               
                    </a>
                    <span className="active"><a href="/#">{this.props.name}</a></span>
                    <Searchbar />
                </div>
            </React.Fragment>
        );
    }
}
 
export default NavBar;