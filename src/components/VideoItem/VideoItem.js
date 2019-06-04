import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
      <h3>{video.snippet.title}</h3>
    </div>
  )
}

export default VideoItem;