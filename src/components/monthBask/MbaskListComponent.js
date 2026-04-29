/**
 * Copyright (C) Skill Works IT Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT Team <contact@skillworksit.com>, Jan 2023
 */

import React from 'react';
import { connect } from 'react-redux';
import localForage from '../../hooks/localForage';

import { Header } from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import FooterComponent from '../footer';
import { Profile } from '../../containers/profile';
import hashHistory from '../../hashHistory';

import MbaskItemListComponent from './MbaskItemListComponent';
import { PostMonBasketList, PostMonBasketItemsList, PostMonBasketListDelete, PostMonItemCreate } from '../../actions/mbasket/MonthBasketActions';

class MonthBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basketList: [],
      itemsList: [],
      dispItems: false,
      basketLists: [],
      activePage: 1,
      userInfo: {},
      baskData: [],
      bsktListCount: 0,
      recordId: '',
      baskId: '',
    };
  }

  componentDidMount = () => {
    this.handleBasketList();
    this.setBaskData();
  }
  handleBasketList = () => {
    this.props.PostMonBasketList((resObj) => {
      if (resObj && resObj.status == '200') {
        this.setState({ basketList: resObj.resData.result, bsktListCount: resObj.resData.result.monthBasketsListCount });
      } else {
        this.setState({ basketList: [] })
      }
    });
  }
  setBaskData = async () => {
    const baskD = await localForage.getItem('bask');
    const baskData = baskD.value || [];
    const baskItems = await localForage.getItem('baskItems');
    const baskItemsData = baskItems.value || [];
    this.setState({ baskData, isCartEmpty: baskData.length > 0 ? true : false, baskItemsData });
  }
  handleShowCreate = () => {
    hashHistory.push('/create-basket')
  }

  handleItemsList = (recordId) => {
    const basketLists = this.state.basketList.filter(each => each._id == recordId)
    const reqBody = {
      recordId
    }
    this.props.PostMonBasketItemsList(reqBody, (resObj) => {
      if (resObj && resObj.status == '200') {
        const itemsList = resObj.resData.result
        this.setState({ dispItems: !this.state.dispItems, basketLists, itemsList, baskId: recordId })
      }
    })
  }

  handleBasketDelete = (recordId) => {
    const reqBody = {
      recordId
    }
    this.props.PostMonBasketListDelete(reqBody, (resObj) => {
      if (resObj && resObj.status == '200') {
        this.handleBasketList();

      }
    })
  }

  render() {
    const cartItemsQtyList = this.state.baskData;
    const { basketList, itemsList, dispItems, baskId } = this.state;
    return (
      <div className='wrapper'>
        <Header />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='checkout-section mt-3 mb-5'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h3 className='screen-title'> Month Basket </h3>
              </div>
            </div>
            <div className='row' id='notifications'>
              <Profile />
              <div className='col-sm-8'>
                <div className='main'>
                  <main className='content'>
                    <div className='container-fluid p-0'>
                      <a className='btn btn-primary float-end mt-n1' data-bs-toggle='offcanvas' data-bs-target='#offcanvasRight' aria-controls='offcanvasRight'
                        onClick={this.handleShowCreate}
                      >
                        <i className='fas fa-plus'></i> Create Basket
                      </a>
                      <h1 className='h3 mb-3'>Month BasketList</h1>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='card'>
                            <div className='card-body'>
                              <div className='dataTables_wrapper dt-bootstrap5 no-footer'>
                                {basketList && basketList.length > 0 ?
                                  <div className='table-responsive'>
                                    <table >
                                      <thead>
                                        <tr>
                                          <th scope='col'>Name</th>
                                          <th scope='col'>VendOName</th>
                                          <th scope='col'>status </th>
                                          <th scope='col'>Actions</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {basketList && basketList.map((list, index) =>
                                          <>
                                            <tr key={index}>
                                              <td>{list.bName}</td>
                                              <td>{list.voName}</td>
                                              <td>{list.hoda}</td>
                                              <td>
                                                <a className='me-2' onClick={() => this.handleItemsList(list._id)}> Items</a>
                                                <a className='me-2'><i className='fa fa-trash' onClick={() => this.handleBasketDelete(list._id)}> </i></a>
                                                <button className='me-2 btn btn-default' onClick={() => hashHistory.push('/create-item/' + list._id)} > + Add Items</button>
                                              </td>
                                            </tr>
                                            {this.state.basketLists.some(item => item._id == list._id) ? (
                                              <tr>
                                                <td>
                                                  <div className='col-sm-9 col-12'>
                                                    <MbaskItemListComponent cartItemsQtyList={cartItemsQtyList} baskId={baskId} cartItemsData={itemsList} cartId={list._id} cartItemsList={this.cartItemsList} handleItemsList={this.handleItemsList} setBaskData={this.setBaskData} />
                                                  </div>
                                                </td>
                                              </tr>
                                            )
                                              : null
                                            }
                                          </>
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                  : <div className='text-center '>
                                    <p>No data found</p>
                                  </div>
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =============================== footer start ================================= --> */}
        <FooterComponent />
      </div>
    )
  }
}

const mapStateToProps = () => ({});
const mapDistachToProps = (dispatch) => ({
  GetVoMonthBasketsList: (body, cb) => dispatch(GetVoMonthBasketsList(body, cb)),
  GetVoMonthBasketDelete: (body, cb) => dispatch(GetVoMonthBasketDelete(body, cb)),
  GetVoMonthBasketDefault: (body, cb) => dispatch(GetVoMonthBasketDefault(body, cb)),
  PostMonBasketList: (cb) => dispatch(PostMonBasketList(cb)),
  PostMonBasketItemsList: (body, cb) => dispatch(PostMonBasketItemsList(body, cb)),
  PostMonBasketListDelete: (body, cb) => dispatch(PostMonBasketListDelete(body, cb)),
  PostMonItemCreate: (body, cb) => dispatch(PostMonItemCreate(body, cb))

});

export default connect(mapStateToProps, mapDistachToProps)(MonthBasket);