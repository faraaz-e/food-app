import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        first_name: "Demo",
        last_name: "Test",
        email: "email@domain.com",
        avatar: "",
      },
    };
    //console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Parent ComponentDidMount");

    const data = await fetch("https://reqres.in/api/users/5");
    const userData = await data.json();

    this.setState({
      userInfo: userData.data,
    });
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWilUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    //console.log("Child Render");

    const { first_name, last_name, email, avatar } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar} />
        <h2>First Name: {first_name}</h2>
        <h2>Last Name: {last_name}</h2>
        <h3>Email: {email}</h3>
      </div>
    );
  }
}

export default UserClass;
