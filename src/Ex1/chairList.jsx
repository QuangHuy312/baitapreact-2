import React, { Component } from "react";
import ItemChair from "./itemChair";

class ChairList extends Component {
  renderChairList = () => {
    return this.props.chairList.map((chair, index) => {
      return (
        <div key={index} className="col-3">
          <ItemChair
            // changeColorPutting={this.props.changeColorPutting}
            renderChairPutting={this.props.renderChairPutting}
            chairList={chair}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <button className="w-50 mb-3 btn btn-info">Chọn ghế</button>
        <div className="row">{this.renderChairList()}</div>
      </div>
    );
  }
}

export default ChairList;
