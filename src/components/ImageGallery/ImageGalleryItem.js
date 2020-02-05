import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, onSetLargeImage }) => (
  <>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <li
        key={id}
        className="ImageGalleryItem"
        onClick={() => onSetLargeImage(largeImageURL)}
      >
        <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
      </li>
    ))}
  </>
);

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  onSetLargeImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
