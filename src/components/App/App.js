import React from "react";

import "../SearchBar/SearchBar";
import youtube from '../../apis/youtube'
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import VideoList from '../VideoList/VideoList';

class App extends React.Component {

  state = { 
    videos: []
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search',{
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  }

  render() {
    return (
      <div>
        <h3>Hi from App component</h3>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
