import React from 'react';
import './VideoItem.css';

const VideoItem = ({video}) => {
  return (
    <div className="video-item">
      <h3>{video.snippet.title}</h3>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
    </div>
  )
}

export default VideoItem;