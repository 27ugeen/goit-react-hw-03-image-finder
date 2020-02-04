import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => (
  <div className="Spinner">
    <Loader type="Bars" color="#3f51b5" height={50} width={180} />
  </div>
);

export default Spinner;
