import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { name, location } = this.props; //destructuring
    const { count, count2 } = this.state; //destructuring

    return (
      <div class="user-card">
        {/* <h1>Count: {this.state.count}</h1> */}
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase Count
        </button>

        <h1>Count2: {count2}</h1>

        {/* <h2>Name: {this.props.name}</h2> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: email@domain</h4>
      </div>
    );
  }
}

export default UserClass;
