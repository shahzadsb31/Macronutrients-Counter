import React, { Component } from "react";

class IncCalories extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <h2>
          <button
            className="btn btn-primary btn-lg"
            onClick={this.props.onIncCalories}
          >
            Increment Calories by 100
          </button>

          <span className="badge badge-primary" style={{ marginLeft: 50 }}>
            Total Calories: {this.props.currCalories}
          </span>
        </h2>
      </div>
    );
  }
}

export default IncCalories;
