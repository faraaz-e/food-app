import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is About page</h2>
      <User name={"Tom"} />

      <UserClass name={"Bob"} location={"Mumbai"} />
    </div>
  );
};

export default About;
