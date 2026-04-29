import React, { useState } from 'react';
import dealsBanner1 from '../../assets/images/banner-5-min.png';
import RatingComponent from '../common/RatingComponent';

function DealsOfTheDayProductComponent() {

  const [isAddToCart , setISAddToCart] = useState(false);

  const handleAddCart = () => {
    setISAddToCart(true)
  }

  return (
    <div className='row mt-2'>
      <div className='col-xl-3 col-lg-4 col-md-6'>
        <div className='product-img-action-wrap'>
          <div className='product-img'>
            <img src={dealsBanner1} />
          </div>
        </div>

        <div className='product-content-wrap '>
          <div className='deals-countdown-wrap'>
            <div className='deals_box'>
              <div className='deal_box'>
                <div className='deals-countdown' data-countdown='2025/02/25'>
                  <span className='countdown-section'>
                    <span className='countdown-amount hover-up'>790</span>
                    <span className='countdown-period days'></span>
                  </span>
                  <span className='countdown-section'>
                    <span className='countdown-amount hover-up'>12</span>
                    <span className='countdown-period hours'></span>
                  </span>
                  <span className='countdown-section'>
                    <span className='countdown-amount hover-up'>22</span>
                    <span className='countdown-period mins'></span>
                  </span>
                  <span className='countdown-section'>
                    <span className='countdown-amount hover-up'>07</span>
                    <span className='countdown-period sec'></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='deals-content'>
            <div className='pro_title'>
              <a href='#'>Organic Cage Grade A Large  Eggs</a>
            </div>
            <div className='product-rate-cover'>
              <div className='product-rate d-inline-block'>
                <RatingComponent />
              </div>
            </div>
            <div>
              <span className='font-small text-muted'>
                <a target='_blank'> Hambger Hel</a>
              </span>
            </div>
            <div className='product-card-bottom'>
              <div className='addcart-section mt-3'>
                {!isAddToCart ?
                  <button className='btn addcart-button text-white fw-bold' onClick={handleAddCart} ><i class='fa-solid fa-cart-shopping me-2'></i>Add cart</button>
                  : <div className='cart-buttons-div'>
                    <button className='btn btn-success'><i className='fa-solid fa-minus'></i></button>
                    <input type='text' className='form-control' value='0' />
                    <button className='btn btn-success'><i className='fa-solid fa-plus'></i></button>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xl-3 col-lg-4 col-md-6'>
        <div className='product-img-action-wrap'>
          <div className='product-img'>
            <img src={dealsBanner1} className='' />
          </div>
        </div>

        <div className='product-content-wrap '>
          <div class='deals-countdown-wrap'>
            <div class='deals_box'>
              <div class='deal_box'>
                <div class='deals-countdown' data-countdown='2025/02/25'>
                  <span class='countdown-section'>
                    <span class='countdown-amount hover-up'>790</span>
                    <span class='countdown-period days'></span>
                  </span>
                  <span class='countdown-section'>
                    <span class='countdown-amount hover-up'>12</span>
                    <span class='countdown-period hours'></span>
                  </span>
                  <span class='countdown-section'>
                    <span class='countdown-amount hover-up'>22</span>
                    <span class='countdown-period mins'></span>
                  </span>
                  <span class='countdown-section'>
                    <span class='countdown-amount hover-up'>07</span>
                    <span class='countdown-period sec'></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='deals-content'>
            <div className='pro_title'>
              <a href='#'>Organic Cage Grade A Large  Eggs</a>
            </div>
            <div className='product-rate-cover'>
              <div className='product-rate d-inline-block'>
                <RatingComponent />
              </div>
            </div>
            <div>
              <span className='font-small text-muted'>
                <a target='_blank'> Hambger Hel</a>
              </span>
            </div>
            <div className='product-card-bottom'>
              <div className='addcart-section mt-3'>
                {!isAddToCart ?
                  <button className='btn addcart-button text-white fw-bold' onClick={handleAddCart} ><i class='fa-solid fa-cart-shopping me-2'></i>Add cart</button>
                  : <div className='cart-buttons-div'>
                    <button className='btn btn-success'><i className='fa-solid fa-minus'></i></button>
                    <input type='text' className='form-control' value='0' />
                    <button className='btn btn-success'><i className='fa-solid fa-plus'></i></button>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xl-3 col-lg-4 col-md-6'>
        <div className='product-img-action-wrap'>
          <div className='product-img'>
            <img src={dealsBanner1} className='' />
          </div>
        </div>

        <div className='product-content-wrap '>
          <div class='deals-countdown-wrap'>
            <div class='deals_box'>
              <div class='deal_box'>
                <div class='deals-countdown' data-countdown='2025/02/25'>
                  <span class='countdown-section'>
                    <span class='countdown-amount hover-up'>790</span>
                    <span class='countdown-period days'></span>
                  </span>
                  <span class='countdown-section'>
                    <span class='countdown-amount hover-up'>12</span>
                    <span class='countdown-period hours'></span>
                  </span>
                  <span class='countdown-section'>
                    <span class='countdown-amount hover-up'>22</span>
                    <span class='countdown-period mins'></span>
                  </span>
                  <span class='countdown-section'>
                    <span class='countdown-amount hover-up'>07</span>
                    <span class='countdown-period sec'></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='deals-content'>
            <div className='pro_title'>
              <a href='#'>Organic Cage Grade A Large  Eggs</a>
            </div>
            <div className='product-rate-cover'>
              <div className='product-rate d-inline-block'>
                <RatingComponent />
              </div>
            </div>
            <div>
              <span className='font-small text-muted'>
                <a target='_blank'> Hambger Hel</a>
              </span>
            </div>
            <div className='product-card-bottom'>
              <div className='addcart-section mt-3'>
                {!isAddToCart ?
                  <button className='btn addcart-button text-white fw-bold' onClick={handleAddCart} ><i class='fa-solid fa-cart-shopping me-2'></i>Add cart</button>
                  : <div className='cart-buttons-div'>
                    <button className='btn btn-success'><i className='fa-solid fa-minus'></i></button>
                    <input type='text' className='form-control' value='0' />
                    <button className='btn btn-success'><i className='fa-solid fa-plus'></i></button>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xl-3 col-lg-4 col-md-6'>
        <div className='product-img-action-wrap'>
          <div className='product-img'>
            <img src={dealsBanner1} className='' />
          </div>
        </div>

        <div className='product-content-wrap '>
          <div class='deals-countdown-wrap'>
            <div class='deals_box'>
              <div class='deal_box'>
                <div class='deals-countdown' data-countdown='2025/02/25'>
                  <span class='countdown-section'>
                    <span class='countdown-amount hover-up'>790</span>
                    <span class='countdown-period days'></span>
                  </span>
                  <span class='countdown-section'>
                    <span class='countdown-amount hover-up'>12</span>
                    <span class='countdown-period hours'></span>
                  </span>
                  <span class='countdown-section'>
                    <span class='countdown-amount hover-up'>22</span>
                    <span class='countdown-period mins'></span>
                  </span>
                  <span class='countdown-section'>
                    <span class='countdown-amount hover-up'>07</span>
                    <span class='countdown-period sec'></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='deals-content'>
            <div className='pro_title'>
              <a href='#'>Organic Cage Grade A Large  Eggs</a>
            </div>
            <div className='product-rate-cover'>
              <div className='product-rate d-inline-block'>
                <RatingComponent />
              </div>
            </div>
            <div className='product-card-bottom'>
              <div className='d-flex '>
                <p className='price mb-0'>₹ 300.00</p>
                <p className='text-strikeoff mb-0'>₹ 30.00</p>
              </div>
            </div>
            <div>
              <span className='font-small text-muted'>
                <a target='_blank'> Hambger Hel</a>
              </span>
            </div>
            <div className='product-card-bottom'>
              <div className='addcart-section mt-3'>
                {!isAddToCart ?
                  <button className='btn addcart-button text-white fw-bold' onClick={handleAddCart} ><i class='fa-solid fa-cart-shopping me-2'></i>Add cart</button>
                  : <div className='cart-buttons-div'>
                    <button className='btn btn-success'><i className='fa-solid fa-minus'></i></button>
                    <input type='text' className='form-control' value='0' />
                    <button className='btn btn-success'><i className='fa-solid fa-plus'></i></button>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealsOfTheDayProductComponent;