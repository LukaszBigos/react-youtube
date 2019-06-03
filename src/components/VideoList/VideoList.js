import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import './VideoList.css';

const VideoList = props => {
  const { videos, onVideoSelect } = props;
  const renderedList = videos.map(video => {
    return (
        <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    );
  });
  return <div className="list-container">{renderedList}</div>;
};

export default VideoList;
