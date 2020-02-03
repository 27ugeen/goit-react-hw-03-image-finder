import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Spinner from './Spinner';
import Notification from './Notification';
import ImageGallery from './ImageGallery';
import Button from './Button';
import imagesApi from '../services/imagesApi';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
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
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      images: [],
      searchQuery: query,
      page: 1,
    });
  };

  render() {
    const { images, loading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />

        {error && <Notification message={error} />}

        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <Spinner />}

        {images.length > 0 && !loading && (
          <Button onLoadMore={this.fetchImages} />
        )}
      </>
    );
  }
}
