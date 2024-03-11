import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      selectedUser: null,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    const timer = setInterval(() => console.log("Logging every second"), 1000);
    this.setState({ timer: timer });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("Props", prevProps);
    console.log("State", prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.state.timer);
  }

  render() {
    const { users } = this.props;
    return (
      <>
        {users.length === 0 ? (
          <h3>Loading...</h3>
        ) : (
          users.map((user) => (
            <h3
              key={user.id}
              onClick={(event) => {
                this.setState({ selectedUser: event.target.innerText });
              }}
            >
              {user?.name}
            </h3>
          ))
        )}
      </>
    );
  }
}

export default Profile;
