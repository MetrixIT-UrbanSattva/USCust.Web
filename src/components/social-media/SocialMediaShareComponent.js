/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { Component } from 'react';
import hashHistory from '../../hashHistory';
import config from '../../../config/config.json';

class SocialMediaShareComponent extends Component {

  handleShare = (platform, item) => {
    const { width, height } = 800;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const description = `Item: ${item.itemPeru}`
    const buyingLink = `${config.socialMediaUrl}#/product_view/${item.voItem}`
    const text = `${config.socialMediaUrl}\n${description}\n${buyingLink}`;
    let url = '';
    if (platform === 'whatsapp') {
      url = `${config.whatsappUrl}${encodeURIComponent(`${text}`)}`;
    } else if (platform === 'facebook') {
      url = `${config.facebookUrl}${encodeURIComponent(`${text}`)}`;
    } else if (platform === 'gmail') {
      url = `${config.gmailUrl}${encodeURIComponent(`${text}`)}`;
    } else if (platform === 'twitter') {
      url = `${config.twitterUrl}${encodeURIComponent(`${text}`)}`;
    } else if (platform === 'instagram') {
      // url =  `${config.instagramUrl}${encodeURIComponent(`${text}`)}`;
    }
    window.open(url, "Popup", `width=${width}, height=${height}, left=${left}, top=${top}`);
  }
  render() {
    const { item, i, isAccountDropdown, shareClick } = this.props;
    return (
      <div>
        <div className='d-flex justify-content-between'>
          {this.props.wishlist  ? '' : <h2><a onClick={() => hashHistory.push(`/product_view/${item._id}`)} style={{ cursor: 'pointer' }}>{item.itemPeru}</a></h2>}
          <div onClick={() => shareClick(i)} style={{ cursor: 'pointer' }}> <i className="fa-solid fa-share me-3" /></div>
          {isAccountDropdown === i ?
            <div className={`d-flex align-items-center justify-content-center ${this.props.wishlist ? 'wishlist-account-dropdownn' : 'account-dropdown-items-list'}`}>
              <div className="p-1" style={{ cursor: 'pointer' }}>
                <div className='shareIcons mb-2' onClick={() => this.handleShare('whatsapp', item)}>
                  <i className="fa-brands fa-whatsapp text-success d-flex justify-content-center"></i>
                </div>
                <p className='text-center'>Whatsapp</p>
              </div>
              <div className="p-1" style={{ cursor: 'pointer' }} onClick={() => this.handleShare('facebook', item)}>
                <div className='shareIcons mb-2'>
                  <i className="fa-brands fa-facebook text-primary d-flex justify-content-center"></i>
                </div>
                <p className='text-center'>Facebook</p>
              </div>

              <div className="p-1" style={{ cursor: 'pointer' }} onClick={() => this.handleShare('gmail', item)}>
                <div className='shareIcons mb-2'>
                  <i className="fa-solid fa-envelope text-danger d-flex justify-content-center"></i>
                </div>
                <p className='text-center'>Email</p>
              </div>

              <div className="p-1" style={{ cursor: 'pointer' }} onClick={() => this.handleShare('twitter', item)}>
                <div className='shareIcons mb-2'>
                  <i className="fa-brands fa-twitter text-primary d-flex justify-content-center"></i>
                </div>
                <p className='text-center'>Twitter</p>
              </div>

              <div className="p-1" style={{ cursor: 'pointer' }} onClick={() => this.handleShare('instagram', item)}>
                <div className='shareIcons mb-2'>
                  <i className="fa-brands fa-square-instagram  text-danger d-flex justify-content-center"></i>
                </div>
                <p className='text-center'>instagram</p>
              </div>
            </div>
            : null}
        </div>
      </div>
    )
  }
}

export default SocialMediaShareComponent;