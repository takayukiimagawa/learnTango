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
    const { en, kanji, kana, image } = this.props;
    const { isToggled } = this.state;
    console.log(this.props);

    return (
      <>
        <ul onClick={this.handleToggle}>
          {isToggled && (
            <div>
              <li className="en">{en}</li>
              <img src={image} alt="" width="30%" height="auto" />
            </div>
          )}
          <li className="kanji">
            漢字 <span className="kanji main">{kanji}</span>
          </li>
          <li className="kana">
            かな <span className="kana main">{kana}</span>
          </li>
        </ul>
      </>
    );
  }
}

export default Card;
