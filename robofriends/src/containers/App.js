import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      seachField: "",
    };
  }

  componentDidMount() {
    //random API fetch to get list of random users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((user) => this.setState({ robots: user }));
  }

  onSearchChange = (event) => {
    this.setState({ seachField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.seachField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robo Friends Cards</h1>
        <SearchBox searchChange={this.onSearchChange}></SearchBox>
        <Scroll>
          <CardList robots={filteredRobots}></CardList>
        </Scroll>
      </div>
    );
  }
}

export default App;
