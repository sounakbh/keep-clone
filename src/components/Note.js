import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './Note.css';

class Note extends Component {
    call = () => {
        alert("YO!");
    }
    render() {      
        return (
            <div className="note">
                <div className="heading">
                    <button onClick={this.call}>
                        <i className="fa fa-trash"></i> &nbsp;
                    </button><br/>
                    {this.props.title}
                </div><br/>
                <div className="body">{this.props.content}</div>                        
            </div>
        );
    }
}
export default Note;