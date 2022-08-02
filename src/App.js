import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import React from 'react';
import {useState} from 'react';




function getToken(){
  const tokenString = sessionStorage.getItem('token2');
  return tokenString;
  
}
class App extends React.Component {
  constructor(props){
    super(props);
    const token = getToken();
    this.state = ({token:token})

  }

  setToken = (token)=>{

      sessionStorage.setItem('token', token);
      this.setState({...this.state, token:token})
  }
  
  handleClick = () =>{
    console.log('ff');
  }
  render(){
    console.log(this.state)
    if(!this.state.token){
  return (
    <div className="App">
      <Login onClick={this.handleClick} setToken={this.setToken}/>
    </div>
  );
  }else{
    return(
      <div>aaaa</div>
    );
  }
  }
}

export default App;
