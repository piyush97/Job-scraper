import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
 super(props);
 this.state={
  jobs:[]
 }

 }                   
  render() {
    return (
      <div className="App">
       <header className="app-header"></header>
      <div className="app-card-list" id="app-card-list">
      
    </div>
      </div>
    );
  }
}

export default App;
