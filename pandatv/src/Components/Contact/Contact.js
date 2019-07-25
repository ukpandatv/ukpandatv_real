import React from 'react';
import styled from 'styled-components';
import GateImg from '../../Assets/img/paul-gilmore-iMtJT_NEWp8-unsplash.jpg';
import instaredlogo from '../../Assets/icons/instaredlogo.png';
import redfacelogo from '../../Assets/icons/redfacebooklogo.png';

const Contact = () => {
  const FullHeightCon = styled.div `
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`
  return (
    <div>
      <FullHeightCon>
        <div className="col-sm-12 contactBg panel justify-content-center align-items-center h-100 d-flex flex-column text-center p-3">
          <h1 className="text-white pageTitle">Contact</h1>
        </div>
      </FullHeightCon>
      <FullHeightCon className="row d-flex m-0 p-0 h-100">
        <div className="col-sm-7 d-flex flex-column justify-content-center">
          <div>
            <div className="d-flex flex-column p-4"style={{}}>
              <h5>LONDON OFFICE</h5>
              <a className="p-md-2 nounderline text-secondary"href=""><span className="tomatoText pr-md-5 pr-2">A:</span> HOLBORN, LONDON WC1X</a>
              <a className="p-md-2 nounderline text-secondary"href=""><span className="tomatoText pr-md-5 pr-2">T:</span>+44 1234 567890</a>
              <a className="p-md-2 nounderline text-secondary"href=""><span className="tomatoText pr-md-5 pr-2">E:</span> INFO@UKPANDATV.COM</a>
            </div>
            <div className="d-flex flex-column p-4">
              <h5 className="tomatoText">FOLLOW US ON</h5>
                <div className="p-md-2 mb-2 d-flex align-items-center contactCard">
                <div className="pr-md-5 pr-2 d-flex align-items-center align-content-center flex-column">
                  <img className="img-fluid"src={redfacelogo} alt=""width="50px" />
                </div>
                <a href="#">#ukpandatv</a>
              </div>
                <div className="p-md-2 d-flex mb-2 align-items-center contactCard">
                  <div className="pr-md-5 pr-2">
                    <img className="img-fluid"src={instaredlogo} alt=""width="50px" />
                  </div>
                  <a href="#">#ukpandatv</a>
                </div>
                <div className="p-md-2 d-flex mb-2 align-items-center contactCard">
                  <div className="pr-md-5 pr-2">
                    <img className="img-fluid"src={redfacelogo} alt=""width="50px"/>
                  </div>
                  <a href="#">#ukpandatv</a>
                </div>
            </div>
          </div>
        </div>
        <div className="col-sm-5 align-items-center justify-content-center d-flex">
      <div className="p-2">
        <img className="img-fluid contactBanner"src={GateImg} alt="chinagate" />
      </div>
    </div>
      </FullHeightCon>
    </div>
  )
}


export default Contact;