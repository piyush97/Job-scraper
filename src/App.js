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
 this.state.jobs.map(obj => <p>
                    Company: {obj.company} 
                    <br/>
                    Title: {obj.title}
                    <br/>
Date: {obj.date}<br/>
Location :{obj.location}<br/>
<a href={obj.url} >Visit? </a> 

                    </p>)
 }
</div>
    );
  }
}



export default App;
