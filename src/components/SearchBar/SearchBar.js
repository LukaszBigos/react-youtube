import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {

  state = { term: ''}

  onInputChange = (event) => {
    this.setState({ term: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // make sure we call callback
    // from parent component
  }

  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="search-input">Search video</label>
          <input
            type="text"
            id="search-input"
            placeholder="what movie are you looking for?"
            onChange={this.onInputChange}
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
}
