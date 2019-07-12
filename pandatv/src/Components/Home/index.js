import React, { Component } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import Video  from '../Home/Llama.mp4';
import './style.css';
import Waterfall from '../../Assets/img/Waterfall.jpg';
import latestNews from '../../Assets/img/LatestNews.png';
import latestRadio from '../../Assets/img/LatestRadio.png';
import latestVideo from '../../Assets/img/LatestVideo.png';

class Home extends Component {
  constructor(props)  {
    super(props)
    this.state = {
      'latestNews':[
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
      width: 100%;
      display: flex;
      height: 25vh;
      background-color: tomato;
    `
    const FullHeightCon = styled.div `
      width: 100%;
      height: 100vh;
    `


    return (
      <div>
        <Overlay className="row overLay">
          <div className="col-xs-12 w-100 justify-content-between d-flex">
            <div className="sideBanner "><p>Latest Radio</p></div>
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
          </div>
          <div className="col-xs-12 w-100">
          <LatestContainer>
            <div className="col-4 d-flex flex-column justify-content-around">
              <div className="imgWrapper"><img src={latestNews} alt="news"key={uuid.v4()}/></div>
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
          <video id="background-video" loop  muted>
            <source src={Video} type="video/mp4" />
            <source src={Video} type="video/ogg" />
          </video>
        </div>
       </div>
       {/* second section */}
        <FullHeightCon className="position-relative">
          <div className="videoContainer">
              <video id="background-video" loop  muted>
                <source src={Video} type="video/mp4" />
                <source src={Video} type="video/ogg" />
              </video>
            </div>
          <Overlay className="row overLay">
          <div className="col-5 d-flex flex-column justify-content-around"style={{zIndex:2,backgroundColor:"#a6abb124"}}>
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
                    <a href={video.url}key={uuid.v4()}>More video >>></a>
                  </FullHeightCon>
                )
              })}
          </div>
        </Overlay>
        </FullHeightCon>
      </div>
    )
  }
}

export default Home;