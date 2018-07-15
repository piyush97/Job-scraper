import React, { Component } from 'react';
import './App.css';
import superagent from "superagent";

class App extends Component {

 state={
  jobs:[]
 };
componentDidMount(){
                      const checker=this;
 var url = "https://indreed.herokuapp.com/api/jobs/?q=JavaScript&l=New%20Delhi&country=in"
      superagent
      .get(url)
      .then(function(response) {
        checker.setState({jobs:response.body});
      })
      .catch(function(err) {
            console.log(err);

        // err.message, err.response
      });
         
  }   
 
            
  render() {
    return (

<div>
<center><h1>Jobs in New Delhi</h1></center>
{this.state.jobs && this.state.jobs.length && 
 this.state.jobs.map(obj => <p key={obj.id}>
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
