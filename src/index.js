import React, { Component } from "react";
import { render } from "react-dom";
import Animals from "./animals.json";
import "./styles.css";
import FlashCard from "./FlashCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: Animals
    };
  }

  /*componentDidMount() {
    this.fetch();
  }

  fetch() {
    fetch("https://repl.it/@ImagawaTakayuki/JSON-data")
      .then(res => res.json())
      .then(json => {
        console.log(json.results);
        this.setState({
          data: json.results
        });
      });
  }*/

  render() {
    return (
      <div>
        <>
          <header>
            Learn Japanese Vocab with <span>Tango</span>
          </header>
          <p>Tap To Check Definition</p>
          {this.state.animals.items.map(el => (
            <FlashCard key={el.name} {...el} />
          ))}
        </>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
