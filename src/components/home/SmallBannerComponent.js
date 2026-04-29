import Carousel from 'react-bootstrap/Carousel';
import hashHistory from '../../hashHistory';

import mediumBan1 from '../../assets/images/oil-banner.jpg';
import mediumBan2 from '../../assets/images/spices-banner.jpg';
import mediumBan3 from '../../assets/images/honey-banner.jpg';


function SmallBannersComponent() {
  return (
    <div className='container-fluid auto-container'>
      {/* <!-- medium banner section --> */}
      <div className='row align-items-center'>
        <div className='medium-banner-section' role='alert'>
          <div className='row align-items-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='banner-img wow animate__ animate__fadeInUp animated ' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}} >
                <img src={mediumBan1} className='rounded' />
                <div className='banner-text'>
                  <h4>Everyday Fresh &amp; <br />Clean with Our<br />  Products</h4>
                  <a className='btn btn-xs btn-success'>Shop Now <i className='ti-arrow-right ms-2'></i></a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='banner-img wow animate__ animate__fadeInUp animated' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}} >
                <img src={mediumBan2} className='rounded' />
                <div className='banner-text'>
                  <h4>
                    Make your Breakfast <br />
                    Healthy and Easy</h4>
                  <a className='btn btn-xs btn-success'>Shop Now <i className='ti-arrow-right ms-2'></i></a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='banner-img wow animate__ animate__fadeInUp animated' onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}>
                <img src={mediumBan3} className='rounded img-fluid' />
                <div className='banner-text'>
                  <h4>The best Organic <br />Products Online</h4>
                  <a className='btn btn-xs btn-success'>Shop Now <i className='ti-arrow-right ms-2'></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallBannersComponent;