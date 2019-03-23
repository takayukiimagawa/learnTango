import React, { Component } from "react";
import { render } from "react-dom";
import Animals from "./animal.json";
import "./styles.css";
import Card from "./Card";
import FlashCard from "./FlashCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      data: Animals
    };
  }

  componentDidMount() {
    // this.fetch();
  }

  fetch() {
    /* fetch('https://repl.it/@ImagawaTakayuki/JSON-data')
    .then(res => res.json())
    .then(json => this.setState({
      data: json.results
    })); */
  }

  render() {
    return (
      <div>
        {/*<p>{this.state.data && this.state.data.items[3].en}</p>*/}
        {/*<>{
          this.state.data.items.map(el =>
          <Card key={Date.now}{...el} />)
          }</>*/}
        <>
          {this.state.data.items.map(el => (
            <FlashCard key={Date.now} {...el} />
          ))}
        </>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
