import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";

class Card extends Component {
  state = {
    isToggled: false
  };

  handleToggle = () => {
    const { isToggled } = this.state;
    this.setState({ isToggled: !isToggled });
  };

  render() {
    const { en, kanji, kana } = this.props;
    const { isToggled } = this.state;

    return (
      <ul onClick={this.handleToggle}>
        {isToggled && <li className="en">{en}</li>}
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
