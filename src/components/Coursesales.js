import React, { Component } from "react";
import Course from "./Course";

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

    let courses = this.props.items.map((item, i) => {
      return (
        <Course
          name={item.name}
          price={item.price}
          key={i}
          sumPrice={this.sumPrice}
          active={item.active}
        />
      );
    });
    return (
      <div>
        <h1>You can buy Courses:</h1>
        <div id="courses">
          {courses}
          <p id="total">
            Total <strong>{this.state.total}</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default Coursesales;

//{ total: this.state.total + price }
