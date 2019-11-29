import React, { Component } from "react";

class Coursesales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    };
  }
  sumPrice(price) {
    this.setState(() => ({ total: this.state.total + price }));
  }

  render() {
    console.log(this.props.items);
    return <div>I am from course sales page.</div>;
  }
}

export default Coursesales;

//{ total: this.state.total + price }
