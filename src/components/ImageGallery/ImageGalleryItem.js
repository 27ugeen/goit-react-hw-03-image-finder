import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onSetLargeImage }) => (
  <li
    className="ImageGalleryItem"
    onClick={() => onSetLargeImage(largeImageURL)}
  >
    <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onSetLargeImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
