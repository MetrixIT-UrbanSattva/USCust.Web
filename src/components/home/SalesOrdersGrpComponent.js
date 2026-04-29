/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */
import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import Stepper from 'react-stepper-horizontal';
import moment from 'moment';

import localForage from '../../hooks/localForage';
import { PostSalesOrderGrpsList } from '../../actions/landing-screen/LandingScreenActions';
import OrderImage from '../../assets/images/delivery-boy.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '90%'
  },
};
const ordercustomStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '90%'
  },
};

const steps = [
  { title: 'Placed' },
  { title: 'Confirmed' },
  { title: 'Packed' },
  { title: 'Shipped' },
  { title: 'Dispatched' },
  { title: 'On The Way' },
  { title: 'Delivered' },
  { title: 'Cancelled' },
  { title: 'Reject' },
];

class SalesOrdersGrpComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ordersCount: 0,
      modalIsOpen: false,
      orderModal: false,
      activePage: 1,
      pageLimit: 10,
      salesOrderGrpsListData: [],
      orderTrackData: {},
      flag: false,
      currentStep: 0,
      orderStatus: [],
      stepsData: [],
    }
  }
  async componentDidMount() {
    const userData = await localForage.getItem('userInfo');
    const userInfo = userData.value || {};
    const ordersCount = userInfo.info && userInfo.info.sogActCount;
    await this.salesOrderGrpsList(ordersCount);
  }

  salesOrderGrpsList = async (ordersCount) => {
    const reqBody = {
      activePage: 1,
      pageLimit: 10
    };
    this.props.PostSalesOrderGrpsList(reqBody, async (resObj) => {
      if (resObj.status == '200') {
        this.setState({ salesOrderGrpsListData: resObj.resData.salesOrderGrpsListData, ordersCount });
      } else {
        this.setState({ salesOrderGrpsListData: [], ordersCount });
      }
    });
  }
  ordersClick = () => {
    this.setState({ modalIsOpen: true })
  }
  closeModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }
  orderCloseModal = () => {
    this.setState({ orderModal: !this.state.orderModal });
  }
  orderTrackingClick = async (id) => {
    const orderTrackData = this.state.salesOrderGrpsListData.length > 0 && this.state.salesOrderGrpsListData.find(item => item._id === id);
    const orderStatus = orderTrackData._id && orderTrackData.hodaArr || [];
    let stepsData = [];
    await steps.map(item => {
      const x = orderStatus.find(u => u.soGrpHoda == item.title);
      const date = x?.hDtStr ? moment(x.hDtStr).format('Do MMM, YYYY') : ''
      const y = { title: x?.hDtStr ? item.title + ' (' + date + ')' : item.title };
      stepsData.push(y);
    });
    const currentStep = steps.findIndex(step => step.title === orderTrackData.soGrpHoda);
    this.setState({ orderTrackData, flag: true, modalIsOpen: false, orderModal: true, currentStep, orderStatus, stepsData })
  }
  backClick = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }
  render() {
    return (
      <div className='orders-grp-section'>
        <div onClick={this.ordersClick}>
          <marquee direction="right" behavior="scroll" scrollamount="10" className='marquee'>
            <p>{this.props.count}</p>
            <img src={OrderImage}/>
          </marquee>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.setState({ modalIsOpen: false })}
          style={customStyles}
        >
          <div className='container-fluid auto-container'>
            <button onClick={this.closeModal} className='btn btn-outline-danger btn-md modal-close-btn'>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <i className="fa-solid fa-arrow-left" onClick={this.backClick}></i>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h3 className='screen-title'> My Orders </h3>
              </div>
            </div>
            {this.state.salesOrderGrpsListData && this.state.salesOrderGrpsListData.length > 0 && this.state.salesOrderGrpsListData.map((item, i) => {
              return (
                <div className='row'>
                  <div className='col-sm-12'>
                    <div className='card card-border-light my-2'>
                      <div className='card-body'>
                        <div className='row '>
                          <div className='col-sm-6'>
                            <div className='d-flex justify-content-between'>
                              <h6 className='label'>Order Number</h6>
                              <p className='value'>{item.soGrpCode}</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                              <h6 className='label'>Order Items</h6>
                              <p className='value'>{item.soGrpCount}</p>
                            </div> <div className='d-flex justify-content-between'>
                              <h6 className='label'>Order Date</h6>
                              <p className='value'>{moment(item.cDtStr).format('Do MMM, YYYY')}</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                              <h6 className='label'>Expected Delivery Date</h6>
                              <p className='value'>{moment(item.edDtStr).format('Do MMM, YYYY')}</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                              <h6 className='label'>Order Status</h6>
                              <p className='value'>{item.soGrpHoda}</p>
                            </div>
                          </div>
                          <div className='col-sm-6 text-end'>
                            <div className='d-block '>
                              <button className='btn btn-sm btn-outline-danger my-2' onClick={() => this.orderTrackingClick(item._id)} >Track Order</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Modal>
        {/* Track order */}
        <Modal
          isOpen={this.state.orderModal}
          onRequestClose={() => this.setState({ orderModal: false })}
          style={ordercustomStyles}
        >
          <div className='container-fluid auto-container'>
            <button onClick={this.orderCloseModal} className='btn btn-outline-danger btn-md modal-close-btn'>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <i className="fa-solid fa-arrow-left" onClick={() => this.setState({ modalIsOpen: true, orderModal: false })}></i>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h3 className='screen-title'> My Orders </h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='card card-border-light my-2'>
                  <div className='card-body'>
                    <div className='row col-sm-3'>
                      <div className='d-flex justify-content-between'>
                        <h6 className='label'>Order ID:</h6>
                        <p className='value'>{this.state.orderTrackData.soGrpCode}</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <h6 className='label'>Order date:</h6>
                        <p className='value'>{moment(this.state.orderTrackData.cDtStr).format('Do MMM, YYYY')}</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div>
                        <Stepper
                          activeStep={this.state.currentStep}
                          steps={this.state.stepsData}
                          completeColor='green'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {}
};
const mapDistachToProps = (dispatch) => {
  return {
    PostSalesOrderGrpsList: (body, callback) => dispatch(PostSalesOrderGrpsList(body, callback)),
  };
};
export default connect(mapStateToProps, mapDistachToProps)(SalesOrdersGrpComponent);