import React, { Component } from "react";

class ItemChair extends Component {
  state = {
    isBooking: true,
  };

  changeColorPutting = () => {
    this.setState({ isBooking: !this.state.isBooking });
  };
  render() {
    const { SoGhe, TrangThai } = this.props.chairList;
    let btnClass = this.state.isBooking
      ? "btn btn-secondary text-white mb-3"
      : "btn btn-success text-white mb-3";
    if (TrangThai) {
      btnClass = "btn btn-danger text-white mb-3";
    }
    console.log(this.props.chairList)
    return (
      <button
        onClick={() => {
          this.props.renderChairPutting(this.props.chairList);
          this.changeColorPutting();
        }}
        chairList={this.props.chairList}
        className={btnClass}
        style={{ width: "50px" }}
        disabled={TrangThai}
      >
        {SoGhe}
      </button>
    );
  }
}

export default ItemChair;
