import React, { Component } from "react";
import ItemChair from "./itemChair";

class ChairList extends Component {
  renderChairList = () => {
    return this.props.chairList.map((chair, index) => {
      return (
        <div key={index} className="col-3">
          <ItemChair
            isBooking={this.props.isBooking}
            renderChairPutting={this.props.renderChairPutting}
            chairList={chair}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="w-50 container">
        <button className="w-100 mb-3 btn btn-info">Tài xế</button>
        <div className="row">{this.renderChairList()}</div>
      </div>
    );
  }
}

export default ChairList;
