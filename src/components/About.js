import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  async componentDidMount() {
    // console.log("Parent ComponentDidMount");

    const data = await fetch("https://reqres.in/api/users/2");
    const userData = await data.json();

    this.setState({
        userInfo: userData.data
    })
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is About page</h2>

        <UserClass name={"Bob"} location={"Mumbai"} />
      </div>
    );
  }
}

export default About;
