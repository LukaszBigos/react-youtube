import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-container">
        <form>
          <label htmlFor="search-input">Search video</label>
          <input
            type="text"
            id="search-input"
            placeholder="what movie are you looking for?"
          />
        </form>
      </div>
    );
  }
}
