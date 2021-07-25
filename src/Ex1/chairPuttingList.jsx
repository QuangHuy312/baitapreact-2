import React, { Component } from "react";

class ChairPuttingList extends Component {
  renderChairPuttingList = () => {
    return this.props.chairPuttingList.map((item, index) => {
      return (
        <div key={index} className="col-7">
          <h6>
            Ghế :Số {item.SoGhe}, Giá : {item.Gia}$
            <a href="#">
              <button onClick ={()=>this.props.deleteChairPutting(item)} className="btn btn-danger w-25 ml-4">Hủy</button>
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
      <div className="w-50">
        <h5 className="text-primary">Ds ghế đang đặt ({totalQuantity})</h5>
        {this.renderChairPuttingList()}
      </div>
    );
  }
}

export default ChairPuttingList;
