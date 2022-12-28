import React from "react";

class Displayinfo extends React.Component {
  state = {
    isShowListUsers: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowListUsers: !this.state.isShowListUsers,
    });
  };

  render() {
    //destructuring array/object
    const { listUsers } = this.props; //const listUsers = this.props.listUser; (similar)
    // console.log(listUsers);
    //props = property
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUsers === true
              ? "Hide list users:"
              : "Show list users:"}
          </span>
        </div>
        {this.state.isShowListUsers && (
          <div>
            {listUsers.map((user, index) => {
              console.log(">>>>>> check map user", user);

              return (
                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Displayinfo;
