import React from 'react';
import './style.css';
import facebookLogo from '../../Assets/icons/Facebook.png';
import wechatLogo from '../../Assets/icons/Wechat.png';
import instagramLogo from '../../Assets/icons/instagram.png';

const Footer = () => {
  return (
        <footer className="tomatoBg"style={{"fontHeight":"70px"}}>
          <div className="row">
            <div className="col-sm-5 justify-content-around d-flex align-items-center">
              <a className="text-white" href="€">Terms and Conditions</a>
              <a className="text-white" href="€">Privacy Policy</a>
              <a className="text-white" href="€">FAQ</a>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-5 d-flex align-items-center justify-content-around">
              <a className="text-white" href="€">2019 Panda TV All right reserved</a>
              <img className="footerIcon"src={facebookLogo} alt="facebook" style={{"width":"25px"}}/>
              <img className="footerIcon"src={instagramLogo} alt="instagram"/>
              <img className="footerIcon"src={wechatLogo} alt="wechat"/>
            </div>
          </div>
        </footer>
  )
}
export default Footer;
