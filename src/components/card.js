import React from "react";
import logo from "./mastercard-icon.jpg";
import chip from "./chip.png";

class Card extends React.Component {
  state = {
    name: "NOAH GRAHAM",
    number: [
      "*",
      "*",
      "*",
      "*",
      " ",
      "*",
      "*",
      "*",
      "*",
      " ",
      "*",
      "*",
      "*",
      "*",
      " ",
      "*",
      "*",
      "*",
      "*"
    ],
    valid: ["*", "*", "/", "*", "*"]
  };

  //Name of Card Owner
  nameChange = e => {
    e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, "");
    this.setState({
      name: e.target.value.toUpperCase()
    });
  };

  //Card Number
  numberChange = e => {
    e.target.value = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    this.setState({
      number: this.state.number.map((x, i) =>
        x === " "
          ? " "
          : e.target.value[i] === undefined
          ? "*"
          : e.target.value[i]
      )
    });
  };

  //Expiration
  dateChange = e => {
    e.target.value =
      e.target.value.length >= 3
        ? `${e.target.value
            .replace(/[^0-9]/g, "")
            .slice(0, 2)}/${e.target.value.replace(/[^0-9]/g, "").slice(2, 4)}`
        : e.target.value.replace(/[^0-9]/g, "");
    this.setState({
      valid: this.state.valid.map((x, i) =>
        x === "/"
          ? "/"
          : e.target.value[i] === undefined
          ? "*"
          : e.target.value[i]
      )
    });
  };

  render() {
    return (
      <div className="Main">
        <div className="card-container">
          <h1>CREDIT CARD</h1>
          <img className="chip" src={chip} alt="" />
          <div className="card-information">
            <div>
              <p className="card-number">{this.state.number}</p>
              <p className="card-ccv">5456</p>
              <p className="card-name">{this.state.name}</p>
              <div className="expiration-date">
                <p className="validation">
                  VALID
                  <br />
                  THRU
                </p>
                <p className="card-date">{this.state.valid}</p>
              </div>
            </div>
            <img className="logo" src={logo} alt="" />
          </div>
        </div>

        <div className="form-container">
          <label>
            CARD NUMBER
            </label>
            <input
              type="text"
              maxLength="19"
              onChange={this.numberChange}
              placeholder="**** **** **** ****"
            />
          
          <label>
            NAME
            </label>
            <input
              type="text"
              maxLength="20"
              onChange={this.nameChange}
              placeholder="Enter your name"
            />
          
          <label>
            EXPIRATION DATE
            </label>
            <input
              type="text"
              onChange={this.dateChange}
              maxLength="5"
              placeholder="MM/YY"
            />
          
        </div>
      </div>
    );
  }
}
export default Card;
