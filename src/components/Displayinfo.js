import React from "react";

class Displayinfo extends React.Component {
  render() {
    //destructuring array/object
    const { age, name } = this.props;
    console.log(this.props);
    //props = property
    return (
      <div>
        <div>My name is {this.props.name}</div>
        <div>My age is {this.props.age}</div>
      </div>
    );
  }
}

export default Displayinfo;
