import React, { Component } from "react";

class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
    this.clicker = this.clicker.bind(this);
  }

  clicker() {
    let active = !this.state.active;
    this.setState({ active: active });

    this.props.sumPrice(active ? this.props.price : -this.props.price);
  }

  render() {
    return (
      <div>
        <p className={this.state.active ? "active" : ""} onClick={this.clicker}>
          {this.props.name} <br />
          <strong>
            <span>&#8364;</span>
            {this.props.price}
          </strong>
        </p>
      </div>
    );
  }
}

export default Course;
