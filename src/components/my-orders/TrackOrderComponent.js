/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import Modal from 'react-modal';
import Stepper from 'react-stepper-horizontal';
import hashHistory from '../../hashHistory';

import FooterComponent from '../footer';
import { Header } from '../../containers/header';

import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import RatingComponent from '../common/RatingComponent';

class TrackOrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const orderTrackData = this.props.orderTrackData;
    return (
      <div className='wrapper'>
        <Header />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='create-new-address-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h3 className='title'>Order Tracking</h3>
              </div>
            </div>
            <div className='card card-border-light shadow-sm mt-3'>
              <div className='card-body p-4'>
                <div className='row justify-content-center mt-3'>
                  <div className='col-sm-3'>
                    <h6>Order ID:</h6>
                    {/* <p>{}</p> */}
                  </div>
                  <div className='col-sm-3'>
                    <h6>Order date:</h6>
                    <p>11/1/2022</p>
                  </div>
                </div>
                <div className='row my-5'>
                  <div>
                    <Stepper
                      steps={[{ title: 'Ordered' }, { title: 'Packed' }, { title: 'Dispatched' }, { title: 'Delivered' }]}
                      activeStep={1}
                      completeColor='green'
                    />
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

export default TrackOrderComponent;
