// class component
// function component

import React from "react";
import Displayinfo from "./Displayinfo";
import UserInfo from "./Userinfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hung Vu", age: 12 },
      { id: 2, name: "Tra My", age: 25 },
      { id: 3, name: "Cun Tra", age: 29 },
    ],
  };
  render() {
    return (
      <div>
        <UserInfo></UserInfo>
        <br />
        <Displayinfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
