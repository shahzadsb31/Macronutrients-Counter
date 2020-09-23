import React, { Component } from "react";

class IncCarbs extends Component {
  render() {
    return (
      <div>
        <h2>
          <button
            className="btn btn-info btn-lg"
            onClick={this.props.onIncCarbs}
          >
            Increment Carbs by 1g
          </button>

          <span className="badge badge-info" style={{ marginLeft: 50 }}>
            Total Carbs: {this.props.currCarbs}g
          </span>
        </h2>
      </div>
    );
  }
}

export default IncCarbs;
