import React, { Component } from 'react';

import './css/App.css';
import Dogs from './Dogs'


class App extends Component {
  render() {
    return (
      <div className="page" >

        <h1 className="App-title">Dogs R Awesome</h1>
        <Dogs />
      </div>
    );
  }
}

export default App;
