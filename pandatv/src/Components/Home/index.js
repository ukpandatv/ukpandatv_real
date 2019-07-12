import React, { Component } from 'react';
import styled from 'styled-components';
import Video  from '../Home/Llama.mp4';
import './style.css';
import Waterfall from '../../Assets/img/Waterfall.jpg';

class Home extends Component {
  constructor(props)  {
    super(props)
    this.state = {
      
    }
  }

  render(){
    const Overlay = styled.div `
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      left: 0px;
      top: 0px;
      height: 100vh;
      width: 100vw;
      z-index: 2;
      font-size: 36px;
      overflow: hidden;
    `
    return (
      <div>
        <Overlay>
          <div className="sideBanner "><a>Latest Radio</a></div>
          <h2 className="pageTitle ">Panda TV</h2>
          <div className="">
          <div className="ih-item circle colored effect1 hideClass">
              <a>
            <div className="spinner"></div>
            <div className="img">
              <img src={Waterfall} alt="img" /></div>
            <div className="info">
                <div className="info-back">
                  <h3>More Videos</h3>
                </div>
              </div>
          </a>
            </div>
        </div>
        </Overlay>
        <div className="videoContainer">
          <video id="background-video" loop autoPlay>
            <source src={Video} type="video/mp4" />
            <source src={Video} type="video/ogg" />
          </video>
        </div>
      </div>
    )
  }
}

export default Home;