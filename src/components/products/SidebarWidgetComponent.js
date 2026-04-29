/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';

import '../../styles/SidebarWidgetStyles.css';

import categoryIcon from '../../assets/images/category-1.png';
import hashHistory from '../../hashHistory';

class SidebarWidgetComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleSelect = (val) => {
    this.props.sidebarSelectItems(val);
  }
  render() {
    return (
      <div className='sidebar-widget'>
        <div className='card '>
          <div className='widget widget_box  widget_block'>
            <div className='card-header bg-transparent'>
              <h2 className='foo_wid_title mb-0' >
                Category
              </h2>
            </div>
            <div className='card-body px-0 pt-2'>
              <div className=' each-category-card' onClick={() => this.handleSelect('all')}>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-icon-img me-3'>
                      <img src={categoryIcon} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='category-title'>All</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' each-category-card' onClick={() => this.handleSelect('Pulses')}>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-icon-img me-3'>
                      <img src={categoryIcon} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='category-title'>Pulses</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' each-category-card' onClick={() => this.handleSelect('Spices')}>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-icon-img me-3'>
                      <img src={categoryIcon} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='category-title'>Spices</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' each-category-card' onClick={() => this.handleSelect('Millets')}>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-icon-img me-3'>
                      <img src={categoryIcon} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='category-title'>Millets</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' each-category-card' onClick={() => this.handleSelect('Oils')}>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-icon-img me-3'>
                      <img src={categoryIcon} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='category-title'>Oils</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' each-category-card' onClick={() => this.handleSelect('Dry fruits')}>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-icon-img me-3'>
                      <img src={categoryIcon} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='category-title'>Dry Fruits</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' each-category-card' onClick={() => this.handleSelect('Rice')}>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-icon-img me-3'>
                      <img src={categoryIcon} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='category-title'>Rice</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' each-category-card' onClick={() => this.handleSelect('Cereals')}>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div className='category-icon-img me-3'>
                      <img src={categoryIcon} className='img-fluid' />
                    </div>
                    <div className='category-title-div'>
                      <a className='category-title'>Cereals</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarWidgetComponent;
