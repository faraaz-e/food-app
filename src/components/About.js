import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is About page</h2>

        <UserClass name={"Bob"} location={"Mumbai"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is About page</h2>
//       <User name={"Tom"} />

//       <UserClass name={"Bob"} location={"Mumbai"} />
//     </div>
//   );
// };

export default About;
