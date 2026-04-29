/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import Modal from 'react-modal';

import hashHistory from '../../hashHistory';
import { connect } from 'react-redux';

import FooterComponent from '../footer';
import {Header} from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import RatingComponent from '../common/RatingComponent';
import StarRatings from 'react-star-ratings';

import { PostCustomerMyOrdersItemView, PostCustomerMyOrdersItemReviewRating } from '../../actions/my-orders/CustMyOrdersAction'

import '../../styles/Styles.css';

class GiveRatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: {},
      rating: 0,
      reviewTitle: '',
      review: '',
      errMsg: ''
    }
  }

  componentDidMount = () => {
    this.myOrderItemView();
  }

  myOrderItemView = () => {
    const reqBody = { _id: this.props.id };
    this.props.PostCustomerMyOrdersItemView(reqBody, resObj => {
      if (resObj.status == '200') {
        this.setState({ itemData: resObj.resData });
      } else {
        this.setState({ itemData: {} });
      }
    })
  }
  changeRating = (rating) => {
    this.setState({ rating });
  }

  handleSubmit = () => {
    const { rating, reviewTitle, review, itemData } = this.state;
    if (!rating) {
      this.setState({ errMsg: 'Rating is required' })
    } else {
      const reqBody = { rating, reviewTitle, review, itemData };
      this.props.PostCustomerMyOrdersItemReviewRating(reqBody, resObj => {
        if (resObj.status == '200') {
          hashHistory.push('/order-view/' + resObj.resData.result.soGrpCode)
        }
      });
    }
  }

  render() {
    const { reviewTitle, review, errMsg } = this.state;
    return (
      <div className='wrapper'>
        <Header />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='create-new-address-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h3 className='title'>Give Rating</h3>
              </div>
            </div>
            <div className='card card-border-light shadow-sm mt-3'>
              <div className='card-body p-4'>
                <div className='row'>
                  <div className='col-sm-4'>
                    <div className='mb-3'>
                      <label className='form-label'> Review Title  <span className='required-field'>*</span></label>
                      <input type='text' className='form-control' placeholder='Good, Excellent..' value={reviewTitle} onChange={(e) => this.setState({ reviewTitle: e.target.value })} />
                      {/* <p className='required'>Email / User name required</p> */}review
                    </div>
                  </div>
                  <div className='col-sm-4 text-center pt-3'>
                    <div className='mb-3'>
                      <label className='form-label'> select rating  <span className='required-field'>*</span></label>
                      <div>
                        {/* <RatingComponent /> */}
                        <StarRatings
                          rating={this.props.count}
                          starRatedColor="#fad101"
                          changeRating={this.changeRating}
                          numberOfStars={5}
                          starDimension={15}
                          starSpacing={0}
                          name='rating'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='mb-3'>
                      <label className='form-label'>Review Description <span className='required-field'>*</span></label>
                      <textarea type='text' className='form-control' value={review} placeholder='Type here' onChange={(e) => this.setState({ review: e.target.value })} />
                      {/* <p className='required'>Email / User name required</p> */}
                    </div>
                  </div>
                  <div className='col-sm-12 text-center mt-3 pb-3'>
                    <p className='text-danger'>{errMsg}</p>
                    <button className='btn btn-success px-4' onClick={this.handleSubmit}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- =============================== footer start ================================= --> */}
        <FooterComponent />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {}
};
const mapDistachToProps = (dispatch) => {
  return {
    PostCustomerMyOrdersItemView: (body, callback) => dispatch(PostCustomerMyOrdersItemView(body, callback)),
    PostCustomerMyOrdersItemReviewRating: (body, callback) => dispatch(PostCustomerMyOrdersItemReviewRating(body, callback))
  };
};

export default connect(mapStateToProps, mapDistachToProps)(GiveRatingComponent);
