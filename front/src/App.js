import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Steps from './components/Steps';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Steps />
      </div>
    );
  }
}

export default App;
