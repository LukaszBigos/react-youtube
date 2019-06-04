import React from "react";

import "../SearchBar/SearchBar";
import youtube from "../../apis/youtube";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import VideoList from "../VideoList/VideoList";
import VideoDetails from "../VideoDetails/VideoDetails";

class App extends React.Component {
  state = {
    videos: [],
    videoSelected: null
  };

  componentDidMount() {
    this.onTermSubmit('trail bikes 2019');
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ 
      videos: response.data.items,
      videoSelected: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ videoSelected: video });
  };

  render() {
    return (
      <div>
        <h3>Hi from App component</h3>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="video-wrapper">
          <VideoDetails video={this.state.videoSelected} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
