import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Spinner from './Spinner';
import Notification from './Notification';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import imagesApi from '../services/imagesApi';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: '',
    searchQuery: '',
    page: 1,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevImages = prevState.images;
    const nextImages = this.state.images;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }

    if (prevImages !== nextImages) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });
    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      images: [],
      searchQuery: query,
      page: 1,
    });
  };

  setLargeImage = url => {
    this.setState({ largeImage: url });
  };

  closeModal = () => {
    this.setState({ largeImage: '' });
  };

  render() {
    const { images, loading, error, largeImage } = this.state;
    return (
      <>
        <div className="App">
          <Searchbar onHandleSubmit={this.handleSearchFormSubmit} />
          {error && <Notification message={error} />}
          {images.length > 0 && (
            <ImageGallery
              images={images}
              onSetLargeImage={this.setLargeImage}
            />
          )}
          {loading && <Spinner />}
          {images.length > 0 && !loading && (
            <Button onLoadMore={this.fetchImages} />
          )}
        </div>
        {largeImage && (
          <Modal onClose={this.closeModal}>
            <button
              type="button"
              className="close"
              onClick={this.closeModal}
            ></button>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
