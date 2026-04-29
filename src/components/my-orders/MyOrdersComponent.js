
/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Stepper from 'react-stepper-horizontal';

import moment from 'moment';

import hashHistory from '../../hashHistory';
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import FooterComponent from '../footer';
import { Header } from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
// import localforage from '../../hooks/localForage';

import prodImg1 from '../../assets/images/products/oils/2.png';
// import { PostCustomerMyOrdersList, PostCustomerMyOrdersItemCancel } from '../../actions/my-orders/CustMyOrdersAction';
import localForage from '../../hooks/localForage';

const ordercustomStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
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
class MyOrdersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddToCart: false,
      isCartEmpty: false,
      cart: [],
      orderModal: false,
      orderTrackData: {},
      currentStep: 0,
      orderStatus: [],
      stepsData: [],
    }
  }
  async componentDidMount() {
    const cartD = await localForage.getItem('cart');
    const cart = cartD.value || [];
    this.setState({ cart })
  }
  orderTrackingClick = async (item) => {
    const orderTrackData = item
    const orderStatus = orderTrackData._id && orderTrackData.hodaArr || [];
    let stepsData = [];
    await steps.map(item => {
      const x = orderStatus.find(u => u.soGrpHoda == item.title);
      const date = x?.hDtStr ? moment(x.hDtStr).format('Do MMM, YYYY') : ''
      const y = { title: x?.hDtStr ? item.title + ' (' + date + ')' : item.title };
      stepsData.push(y);
    });
    const currentStep = steps.findIndex(step => step.title === orderTrackData.soGrpHoda);
    this.setState({ orderTrackData, orderModal: true, currentStep, orderStatus, stepsData })
  }
  orderTrack = () => {
    this.setState({ orderModal: !this.state.orderModal })
  }
  backClick = () => {
    this.setState({ orderModal: !this.state.orderModal });
  }
  orderCloseModal = () => {
    this.setState({ orderModal: !this.state.orderModal });
  }
  render() {
    const { orderList, orderYr, status, soId, orderYrs, show, isTrue } = this.props.state;
    const {handleSelectTab, handleCancel, setData, onChangeYear} = this.props;
    return (
      <div className='wrapper'>
        <Header count={this.state.cart.length} />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='checkout-section mt-3 mb-5'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h3 className='screen-title'>My Orders</h3>
                <select className="form-control border-left-0" style={{ width: 'auto' }} value={orderYr} onChange={onChangeYear}>
                  <option value= 'Six Months'>Six Months</option>
                  <option value={new Date().getFullYear()}>Year</option>
                  {orderYrs && orderYrs.map((data, i) => <option value={data}>{data}</option>)}
                </select>
              </div>
              <Tabs id='controlled-tab-example' activeKey={status} onSelect={(val) => handleSelectTab(val)}>
                <Tab eventKey='myOrders' title='Orders' className='tab1'>
                  <div className='row mt-3'>
                    <div className='col-sm-12'>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey='Cancelled' title='Cancelled' className='tab1'>
                  <div className='row mt-3'>
                    <div className='col-sm-12'>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
            <div className='row mt-3'>
              {soId && soId.map((val, i) => {
                const ordersList = orderList[val];
                const soOrder = ordersList.filter((data, i) => data.so == val);
                const orderDate = moment(soOrder[0].cDtStr).format('Do MMM, YYYY');
                const soCode = soOrder[0].soCode;
                const sosts = soOrder.find(data => data.soGrpHoda =='Delivered' || data.soGrpHoda =='Cancelled') ? true : false;
                return <div className='col-sm-6' key={i}>
                  <div className='card shadow'>
                    <div className='card-header bg-white'>
                      <p>OrderID: {soCode}</p>
                      <div className='col-sm-12 text-end'>
                        <p>OrderDate: {orderDate}</p>
                      </div>
                      <div className='col-sm-12 text-end'>
                      { !sosts ? <button className='btn btn-sm btn-outline-danger my-2 mx-2' onClick={() => setData({show: true, isTrue: true, id: soCode})} >Cancel Order</button> : null}
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='row'>
                        {ordersList.map((item, index) =>
                          <div className='col-sm-12' key={index}>
                            <div className='card'>
                              <div className='card-body'>
                                <div className='row '>
                                  <div className='col-sm-6'>
                                    <div className='category-title-div'>
                                      <p className='mb-0'>Order No: {item.soGrpCode} </p>
                                      <p className='mb-0'>Status: {item.soGrpHoda}</p>
                                      <p className='mb-0'>Items Count: {item.gitQty}</p>
                                      {item.soGrpHoda == 'Delivered' ? <p className='mb-0'>Delivered Date: {moment(item.adDtStr).format('Do MMM, YYYY')}</p> : item.soGrpHoda != 'Cancelled' ? <p className='mb-0'>Expected Date: {moment(item.edDtStr).format('Do MMM, YYYY')}</p> : null}
                                      <p className='mb-0'>Order Value: {item.gNetAmt}</p>
                                      {item.soGrpHoda != 'Delivered' && item.soGrpHoda != 'Cancelled' ? <button className='btn btn-outline-secondary btn-sm mt-3' onClick={() => setData({show: true, isTrue: false, id: item.soGrpCode})}>Cancel Order</button> : null}
                                    </div>
                                  </div>
                                  <div className='col-sm-4 text-end'>
                                    <div className='d-block '>
                                      <button className='btn btn-sm btn-success mx-2' onClick={() => hashHistory.push('/order-view/' + item.soGrpCode)} >View Order</button>
                                      {item.soGrpHoda != 'Delivered' ? <button className='btn btn-sm btn-outline-danger my-2 mx-2' onClick={() =>this.orderTrackingClick(item)} >Track Order</button> : null}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>
            <Modal show={show} onHide={() => setData({ show: false })}>
              <Modal.Body>
                  <Modal.Title id='contained-modal-title-vcenter'><h5>Are You Sure Want to Cancel Order </h5></Modal.Title>

              </Modal.Body>
              {/* <p class='text-danger text-center'>{err}</p> */}
              <Modal.Footer>
                <Button variant='primary' onClick={() => handleCancel()}>Yes</Button>
                <Button variant='danger' onClick={() => setData({ show: false })}>No</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </section>
        <Modal
          show={this.state.orderModal}
          onHide={() => this.setState({ orderModal: false })}
          className='modal-xl'
        >
          <Modal.Body>
            <div className='container-fluid auto-container'>
              <button onClick={() => this.setState({ orderModal: false })} className='btn btn-outline-danger btn-md modal-close-btn'>
                <i className="fa-solid fa-xmark"></i>
              </button>
              <i className="fa-solid fa-arrow-left" onClick={() => this.setState({ orderModal: false })}></i>
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
          </Modal.Body>
          </Modal>
        {/* <!-- =============================== footer start ================================= --> */}
        <FooterComponent />
      </div>
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

export default connect(mapStateToProps, mapDistachToProps)(MyOrdersComponent);

