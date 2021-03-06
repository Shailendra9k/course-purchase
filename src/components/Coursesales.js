import React, { Component } from "react";
import Course from "./Course";

class Coursesales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    };
    this.sumPrice = this.sumPrice.bind(this);
  }
  sumPrice(price) {
    this.setState({ total: this.state.total + price });
  }

  render() {
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
        <h1> Buy Courses</h1>
        <div id="courses">
          {courses}
          <p id="total">
            Total:{" "}
            <strong>
              <span>&#8364;</span>
              {this.state.total}
            </strong>
          </p>
        </div>
      </div>
    );
  }
}

export default Coursesales;
