/**
 * Copyright (C) NextGen Technology Solutions, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Written by NextGen <info@ngstek.com>, Jan 2020
 */

import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import { t } from 'ttag';
import Modal from 'react-modal';

import 'react-image-crop/dist/ReactCrop.css';

class CropModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCrop: false,
      src: '',
      imageFileUrl: '',
      crop: { unit: '%', width: 50, height: 50 },
      imageFile: ''
    };
  }

  handleProfile = (event) => {
    const fileType = event.target.files[0].type.replace(/\/.+/g, "$'");
    const file = event.target.files[0];
    if (fileType == 'image') {
      this.setState({ showCrop: true, imageFileUrl: URL.createObjectURL(file)});
    }
  }

  onImageLoaded = (image) => {
    this.imageRef = image;
  }

  onCropChange = (crop) => {
    this.setState({ crop });
  }

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  }
  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef, crop, 'newFile.jpeg'
      );
      const imageFile = await fetch(croppedImageUrl).then(r => r.blob()).then(blobFile => new File([blobFile], 'newFile.jpeg', { type: blobFile.type }));
      this.setState({ imageFile, showCrop: false });
      this.props.returnData({imageFile, imageUrl: croppedImageUrl});
    }
  }

  getCroppedImg(image, crop, file) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    canvas.name = file.name;
    canvas.type = file.type;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          // consol/e.error('Canvas is empty');
          return;
        }
        blob.name = file.name;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      });
    });
  }


  render() {    
      
    return (
      <>
        <input type='file' 
          accept='image/*' style={{ display: 'none' }}
          onChange={this.handleProfile} 
        />
        <div className='cam-icon'>
          <label htmlFor={this.props.id} id={this.props.id}>
            <i className='uil-camera' style={{fontSize: '20px', lineHeight: '27px'}}></i>
          </label>
        </div>

        {/* <Modal
          aria-hidden={false}
          isOpen={this.state.showCrop}
          onRequestClose={() => this.setState({ showCrop: false })}
        >
          <div className='card border-white uk-animation-slide-top-big'>
            <div className='card-header'>
              <div className='uk-flex uk-flex-between'>
                <h4 className='mb-0'>{this.props.title}</h4>
                <a onClick={() => this.setState({ showCrop: !this.state.showCrop })} className=''> <i style={{ fontSize: 15, color: '#FF5722' }} className='fa fa-times' /></a>
              </div>
            </div>
            <div className='card-body'>
              <div>
                <ReactCrop
                  src={this.state.src}
                  crop={this.state.crop}
                  ruleOfThirds
                  onImageLoaded={this.onImageLoaded}
                  onChange={this.onCropChange} />
              </div>
            </div>
            <div className='card-footer bg-white border border-0'>
              <div className='d-flex justify-content-center'>
                <button className='button small danger' onClick={() => this.onCropComplete(this.state.crop)}> Crop </button>
              </div>
            </div>
          </div>
        </Modal> */}
      </>
    );
  }
}
export default CropModal;
 