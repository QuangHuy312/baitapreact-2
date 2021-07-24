import React, { Component } from "react";

class ItemChair extends Component {
  state = {
    isBooking: true,
  };

  changeColorPutting = () => {
    this.setState({ isBooking: !this.state.isBooking });
  };
  render() {
    let btnClass = this.state.isBooking
      ? "bg-dark text-white mb-3"
      : "bg-success text-white mb-3";
    const { SoGhe } = this.props.chairList;
    return (
      <button
        onClick={() => {
          this.props.renderChairPutting(this.props.chairList);
          this.changeColorPutting();
        }}
        chairList={this.props.chairList}
        className={btnClass}
        style={{ width: "50px" }}
      >
        {SoGhe}
      </button>
    );
  }
}

export default ItemChair;
