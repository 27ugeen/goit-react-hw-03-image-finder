import React from 'react';

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

export default ImageGalleryItem;
