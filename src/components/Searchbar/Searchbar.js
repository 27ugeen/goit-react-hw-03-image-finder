import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  static defaultProps = {
    inputValue: '',
  };

  static propTypes = {
    inputValue: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputValue: this.props.inputValue,
  };

  handleChange = ({ target }) => {
    this.setState({
      inputValue: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}
