// class component
// function component

import React from "react";
import Displayinfo from "./Displayinfo";
import UserInfo from "./Userinfo";
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <UserInfo></UserInfo>
        <br />
        <Displayinfo name="Hung" age="30" />
        <hr />
        <Displayinfo name="My" age={25} />
      </div>
    );
  }
}

export default MyComponent;
