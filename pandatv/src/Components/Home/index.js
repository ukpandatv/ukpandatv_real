import React, { Component } from 'react';
import styled from 'styled-components';
// import ReactPageScroller from "react-page-scroller";
import uuid from 'uuid';
import Video  from '../Home/Llama.mp4';
import './style.css';
import Waterfall from '../../Assets/img/Waterfall.jpg';
import latestNews from '../../Assets/img/LatestNews.png';
import LatestVideos from './LatestVids.js';
import  RadioSection  from './Radio.js';
import AboutSection from './About.js';

class Home extends Component {
  constructor(props)  {
    super(props)
    this.state = {
      "radio" : "",
      "latestNews":[
        {
          "title": "2019 Cross-Straits Youth Economic Forum",
          "date" : "13-06-2019",
          "author": "Administrator"
        },
        {
          "title": "2019 Cross-straits Youth Economic Forum",
          "date" : "13-06-2019",
          "author": "Administrator"
        }
      ],
    }
  }

  render(){

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
    const LatestContainer = styled.div `
      width: 100vw;
      display: flex;
      height: 20vh;
      background-color: #FE4A49;
      padding: 0;
      margin: 0;
    `
    const FullHeightCon = styled.div `
      width: 100vw;
      height: 100vh;
      padding: 0;
      margin: 0;
    `

    return (
      <div style={{margin:0,padding: 0}}>
        <FullHeightCon >
          <Overlay className="row overLay">
            <div className="col-xs-12 w-100 justify-content-between d-flex p-0 m-0">
              <div className="sideBanner "><p>Latest Radio</p></div>
              <h2 className="pageTitle ">Panda TV</h2>
              <div className="">
                <div className="ih-item circle colored effect1 hideClass">
              <a>
                <div className="spinner"></div>
                <div className="img"><img src={Waterfall} alt="img" /></div>
                <div className="info"><div className="info-back"><h3>More Videos</h3></div>
                </div>
              </a>
            </div>
              </div>
            </div>
            <div className="col-xs-12 w-100 p-0 m-0">
              <LatestContainer>
                <div className="col-4 d-flex flex-column justify-content-around">
                  <div className="imgWrapper d-flex"><img src={latestNews} alt="news"key={uuid.v4()}/></div>
                </div>
              <div className="col-8 d-flex flex-column justify-content-around">
                {this.state.latestNews.map((news,i) => {
                  return (
                    <li
                      className="list-unstyled text-white h5"
                      key={uuid.v4()}
                      >{news.title}
                      <br></br>
                      <span className="pr-2 font-weight-bold"key={uuid.v4()}>{news.author}</span>
                      <span className="font-weight-light"key={uuid.v4()}>{news.date}</span>
                    </li> )}
                )}
              </div>
            </LatestContainer>
            </div>
          </Overlay>
          <div className="videoWrapper">
          <div className="videoContainer">
            <video id="background-video" loop muted>
              <source src={Video} type="video/mp4" />
              <source src={Video} type="video/ogg" />
            </video>
          </div>
        </div>
      </FullHeightCon>
        <LatestVideos></LatestVideos>
        <RadioSection></RadioSection>
        <AboutSection></AboutSection>
    </div>
    )
  }
}

export default Home;