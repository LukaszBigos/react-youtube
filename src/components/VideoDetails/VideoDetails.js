import React from "react";
import "./VideoDetails.css";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-wrapper">
      <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" title={video.snippet.title}></iframe>
      <div className="info-wrapper">
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
