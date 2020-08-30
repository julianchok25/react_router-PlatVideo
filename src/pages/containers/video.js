import React, { Component } from "react";
import VideoPlayer from "../../player/containers/video-player";
import { connect } from "react-redux";
import NotFound from "../components/notFound";

function Video(props) {
  if (props.existsId) {
    return <VideoPlayer id={props.id} />;
  }
  return <NotFound />;
}

function mapStateToProps(state, props) {
  const id = props.match.params.id;
  return {
    existsId: state.get("data").get("entities").get("media").has(id),
    id: id,
  };
}

export default connect(mapStateToProps)(Video);
