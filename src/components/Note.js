import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './css/Note.css';

class Note extends Component {
    render() {      
        return (
            <div className="note">
                <div className="heading">
                    <i className="fa fa-trash-o"></i> &nbsp;<br/>
                    {this.props.title}
                </div><br/>
                <div className="body">{this.props.content}</div>                        
            </div>
        );
    }
}
export default Note;