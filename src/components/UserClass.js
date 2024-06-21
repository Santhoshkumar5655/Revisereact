import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      // count2: 1,
      userInfo: {
        name: "Dummy",
        Location: "Default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Santhoshkumar5655");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("didmount");
  }
  componentWillMount() {
    console.log("ui disappears");
  }
  render() {
    const { name, location } = this.props;
    // const { count, count2 } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button> */}
        {/* <h1>Count2: {count2}</h1> */}
        <h2> Name : {this.state.userInfo.login}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact: chevurisanthosh@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
