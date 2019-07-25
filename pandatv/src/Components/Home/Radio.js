import React from 'react';
import styled from 'styled-components';
import './style.css';
import latestRadio from '../../Assets/img/LatestRadio.png';
import uuid from 'uuid';
import { Link } from "react-router-dom";


const RadioSection = () => {
  const FullHeightCon = styled.div `
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`
  return (
    <FullHeightCon className="tomatoBg">
      <div className="row h-100 nogutter no-gutters">
        <div className="col-sm-12 d-md-flex m-0 p-0 justify-content-between align-items-start px-md-3 py-md-3">
          <div className="imgWrapper"><img src={latestRadio} alt="news"key={uuid.v4()}/></div>
          <div style={{zIndex:2}}>
            <Link to={'/radio'} className="moreButton">More Radio >>></Link>
          </div>
        </div>
        <div className="col align-self-center ">
          <div className="d-flex justify-content-center" >
            <iframe id="soundCloudPlayer" scrolling="no"frameBorder="no" allow="autoplay"src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/240233494&color=%23fe4a49&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </div>
          </div>
        <div className="col-sm-12 flex-column align-items-center text-center m-0 p-0 justify-content-center d-flex">
          <h4 className="text-white h3">🤔Will this content be static? Or Dynamic?🤔❓</h4>
          <p className="font-weight-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, maxime. Consectetur ab, porro consequatur quos illo similique natus non praesentium? Non porro deleniti tempora reprehenderit explicabo, architecto necessitatibus reiciendis aliquid.</p>
        </div>
      </div>
    </FullHeightCon>
  )
}

export default RadioSection;