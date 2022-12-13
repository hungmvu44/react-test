import React from "react";

class UserInfo extends React.Component {
  // JSX
  state = {
    name: "Andy",
    adddress: "Aus",
    age: 26,
  };

  handleClick(event) {
    console.log("Click my button");
    console.log("My name is ", this.state.name);
    console.log("random age ", this.state.age);

    this.setState({
      name: "Hung",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  handleChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    alert("NOOO");
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I am from {this.state.age}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me{" "}
        </button>
        <button onMouseOver={this.handleOnMiceOver}>Hover me </button>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleChangeInput(event)}
          />

          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
