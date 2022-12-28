import "./App.css";
// rcc
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    // render will show html on screen
    return (
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}
// e92e34bf4fbc4b699ee77c739f997ab5
// https://newsapi.org/v2/top-headlines?apiKey=e92e34bf4fbc4b699ee77c739f997ab5&q=cricket
// https://newsapi.org/v2/top-headlines?country=us&apiKey=e92e34bf4fbc4b699ee77c739f997ab5
