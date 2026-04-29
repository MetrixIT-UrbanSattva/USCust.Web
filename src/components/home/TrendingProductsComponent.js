import React, { useState } from 'react';
import RatingComponent from '../common/RatingComponent';
import ListProductComponent from './ListProductComponent'
import prodImg1 from '../../assets/images/product-1-1.jpg';

function TrendingProductsComponent() {
  return (
    <div className='col-sm-3 mb-2'>
      <div className='card border-0'>
        <div className='card-header bg-transparent border-0'>
          <div className='row align-items-center '>
            <div className='col-sm-12'>
              <h1 className='title ps-3 pt-2'>Trending Products </h1>
            </div>
          </div>
        </div>
        <div className='card-body '>
          {/* <div className='row'> */}
          <ListProductComponent />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default TrendingProductsComponent;