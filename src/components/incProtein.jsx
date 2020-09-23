import React, { Component } from "react";

class IncProtein extends Component {
  render() {
    return (
      <div>
        <h2>
          <button
            className="btn btn-success btn-lg"
            onClick={this.props.onIncProtein}
          >
            Increment Protein by 1g
          </button>

          <span className="badge badge-success" style={{ marginLeft: 50 }}>
            Total Protein: {this.props.currProtein}g
          </span>
        </h2>
      </div>
    );
  }
}

export default IncProtein;
