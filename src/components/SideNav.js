import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './css/SideNav.css';

class SideNav extends Component {
    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <a className="notes" href="/#" onClick={this.props.handleNotes}><i className="fa fa-pencil"></i> &nbsp; Notes</a>
                <a href="/#" onClick={this.props.handleArchived}><i className="fa fa-archive"></i> &nbsp; Archived</a>
            </div>
        );
    }
}

export default SideNav;