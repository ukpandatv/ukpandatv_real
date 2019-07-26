import React, { Component } from 'react';
import styled from 'react';
import uuid from 'uuid';


class Player extends Component  {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount(){console.log(this.props)}
  render() {
    const FullHeightCon = styled.div `
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    overflow: scroll;
  `
    return (
      <div>
        <FullHeightCon>
          <div className={`col-sm-12 panel ${this.props.isVideoClicked ? `videoBg` : `radioBg`} justify-content-center align-items-center h-100 d-flex flex-column text-center m-0 p-0`}>
            <h1 className="text-white pageTitle">
              {this.props.isVideoClicked ? 'Video' : 'Radio'}
            </h1>
          </div>
        </FullHeightCon>
        <FullHeightCon>
          <div className="embed-responsive embed-responsive-16by9">
            <video controls type="video/mp4">
              <source src={} key={uuid.v4()} type="video/ogg"></source>
            </video>
          </div>
        </FullHeightCon>
      </div>
    )
  }
}

export default Player;