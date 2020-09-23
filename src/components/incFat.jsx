import React, { Component } from "react";

class IncFat extends Component {
  render() {
    return (
      <div>
        <h2>
          <button
            className="btn btn-danger btn-lg"
            onClick={this.props.onIncFat}
          >
            Increment Fat by 1g
          </button>
          <span className="badge badge-danger" style={{ marginLeft: 50 }}>
            Total Fat: {this.props.currFat}g
          </span>
        </h2>
      </div>
    );
  }
}

export default IncFat;
