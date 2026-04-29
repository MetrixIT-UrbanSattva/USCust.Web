/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import Carousel from 'react-bootstrap/Carousel';
import hashHistory from '../../hashHistory';

// import Ban1 from '../../assets/images/landing-big-banner/3.png';
import Ban2 from '../../assets/images/landing-big-banner/2.jpg';
import Ban3 from '../../assets/images/landing-big-banner/3.jpg';
// import Ban4 from '../../assets/images/landing-big-banner/4.jpg';
import Ban5 from '../../assets/images/landing-big-banner/1.jpg';
// import Ban6 from '../../assets/images/landing-big-banner/dry_fruits1.jpg';

// import Ban2 from '../../assets/images/slider-2-min.png';

function BigBannerComponent() {
  return (
    <Carousel className='carousel slide' interval={2000} >
      <Carousel.Item>
        <img onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}
          className='d-block img-fluid'
          src={Ban2}
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}
          className='d-block img-fluid'
          src={Ban3}
          alt='Third slide'
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}
          className='d-block img-fluid'
          src={Ban4}
          alt='Fourth slide'
        />
      </Carousel.Item> */}
      <Carousel.Item>
        <img onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}
          className='d-block img-fluid'
          src={Ban5}
          alt='Fifth slide'
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img onClick={() => hashHistory.push('/products')} style={{ cursor: 'pointer'}}
          className='d-block w-100 img-fluid'
          src={Ban6}
          alt='sixth slide'
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default BigBannerComponent;