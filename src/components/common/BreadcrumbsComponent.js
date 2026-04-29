/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import hashHistory from '../../hashHistory';

import '../../styles/BreadcrumbsStyles.css';

class BreadcrumbsComponent extends React.Component {

  render() {
    return (
      <section className='container-fluid bread-crumbs-section '>
          <div className='row align-items-center'>
            <div className='col-sm-12 px-0'>
              <div className="dokan_only_breadcrumb">
                <div className="auto-container">
                  <div className="breadcrumbs nest">
                    <ul className="breadcrumb m-auto">
                      <li>
                        <a onClick={() => hashHistory.push('/home')} >
                        <i className="fa-solid fa-house me-2"></i>Home </a>
                      </li>
                      <li>
                        <a onClick={() => hashHistory.push('/products')}  >Products</a>
                      </li>
                      <li className="active">Pulses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }

}

export default BreadcrumbsComponent;
