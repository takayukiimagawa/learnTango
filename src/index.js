import React, { Component } from "react";
import { render } from "react-dom";
import Animals from "./animals.json";
import Body from "./body.json";
import "./styles.css";
import FlashCard from "./FlashCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: Animals,
      body: Body
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
    const { animals, body } = this.state;

    return (
      <div>
        <>
          <header>
            Learn Japanese Vocab with <span>Tango</span>
          </header>
          <p>Tap To Check Definition</p>

          <h2>Animal</h2>
          {animals.items.map(el => (
            <FlashCard key={el.name} {...el} />
          ))}

          <h2>Body</h2>
          {body.items.map(b => (
            <FlashCard key={b.name} {...b} />
          ))}
        </>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
