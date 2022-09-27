import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Navbar1 from './components/Navbar1';
import Features from './components/Features';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      user: {},
      number_of_apples: 20,
      personname: 'Julian'
    }
  }

  addToApples = () => {
    this.setState({age: this.state.number_of_apples + 1})
  }
  render() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar1/>
      <Routes>
        <Route path='/Greet' element={<Greet></Greet>}></Route>
        <Route path='/Features' element={<Features mystate={this.state.number_of_apples} />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
