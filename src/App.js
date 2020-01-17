import React from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import ArchivedPage from './components/ArchivedPage';
import NotesPage from './components/NotesPage';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      pageName: 'Notes',
      isSideBarOpen: false,
      notesPageContent: [],
      archivedPageContent: [],
      title: '', 
      content: '',
      isChecked: false,
    }
  }

  // componentDidMount() {
  //   sessionStorage.setItem('notesPageContent', JSON.stringify(this.state.notesPageContent));
  //   sessionStorage.setItem('archivedPageContent', JSON.stringify(this.state.archivedPageContent));
  //   const notesPageContent = sessionStorage.getItem('notesPageContent');
  //   const archivedPageContent = sessionStorage.getItem('archivedPageContent');
  //   // this.setState({ archivedPageContent: archivedPageContent,  notesPageContent: notesPageContent});
  //   alert(notesPageContent);
  //   console.log(JSON.parse(archivedPageContent));
  // }

  handleClick = () => {
    this.setState({
      isSideBarOpen: !this.state.isSideBarOpen
    });
  }

  handleArchived = () => {
    this.setState({
      pageName: 'Archived'
    });
  }

  handleNotes = () => {
    this.setState({
      pageName: 'Notes'
    });
  }

  handleChangeV = (event) => {
    this.setState({title: event.target.value});
  }

  handleChangeC = (event) => {
    this.setState({content: event.target.value});
  }

  handleSubmit = (event) => {
    if(!this.state.isChecked) {
      let taskArray = this.state.notesPageContent;
      let task = [this.state.title, this.state.content];
      taskArray.push(task);
      this.setState({notesPageContent: taskArray});   
    }
    else {
      let taskArray = this.state.archivedPageContent;
      let task = [this.state.title, this.state.content];
      taskArray.push(task);
      this.setState({archivedPageContent: taskArray});
    }
    event.preventDefault();
    // sessionStorage.setItem('notesPageContent', this.state.notesPageContent);
    // sessionStorage.setItem('archivedPageContent', this.state.archivedPageContent);
  }

  handleInputChange = (e) => {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <div className="App">

        <Navbar 
          isSideBarOpen={this.state.isSideBarOpen} 
          handle={this.handleClick} 
          name={this.state.pageName}
        />

        { 
          this.state.isSideBarOpen 
          ? <SideNav 
              handleArchived={this.handleArchived} 
              handleNotes={this.handleNotes} 
            /> 
          : null
        }
        <form >

          <input 
            className="title" 
            placeholder="Task Title" 
            type="text" 
            value={this.state.title} 
            onChange={this.handleChangeV} 
          /><br/>

          <input 
            className="content" 
            placeholder="Task Content" 
            type="text" 
            value={this.state.content} 
            onChange={this.handleChangeC} 
          /><br/>

          <input
            name="isChecked"
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleInputChange} 
          />

          <span className="submit">
            <button onClick={this.handleSubmit}>
              <i className="fa fa-plus"></i> &nbsp; Add task
            </button>
          </span>

        </form>

        { 
          this.state.pageName === 'Notes' 
          ? <NotesPage data={this.state.notesPageContent} /> 
          : <ArchivedPage data={this.state.archivedPageContent}/>
        }

      </div>
    );
  }
}

export default App;
