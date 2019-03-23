import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";

class Card extends Component {
  render() {
    const { en, kanji, kana } = this.props;

    return (
      <ul>
        <li className="en">{en}</li>
        <li className="kanji">
          漢字 <span className="kanji main">{kanji}</span>
        </li>
        <li className="kana">
          かな <span className="kana main">{kana}</span>
        </li>
      </ul>
    );
  }
}

export default Card;
