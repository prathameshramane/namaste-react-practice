import React from "react";
import Profile from "./Profile";

// const AboutUs = () => {
//     return <h1>About Us</h1>
// }

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ users: data });
  }

  render() {
    return (
      <>
        <h1>About Us Class</h1>
        <Profile users={this.state.users} />
      </>
    );
  }
}

export default AboutUs;
