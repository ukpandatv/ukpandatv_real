import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import latestVideo from '../../Assets/img/LatestVideo.png';
import Video  from '../Home/Llama.mp4';


class LatestVideos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'latestVideos': [
        {
          "title": "traveling in china winter horse riding",
          "date" : "13-06-2019 Thursday",
          "author": "In travelling",
          "description": "Lorem ipsum dolor sit amet, consectetuer adispicing elit sed diam nonummy nibh euismod",
          "url" : "www.google.com"
        }
      ]
    }
  }

  render() {
    const Overlay = styled.div `
      position: relative;
      display: flex;
      align-items: flex-end;
      left: 0px;
      top: 0px;
      height: 100vh;
      width: 100vw;
      z-index: 2;
      font-size: 36px;
      overflow: hidden;
      margin: 0;
      padding: 0;
    `
    const FullHeightCon = styled.div `
      width: 100vw;
      height: 100vh;
      padding: 0;
      margin: 0;
    `

    return (
      <FullHeightCon className="position-relative">
        <div className="videoContainer">
          <video id="background-video" loop muted>
            <source src={Video} type="video/mp4" />
            <source src={Video} type="video/ogg" />
          </video>
        </div>
        <Overlay className="row overLay">
          <div className="col-5 d-flex flex-column justify-content-around "style={{minWidth:0,zIndex:2,backgroundColor:"#a6abb124"}}>
            <div className="imgWrapper pt-2"><img src={latestVideo} alt="videos"key={uuid.v4()}/></div>
              {this.state.latestVideos.map((video, i) => {
                return (
                  <FullHeightCon className="d-flex flex-column justify-content-around position-relative">
                    <div className="d-flex flex-column pl-md-4">
                      <p className="text-capitalize videoTitle"key={uuid.v4()}>{video.title}</p>
                      <span className="pr-2 font-weight-bold"key={uuid.v4()} >{video.author}</span>
                      <span className="font-weight-light"key={uuid.v4()}>{video.date}</span>
                    </div>
                    <p className="videoDescription pl-md-4"key={uuid.v4()} >{video.description}</p>
                    <div><a className="moreButton" href={video.url}key={uuid.v4()}>More video >>></a></div>
                  </FullHeightCon>
                )
              })}
          </div>
        </Overlay>
      </FullHeightCon>
    )
  }
}


// typechecking
LatestVideos.propTypes = {
  latestVideos : PropTypes.array,
}


export default LatestVideos;