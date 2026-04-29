
import React from 'react';

import FooterComponent from '../footer';
import {HeaderComponent} from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import RelatedProductComponent from '../products/RelatedProductComponent';
import RatingComponent from '../common/RatingComponent';
import profilePic from '../../assets/images/default-profile-pic.jpg';

class ReviewsComponent extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <HeaderComponent />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='products-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h1 className='title'> Customer Reviews </h1>
              </div>
            </div>
            <div className='row '>
              <div className='col-sm-12 mt-4'>
                <div className='card shadow-none'>
                  {/* reviews design start */}
                  <div className='reviews-section card-body mt-4 '>
                    <div className='row'>
                      <div className='col-sm-12 col-12 mb-4'>
                        <div className='d-flex'>
                          <div className='reviewer'>
                            <img src={profilePic} width={50} />
                          </div>
                          <div className='ml-3 mt-2'>
                            <h6>Sindhuja </h6>
                            <RatingComponent />
                            <p >Organic raw pecans, organic raw cashews.</p>
                            <div className='d-flex'>
                              <div className='d-flex like-div'>
                                <a onClick={this.handleLikes}>
                                  <span className='like'>
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-up"></i> */}
                                  </span>
                                </a>
                                <p className='px-3'>0</p>
                              </div>
                              <div className='d-flex dislike-div'>
                                <a onClick={this.handleLikes}>
                                  <span className='like'>
                                    <i class="fa-regular fa-thumbs-down"></i>
                                    {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-down"></i> */}
                                  </span>
                                </a>
                                <p className='px-3'>0</p>
                              </div>
                              <div className='d-flex helpful-btn'>
                                <button className='btn  btn-sm btn-secondary' >Helpful</button>
                                {/* onClick replace the className to ---   className='btn  btn-sm btn-success' */}
                                <p className='px-3 pt-2 mb-0'> 2 people find its Helpful</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-12 col-12 mb-4'>
                        <div className='d-flex'>
                          <div className='reviewer'>
                            <img src={profilePic} width={50} />
                          </div>
                          <div className='ml-3 mt-2'>
                            <h6>Nagaraju Hyderkhan</h6>
                            <RatingComponent />
                            <p>Organic raw pecans, organic raw cashews.</p>
                            <div className='d-flex'>
                              <div className='d-flex like-div'>
                                <a onClick={this.handleLikes}>
                                  <span className='like'>
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-up"></i> */}
                                  </span>
                                </a>
                                <p className='px-3'>0</p>
                              </div>
                              <div className='d-flex dislike-div'>
                                <a onClick={this.handleLikes}>
                                  <span className='like'>
                                    <i class="fa-regular fa-thumbs-down"></i>
                                    {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-down"></i> */}
                                  </span>
                                </a>
                                <p className='px-3'>0</p>
                              </div>
                              <div className='d-flex helpful-btn'>
                                <button className='btn  btn-sm btn-secondary' >Helpful</button>
                                {/* onClick replace the className to ---   className='btn  btn-sm btn-success' */}
                                <p className='px-3 pt-2 mb-0'> 2 people find its Helpful</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-12 col-12 mb-4'>
                        <div className='d-flex'>
                          <div className='reviewer'>
                            <img src={profilePic} width={50} />
                          </div>
                          <div className='ml-3 mt-2'>
                            <h6>Bahunya Rachakonda</h6>
                            <RatingComponent />
                            <p>Organic raw pecans, organic raw cashews.</p>
                            <div className='d-flex'>
                              <div className='d-flex like-div'>
                                <a onClick={this.handleLikes}>
                                  <span className='like'>
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-up"></i> */}
                                  </span>
                                </a>
                                <p className='px-3'>0</p>
                              </div>
                              <div className='d-flex dislike-div'>
                                <a onClick={this.handleLikes}>
                                  <span className='like'>
                                    <i class="fa-regular fa-thumbs-down"></i>
                                    {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-down"></i> */}
                                  </span>
                                </a>
                                <p className='px-3'>0</p>
                              </div>
                              <div className='d-flex helpful-btn'>
                                <button className='btn  btn-sm btn-secondary' >Helpful</button>
                                {/* onClick replace the className to ---   className='btn  btn-sm btn-success' */}
                                <p className='px-3 pt-2 mb-0'> 2 people find its Helpful</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-12 col-12 mb-4'>
                        <div className='d-flex'>
                          <div className='reviewer'>
                            <img src={profilePic} width={50} />
                          </div>
                          <div className='ml-3 mt-2'>
                            <h6>Sindhuja </h6>
                            <RatingComponent />
                            <p >Organic raw pecans, organic raw cashews.</p>
                            <div className='d-flex'>
                              <div className='d-flex like-div'>
                                <a onClick={this.handleLikes}>
                                  <span className='like'>
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-up"></i> */}
                                  </span>
                                </a>
                                <p className='px-3'>0</p>
                              </div>
                              <div className='d-flex dislike-div'>
                                <a onClick={this.handleLikes}>
                                  <span className='like'>
                                    <i class="fa-regular fa-thumbs-down"></i>
                                    {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-down"></i> */}
                                  </span>
                                </a>
                                <p className='px-3'>0</p>
                              </div>
                              <div className='d-flex helpful-btn'>
                                <button className='btn  btn-sm btn-secondary' >Helpful</button>
                                {/* onClick replace the className to ---   className='btn  btn-sm btn-success' */}
                                <p className='px-3 pt-2 mb-0'> 2 people find its Helpful</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-12 col-12 mb-4'>
                        <div className='d-flex'>
                          <div className='reviewer'>
                            <img src={profilePic} width={50} />
                          </div>
                          <div className='ml-3 mt-2'>
                            <h6>Nagaraju Hyderkhan</h6>
                            <RatingComponent />
                            <p>Organic raw pecans, organic raw cashews.</p>
                            <div className='d-flex'>
                              <div className='d-flex like-div'>
                                <a onClick={this.handleLikes}>
                                  <span className='like'>
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-up"></i> */}
                                  </span>
                                </a>
                                <p className='px-3'>0</p>
                              </div>
                              <div className='d-flex dislike-div'>
                                <a onClick={this.handleLikes}>
                                  <span className='like'>
                                    <i class="fa-regular fa-thumbs-down"></i>
                                    {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-down"></i> */}
                                  </span>
                                </a>
                                <p className='px-3'>0</p>
                              </div>
                              <div className='d-flex helpful-btn'>
                                <button className='btn  btn-sm btn-secondary' >Helpful</button>
                                {/* onClick replace the className to ---   className='btn  btn-sm btn-success' */}
                                <p className='px-3 pt-2 mb-0'> 2 people find its Helpful</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-12 col-12 mb-4'>
                        <div className='d-flex'>
                          <div className='reviewer'>
                            <img src={profilePic} width={50} />
                          </div>
                          <div className='ml-3 mt-2'>
                            <h6>Bahunya Rachakonda</h6>
                            <RatingComponent />
                            <p>Organic raw pecans, organic raw cashews.</p>
                            <div className='d-flex'>
                              <div className='d-flex like-div'>
                                <a onClick={this.handleLikes}>
                                  <span className='like'>
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-up"></i> */}
                                  </span>
                                </a>
                                <p className='px-3'>0</p>
                              </div>
                              <div className='d-flex dislike-div'>
                                <a onClick={this.handleLikes}>
                                  <span className='like'>
                                    <i class="fa-regular fa-thumbs-down"></i>
                                    {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-down"></i> */}
                                  </span>
                                </a>
                                <p className='px-3'>0</p>
                              </div>
                              <div className='d-flex helpful-btn'>
                                <button className='btn  btn-sm btn-secondary' >Helpful</button>
                                {/* onClick replace the className to ---   className='btn  btn-sm btn-success' */}
                                <p className='px-3 pt-2 mb-0'> 2 people find its Helpful</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-12 text-center '>
                        <button className='btn  btn-sm btn-warning ms-5 mt-5 mb-5' >load more</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  related products start */}
              <div className='related-products-section my-3 mx-4' >
                <div className='row'>
                  <div className='col-sm-12 col-12'>
                    <h2 className='foo_wid_title '>Related Products</h2>
                  </div>
                </div>
                <div className='row'>
                  <RelatedProductComponent />
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

export default ReviewsComponent;
