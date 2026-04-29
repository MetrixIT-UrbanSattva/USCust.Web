/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import { connect } from 'react-redux';
import {MyOrdersComponent} from '../../components/my-orders';
import { PostCustomerMyOrdersList, PostCustomerMyOrdersItemCancel } from '../../actions/my-orders/CustMyOrdersAction';
import localforage from '../../hooks/localForage';



class MyOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      orderList: [],
      status: 'myOrders',
      activePage: 1,
      pageLimit: 5,
      orderYr: 'Six Months',
      soId: [],
      orderYrs: [],
      show: false,
      isTrue: false
    }
  }
  
  componentDidMount = async () => {
    const userData = await localforage.getItem("userInfo");
    this.handleUserOrderYears(userData.value);
    const { activePage, pageLimit, status, orderYr } = this.state;
    this.custMyOrdersList(activePage, pageLimit, status, orderYr);
  }

  handleUserOrderYears = (data) => {
   const foYr =  data.info.fOrder.dtYear;
   const prstYr = new Date().getFullYear();
   const totYr = foYr != 0 ? prstYr - foYr : 0 ;
   const orderYrs = []
    for (var i = 1; i <= totYr; i++) {
      orderYrs.push(prstYr - i)
    }
   this.setState({ orderYrs });
  }

  handleSelectTab = (val) => {
    this.setState({ status: val });
    const { activePage, pageLimit, orderYr } = this.state;
    this.custMyOrdersList(activePage, pageLimit, val, orderYr);
  }
  onChangeYear = (e) => {
    this.setState({ orderYr: e.target.value });
    const { activePage, pageLimit, status } = this.state;
    this.custMyOrdersList(activePage, pageLimit, status, e.target.value);
  }

  custMyOrdersList = (activePage, pageLimit, status, orderYr) => {
    const reqBody = { activePage, pageLimit, status, orderYr }
    this.props.PostCustomerMyOrdersList(reqBody, resObj => {
      if (resObj.status == '200') {
        this.soGrops(resObj.resData);
      } else {
        this.setState({ orderList: [], soId: [] });
      }
    })
  }

  soGrops = (details) => {
    var objectWithGroupByName = {};
    var soId = []
    for (var key in details) {
      var so = details[key].so;
      if (!objectWithGroupByName[so]) {
        objectWithGroupByName[so] = [];
        soId.push(so);
      }
      objectWithGroupByName[so].push(details[key]);

    }
    this.setState({ orderList: objectWithGroupByName, soId });
  }

  handleCancel = () => {
    const {id, isTrue} = this.state;
    const reqBody = isTrue ? {soCode: id}: {soId: id};
    this.props.PostCustomerMyOrdersItemCancel(reqBody, resObj => {
      if (resObj.status == '200') {
        this.setState({show: false});
      }
    })
  }

  setData = (data) => {
    this.setState({...data});

  }
  render() {
    return (
      <MyOrdersComponent 
       state={this.state}
       handleCancel={this.handleCancel}
       handleSelectTab={this.handleSelectTab}
       setData={this.setData}
       onChangeYear={this.onChangeYear}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
  }
};

const mapDistachToProps = (dispatch) => {
  return {
    PostCustomerMyOrdersList: (body, callback) => dispatch(PostCustomerMyOrdersList(body, callback)),
    PostCustomerMyOrdersItemCancel: (body, callback) => dispatch(PostCustomerMyOrdersItemCancel(body, callback))
  };
};

export default connect(mapStateToProps, mapDistachToProps)(MyOrders);
// export default MyOrders;
