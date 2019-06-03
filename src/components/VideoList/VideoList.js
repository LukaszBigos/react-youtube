import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import './VideoList.css';

const VideoList = props => {
  const { videos } = props;
  const renderedList = videos.map(video => {
    return (
        <VideoItem key={video.id} video={video} />
    );
  });
  return <div className="list-container">{renderedList}</div>;
};

export default VideoList;
