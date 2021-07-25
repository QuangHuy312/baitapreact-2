import React, { Component } from "react";
import "./glass.css";
import model from "./imgGlass/model.jpg";
import v1 from "./imgGlass/v1.png";
import v2 from "./imgGlass/v2.png";
import v3 from "./imgGlass/v3.png";
import v4 from "./imgGlass/v4.png";
import v5 from "./imgGlass/v5.png";
import v6 from "./imgGlass/v6.png";
import v7 from "./imgGlass/v7.png";
import v8 from "./imgGlass/v8.png";
import v9 from "./imgGlass/v9.png";
class Home2 extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: v1,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: v2,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: v3,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: v4,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: v5,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: v6,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: v7,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: v8,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: v9,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    selectGlass: [],
  };

  renderGlass = () => {
    return this.arrProduct.map((glass) => {
      return (
        <img
          key={glass.id}
          src={glass.url}
          alt={glass.name}
          className="img-fuild ml-4 mt-5 glass-item"
          width={90}
          onClick={() => {
            this.selectedGlass(glass);
          }}
        />
      );
    });
  };

  selectedGlass = (glass) => {
    this.setState({ selectGlass: glass });
    console.log(this.state.selectGlass.name);
  };
  render() {
    const { name, desc, url } = this.state.selectGlass;
    return (
      <div className="content">
        <div className="overlay">
          <h3>TRY GLASSES APP ONLINE</h3>
          <div className="container d-flex justify-content-center">
            <div className="card mt-3" style={{ width: "20rem" }}>
              <img
                className="card-img-top model"
                src={model}
                alt="Card image cap"
              />
              <img src={url} alt="" className="glass-test" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc}</p>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-center bg-white w-75 mt-4">
            {this.renderGlass()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home2;
