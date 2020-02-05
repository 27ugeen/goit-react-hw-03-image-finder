import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onSetLargeImage }) => (
  <ul className="ImageGallery">
    <ImageGalleryItem images={images} onSetLargeImage={onSetLargeImage} />
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onSetLargeImage: PropTypes.func.isRequired,
};

export default ImageGallery;
