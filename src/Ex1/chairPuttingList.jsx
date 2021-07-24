import React, { Component } from "react";

class ChairPuttingList extends Component {
  renderChairPuutingList = () => {
    console.log(this.props.chairPuttingList);
    return this.props.chairPuttingList.map((item, index) => {
      return (
        <div key={index}>
          <h6>
            Ghế :{item.SoGhe} {item.Gia}$
            <a href="#">
              <button className="btn">[Hủy]</button>
            </a>
          </h6>
        </div>
      );
    });
  };

  render() {
    let totalQuantity = this.props.chairPuttingList.reduce((total, item,index) => {
            return (total += item.quantity);
      },0);
    return (
      <div className="text-left">
        <h5 className="text-primary">Ds ghế đang đặt ({totalQuantity})</h5>
        {this.renderChairPuutingList()}
      </div>
    );
  }
}

export default ChairPuttingList;
