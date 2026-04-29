import Carousel from 'react-bootstrap/Carousel';
import hashHistory from '../../hashHistory';

import Ban1 from '../../assets/images/slider-1-min.png';
import Ban2 from '../../assets/images/slider-2-min.png';


import smallBan1 from '../../assets/images/icons/dry-fruits.png';
import smallBan2 from '../../assets/images/icons/ghee.png';
import smallBan3 from '../../assets/images/icons/honey.png';
import smallBan4 from '../../assets/images/icons/millets.png';
import smallBan5 from '../../assets/images/icons/oils.png';
import smallBan6 from '../../assets/images/icons/pulses.png';
import smallBan7 from '../../assets/images/icons/rice-bag.png';
import smallBan8 from '../../assets/images/icons/spice.png';

import mediumBan1 from '../../assets/images/landing-big-banner/dry_fruits1.jpg';
import mediumBan2 from '../../assets/images/oils.jpeg';
import mediumBan3 from '../../assets/images/millets.jpeg';
import Ban6 from '../../assets/images/landing-big-banner/dry_fruits1.jpg';


function FeaturedCategoriesComponent() {
  return (
    <div className='container wow animate__animated animate__fadeIn mt-90'>
      {/* <div className='row align-items-center'>
        <div className='section-title'>
          <h1 className='title'> Featured Categories</h1>
        </div>
      </div> */}
      <div className="carausel-10-columns-cover position-relative">
        <div className="carausel-10-columns" id="carausel-10-columns">

          <div className='row align-items-center mt-2'>
            <div className='small-banner-section' role='alert'>
              <Carousel className='carousel slide' indicators={false}>
                <Carousel.Item>
                  <div className='d-flex '>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}} >
                      <div className='card text-center' style={{ background: '#eeffe3' }}>
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan1} />
                          </div>
                          <p>Dry Fruits</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}>
                      <div className='card text-center' style={{ background: '#FEEFEA' }} >
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan4} />
                          </div>
                          <p>Millets</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}>
                      <div className='card text-center' style={{ background: '#eeffe3' }}>
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan5} />
                          </div>
                          <p>Oils</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}} >
                      <div className='card text-center' style={{ background: '#FFFCEB' }}>
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan6} />
                          </div>
                          <p>Pulses</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}} >
                      <div className='card text-center' style={{ background: '#F2FCE4' }}>
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan7} />
                          </div>
                          <p>Rice</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}} >
                      <div className='card text-center' style={{ background: '#FFF3FF' }} >
                        <div className='card-body '>
                          <div className='image-card-small '>
                            <img src={smallBan8} />
                          </div>
                          <p>Spices</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}} >
                      <div className='card text-center' style={{ background: '#eeffe3' }}>
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan1} />
                          </div>
                          <p>Dry Fruits</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}>
                      <div className='card text-center' style={{ background: '#FEEFEA' }} >
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan4} />
                          </div>
                          <p>Millets</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}>
                      <div className='card text-center' style={{ background: '#eeffe3' }}>
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan5} />
                          </div>
                          <p>Oils</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className='d-flex '>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}} >
                      <div className='card text-center' style={{ background: '#eeffe3' }}>
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan1} />
                          </div>
                          <p>Dry Fruits</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}>
                      <div className='card text-center' style={{ background: '#FEEFEA' }} >
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan4} />
                          </div>
                          <p>Millets</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}>
                      <div className='card text-center' style={{ background: '#eeffe3' }}>
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan5} />
                          </div>
                          <p>Oils</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}} >
                      <div className='card text-center' style={{ background: '#FFFCEB' }}>
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan6} />
                          </div>
                          <p>Pulses</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}} >
                      <div className='card text-center' style={{ background: '#F2FCE4' }}>
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan7} />
                          </div>
                          <p>Rice</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}} >
                      <div className='card text-center' style={{ background: '#FFF3FF' }} >
                        <div className='card-body '>
                          <div className='image-card-small '>
                            <img src={smallBan8} />
                          </div>
                          <p>Spices</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}} >
                      <div className='card text-center' style={{ background: '#eeffe3' }}>
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan1} />
                          </div>
                          <p>Dry Fruits</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}>
                      <div className='card text-center' style={{ background: '#FEEFEA' }} >
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan4} />
                          </div>
                          <p>Millets</p>
                        </div>
                      </div>
                    </div>
                    <div className='small-ban-card' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}>
                      <div className='card text-center' style={{ background: '#eeffe3' }}>
                        <div className='card-body '>
                          <div className='image-card-small img-fluid'>
                            <img src={smallBan5} />
                          </div>
                          <p>Oils</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- menu-items end--> */}

    </div>
  );
}

export default FeaturedCategoriesComponent;