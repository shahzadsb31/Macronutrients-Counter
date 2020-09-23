import React, { Component } from "react";

class FoodButton extends Component {
  state = {
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
    name: "",
    nameSubmitted: false,
    caloriesSubmitted: false,
    carbsSubmitted: false,
    proteinSubmitted: false,
    fatSubmitted: false,
  };

  handleCaloriesSubmit = (event) => {
    event.preventDefault();
    const caloriesSubmitted = true;
    this.setState({ caloriesSubmitted });
  };

  handleCarbsSubmit = (event) => {
    event.preventDefault();
    const carbsSubmitted = true;
    this.setState({ carbsSubmitted });
  };

  handleProteinSubmit = (event) => {
    event.preventDefault();
    const proteinSubmitted = true;
    this.setState({ proteinSubmitted });
  };

  handleFatSubmit = (event) => {
    event.preventDefault();
    const fatSubmitted = true;
    this.setState({ fatSubmitted });
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: parseInt(event.target.value, 10) });
  };

  handleNameChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    if (
      this.state.caloriesSubmitted &&
      this.state.carbsSubmitted &&
      this.state.proteinSubmitted &&
      this.state.fatSubmitted
    ) {
      return (
        <div>
          <button
            className="btn btn-primary btn-lg"
            onClick={() =>
              this.props.onIncMacros(
                this.state.calories,
                this.state.carbs,
                this.state.protein,
                this.state.fat
              )
            }
          >
            {this.state.name}
          </button>
          <br></br>
          <br></br>
        </div>
      );
    }
    return (
      <div>
        <form onSubmit={this.handleCaloriesSubmit}>
          <p>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleNameChange}
            />
          </p>
          <p>
            <button>Submit Name</button>
          </p>
        </form>
        <form onSubmit={this.handleCaloriesSubmit}>
          <p>
            <input
              type="number"
              placeholder="Calories"
              name="calories"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <button>Submit Calories</button>
          </p>
        </form>
        <form onSubmit={this.handleCarbsSubmit}>
          <p>
            <input
              type="number"
              placeholder="Carbs"
              name="carbs"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <button>Submit Carbs</button>
          </p>
        </form>
        <form onSubmit={this.handleProteinSubmit}>
          <p>
            <input
              type="number"
              placeholder="Protein"
              name="protein"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <button>Submit Protein</button>
          </p>
        </form>
        <form onSubmit={this.handleFatSubmit}>
          <p>
            <input
              type="number"
              placeholder="Fat"
              name="fat"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <button>Submit Fat</button>
          </p>
        </form>
      </div>
    );
  }
}

export default FoodButton;
