import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    console.log("hello");
  }
  componentDidMount() {
    console.log("hellfhhhhhhhhhho");
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is namastey js</h2>
        {/* <User name={"riyaz"} /> */}
        <UserClass name={"riyaz"} location={"Goa"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is namastey js</h2>
//       {/* <User name={"riyaz"} /> */}
//       <UserClass name={"riyaz"} location={"Goa"} />
//     </div>
//   );
// };

export default About;
