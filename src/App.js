import React, { Component } from "react";
import "./App.css";
import FoodButton from "./components/foodButton";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    currCalories: 0,
    currCarbs: 0,
    currFat: 0,
    currProtein: 0,
    numButtons: [1],
  };

  incMacros = (calories, carbs, protein, fat) => {
    const currCalories = this.state.currCalories + calories;
    const currCarbs = this.state.currCarbs + carbs;
    const currProtein = this.state.currProtein + protein;
    const currFat = this.state.currFat + fat;
    this.setState({ currCalories, currCarbs, currProtein, currFat });
  };

  resetMacros = () => {
    const currCalories = 0;
    const currCarbs = 0;
    const currProtein = 0;
    const currFat = 0;
    this.setState({ currCalories, currCarbs, currProtein, currFat });
  };

  addButton = () => {
    const numButtons = [...this.state.numButtons];
    numButtons.push(numButtons.length + 1);
    this.setState({ numButtons });
  };

  render() {
    return (
      <div>
        <NavBar />
        <br></br>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {this.state.numButtons.map((number) => (
            <FoodButton onIncMacros={this.incMacros} key={number} />
          ))}
          <br></br>
          <p style={{ fontSize: 40 }}>
            <span className="badge badge-primary">
              Total Calories: {this.state.currCalories}
            </span>
            <span className="badge badge-primary" style={{ marginLeft: 50 }}>
              Total Carbs: {this.state.currCarbs}g
            </span>
            <span className="badge badge-primary" style={{ marginLeft: 50 }}>
              Total Protein: {this.state.currProtein}g
            </span>
            <span className="badge badge-primary" style={{ marginLeft: 50 }}>
              Total Fat: {this.state.currFat}g
            </span>
          </p>
          <button
            onClick={this.addButton}
            className="btn btn-primary btn-sm m-2"
          >
            Add Button
          </button>
          <button
            onClick={this.resetMacros}
            className="btn btn-primary btn-sm m-2"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
