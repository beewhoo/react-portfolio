import React, { Component } from 'react';
import About from './Components/About';
import Header from './Components/Header';
import logo from './logo.svg';
import $ from 'jquery';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };


  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>

      </div>
    );
  }
}

export default App;
