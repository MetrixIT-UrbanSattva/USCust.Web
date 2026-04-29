/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import StarRatings from 'react-star-ratings';

import '../../styles/Styles.css';

class RatingComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  changeRating(newRating, name) {
    // this.setState({
    //   rating: newRating
    // });
  }

  render() {
    return (
      <StarRatings
        rating={this.props.count}
        starRatedColor="#fad101"
        changeRating={this.changeRating}
        numberOfStars={5}
        starDimension={'15'}
        starSpacing={`${0}px`} 
        name='rating'
      />
    );
  }

}

export default RatingComponent;
