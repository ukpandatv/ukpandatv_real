import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from './Home/Footer.js';
import uuid from 'uuid';
import SocialMedia from './socialmedia.js';
import facebookLogo from '../Assets/icons/Facebook.png';
import wechatLogo from '../Assets/icons/Wechat.png';
import instagramLogo from '../Assets/icons/instagram.png';
import whatsappLogo from '../Assets/icons/Whatsapp.png';


class Player extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      'isVideoClicked' : false,
    }
  }
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
          <div className={`col-sm-12 ${this.state.isVideoClicked ? `videoBg` : `radioBg`} justify-content-center align-items-center h-100 d-flex flex-column text-center m-0 p-0`}>
            <h1 className="text-white pageTitle">
              {this.state.isVideoClicked ? 'Video' : 'Radio'}
            </h1>
          </div>
        </FullHeightCon>
        <div className="d-flex flex-column justify-content-center align-items-center m-0 p-0">
          <h3>Video Title</h3>
          <h5>Video author</h5>
          <h5>Video Date</h5>
          <p>Video Description</p>
          <div className="socialMediaBox">
            <h3>Share it</h3>
            <SocialMedia></SocialMedia>
          </div>
        </div>
      </div>
    )
  }
}

export default Player;