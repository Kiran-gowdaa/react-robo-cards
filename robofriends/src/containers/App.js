import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

function App() {
  // When use Classes method
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     seachField: "",
  //   };
  // }
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  // When use Classes method
  // componentDidMount() {
  //   //random API fetch to get list of random users
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((user) => this.setState({ robots: user }));
  // }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((user) => setRobots(user));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return (
    <div className="tc">
      <h1 className="f1">Robo Friends Cards</h1>
      <SearchBox searchChange={onSearchChange}></SearchBox>
      <Scroll>
        <CardList robots={filteredRobots}></CardList>
      </Scroll>
    </div>
  );
}

export default App;
