/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';

import './css/FilterStyles.css';

class FilterComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  filterClose = () => {
    this.props.filterClose();
  }
  handleSelect = (e, val) => {
    this.props.filterSelectItems(e, val) 
  }
  handlePriceSelect = (e, val) => {
     this.props.filterByPrice(e, val)
  }
  handleRatingSelect = (e, val) => {
    this.props.filterByRating(e, val) 
  }
  handleUnitsSelect = (e, val) => {
    this.props.filterUnitsItems(e, val)
  }
  render() {
    return (
      <div className='filter-section'>
        <div className='row'>
          <div className='col-sm-12 col-12 text-right'>
            <button onClick={this.filterClose} className='btn btn-outline-danger filter-close-btn'>
              <span><i className='fa fa-close' /></span>
            </button>
          </div>
        </div>
        <div className='filter-content'>
          <div className='filter-wrapper'>
            <h2>Filter by Price</h2>
            <div className='each_filter_section price_filter_section'>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={(e) => this.handlePriceSelect(e, '100,500')} />
                <label className='form-check-label' for='flexRadioDefault1'>
                  100 to 500
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={(e) => this.handlePriceSelect(e, '500,1000')} />
                <label className='form-check-label' for='flexRadioDefault1'>
                  500 to 1000
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={(e) => this.handlePriceSelect(e, '1000,5000')} />
                <label className='form-check-label' for='flexRadioDefault1'>
                  1000 to 5000
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={(e) => this.handlePriceSelect(e, '5000,15000')} />
                <label className='form-check-label' for='flexRadioDefault2'>
                  5000 to 15000
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={(e) => this.handlePriceSelect(e, '15000,25000')} />
                <label className='form-check-label' for='flexRadioDefault2'>
                  15000 to 25000
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={(e) => this.handlePriceSelect(e, '25000,35000')} />
                <label className='form-check-label' for='flexRadioDefault2'>
                  25000 to 35000
                </label>
              </div>
            </div>
          </div>
          <div className='filter-wrapper'>
            <h2>Filter by Units</h2>
            <div className='each_filter_section '>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleUnitsSelect(e, 'g')} />
                <label className='form-check-label' for='flexCheckDefault'>
                  g
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleUnitsSelect(e, 'Kg')} />
                <label className='form-check-label' for='flexCheckChecked'>
                  Kg
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleUnitsSelect(e, 'l')} />
                <label className='form-check-label' for='flexCheckChecked'>
                  L
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleUnitsSelect(e, 'ml')} />
                <label className='form-check-label' for='flexCheckDefault'>
                  ml
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleUnitsSelect(e, 'Pcs')} />
                <label className='form-check-label' for='flexCheckChecked'>
                  Pcs
                </label>
              </div>
            </div>
          </div>
          <div className='filter-wrapper'>
            <h2>Filter by categories</h2>
            <div className='each_filter_section '>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleSelect(e, 'all')} />
                <label className='form-check-label' for='flexCheckDefault'>
                  All
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleSelect(e, 'Pulses')} />
                <label className='form-check-label' for='flexCheckChecked'>
                  Pulses
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleSelect(e, 'Spices')} />
                <label className='form-check-label' for='flexCheckChecked'>
                  Spices
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleSelect(e, 'Millets')} />
                <label className='form-check-label' for='flexCheckDefault'>
                  Millets
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleSelect(e, 'Oils')} />
                <label className='form-check-label' for='flexCheckChecked'>
                  Oils
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleSelect(e, 'Dry fruits')} />
                <label className='form-check-label' for='flexCheckChecked'>
                  Dry Fruits
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleSelect(e, 'Rice')} />
                <label className='form-check-label' for='flexCheckChecked'>
                  Rice
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleSelect(e, 'Cereals')} />
                <label className='form-check-label' for='flexCheckChecked'>
                  Cereals
                </label>
              </div>
            </div>
          </div>
          <div className='filter-wrapper'>
            <h2>Rating</h2>
            <div className='each_filter_section '>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleRatingSelect(e, '2')} />
                <label className='form-check-label' for='flexCheckDefault'>
                  2.0 and above
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleRatingSelect(e, '3')} />
                <label className='form-check-label' for='flexCheckChecked'>
                  3.0 and above
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleRatingSelect(e, '3.5')} />
                <label className='form-check-label' for='flexCheckChecked'>
                  3.5 and above
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleRatingSelect(e, '4')} />
                <label className='form-check-label' for='flexCheckDefault'>
                  4.0 and above
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={(e) => this.handleRatingSelect(e, 'appAssured')} />
                <label className='form-check-label' for='flexCheckChecked'>
                  Trusted
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default FilterComponent;