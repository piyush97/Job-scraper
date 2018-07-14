import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props){
 super(props);
 this.state={
  jobs:[]
 }

  }   
  componentWillMount()
{const Jobser=this;
 var url = "https://indreed.herokuapp.com/api/jobs/?q=JavaScript&l=New%20Delhi&country=in"
            fetch(url)
              .then(function(response) {
                return response.json();
              })
              .then(function(myJson) {
                Jobser.setState({jobs:myJson});
                console.log('$$$$$$',myJson);
              });
             }              
  render() {
    return (
      <div className="body">
       <header className="app-header">Real Time Jobs data</header>
      <div className="app-card-list" id="app-card-list">

    </div>
      </div>
    );
  }
}



export default App;
