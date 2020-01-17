import React, { Component } from "react";
import Note from './Note'; 

class NotesPage extends Component {
    render() {
        const data = this.props.data;
        let notes = data.map((val, key) => {
            return (
                <Note 
                    key={val[0]} 
                    title={val[0]} 
                    content={val[1]} 
                />            
            )
        })    
        return (
            <div>
                {notes}
            </div>          
        );
    }
}
export default NotesPage;