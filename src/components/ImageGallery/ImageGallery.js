import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onSetLargeImage }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} onSetLargeImage={onSetLargeImage} />
    </ul>
  );
};

export default ImageGallery;
