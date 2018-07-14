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

<div>
<center><h1>Jobs in New Delhi</h1></center>
{this.state.jobs && this.state.jobs.length && 
  <p ></p> 
 }
</div>
    );
  }
}



export default App;
