
import React from 'react';

import FooterComponent from '../footer';
import {Header} from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import RelatedProductComponent from '../products/RelatedProductComponent';
import NewQuestionComponent from './NewQuestionComponent';
import RatingComponent from '../common/RatingComponent';
import profilePic from '../../assets/images/default-profile-pic.jpg';

class QuestionAndAnswersComponent extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='products-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h1 className='title'> Question And Answers </h1>
              </div>

            </div>
            <div className='row '>
              <div className='col-sm-12 col-12 text-center'>
                <button className='btn btn-success foo_wid_title  '>Do you have a Question ?</button>
                <NewQuestionComponent />
              </div>
              <div className='col-sm-12 mt-4 '>
                <div className='card shadow-none'>
                  {/* Questions and Answers section start */}
                  <div className='questins-section card-body mt-3 ps-5'>

                    <div className='row'>
                      <div className='col-sm-12 col-12 mb-3'>
                        <div className='each-q-a'>
                          <div className='ml-3 mt-2'>
                            <p className='text-dark'>Q). Lorem ipsum dolor sit amet, consectetur adipiscing elit ? </p>
                            <p>A). Organic raw pecans, organic raw cashews.</p>
                          </div>
                          <div className='d-flex ms-4'>
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
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-12 col-12 mb-3'>
                        <div className='each-q-a'>
                          <div className='ml-3 mt-2'>
                            <p className='text-dark'>Q). Lorem ipsum dolor sit amet, consectetur adipiscing elit ? </p>
                            <p>A). Organic raw pecans, organic raw cashews.</p>
                          </div>
                          <div className='d-flex ms-4'>
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
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-12 col-12 mb-3'>
                        <div className='each-q-a'>
                          <div className='ml-3 mt-2'>
                            <p className='text-dark'>Q). Lorem ipsum dolor sit amet, consectetur adipiscing elit ? </p>
                            <p>A). Organic raw pecans, organic raw cashews.</p>
                          </div>
                          <div className='d-flex ms-4'>
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
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-12 col-12 mb-3'>
                        <div className='each-q-a'>
                          <div className='ml-3 mt-2'>
                            <p className='text-dark'>Q). Lorem ipsum dolor sit amet, consectetur adipiscing elit ? </p>
                            <p>A). Organic raw pecans, organic raw cashews.</p>
                          </div>
                          <div className='d-flex ms-4'>
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
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-12 col-12 mb-3'>
                        <div className='each-q-a'>
                          <div className='ml-3 mt-2'>
                            <p className='text-dark'>Q). Lorem ipsum dolor sit amet, consectetur adipiscing elit ? </p>
                            <p>A). Organic raw pecans, organic raw cashews.</p>
                          </div>
                          <div className='d-flex ms-4'>
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
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-12 col-12 mb-3'>
                        <div className='each-q-a'>
                          <div className='ml-3 mt-2'>
                            <p className='text-dark'>Q). Lorem ipsum dolor sit amet, consectetur adipiscing elit ? </p>
                            <p>A). Organic raw pecans, organic raw cashews.</p>
                          </div>
                          <div className='d-flex ms-4'>
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
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-12 text-center'>
                        <button className='btn  btn-sm btn-warning ms-3 mt-4 mb-4' >Load more</button>
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

export default QuestionAndAnswersComponent;
