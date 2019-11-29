import React, { Component } from "react";
import "./App.css";
import Coursesales from "./components/Coursesales";

class App extends Component {
  render() {
    let courses = [
      { name: "Complete FullStack dev course", price: 199 },
      { name: "Complete Pentesting course", price: 299 },
      { name: "Complete Frontend dev course", price: 180 },
      { name: "Bug Bounty and web app pentesting", price: 190 }
    ];
    return (
      <div className="App">
        <div>
          <p>Welcome to course sales page.</p>
          <Coursesales items={courses} />
        </div>
      </div>
    );
  }
}

export default App;
