import React from "react";

import "../SearchBar/SearchBar";
import youtube from "../../apis/youtube";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import VideoList from "../VideoList/VideoList";
import VideoDetails from '../VideoDetails/VideoDetails';

class App extends React.Component {
  state = {
    videos: [],
    videoSelected: null
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
   this.setState({videoSelected: video});
  };

  render() {
    return (
      <div>
        <h3>Hi from App component</h3>
        <VideoDetails video={this.state.videoSelected}/>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
