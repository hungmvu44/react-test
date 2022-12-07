// class component
// function component

import React from "react";
class MyComponent extends React.Component {
  // JSX
  state = {
    name: "Andy",
    adddress: "Aus",
    age: 26,
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I am from {this.state.adddress}
      </div>
    );
  }
}

export default MyComponent;
