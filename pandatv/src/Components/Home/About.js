import React from 'react';
import styled from 'styled-components';
import Footer from "./Footer.js";


const AboutSection = () => {
  const FullHeightCon = styled.div `
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  `
  return (
    <FullHeightCon >
      <div className="col-sm-12 aboutBg panel justify-content-end align-items-center h-100 d-flex flex-column text-center pt-3 px-3">
        <h3>About Us</h3>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis aspernatur nam rerum blanditiis reprehenderit odit unde doloremque
        facilis magnam, deleniti cupiditate labore dicta dolore libero officiis nihil cumque doloribus explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis aspernatur
        nam rerum blanditiis reprehenderit odit unde doloremque facilis magnam, deleniti cupiditate labore dicta dolore libero officiis nihil cumque doloribus explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis aspernatur nam rerum blanditiis reprehenderit odit unde doloremque facilis magnam, deleniti cupiditate labore dicta dolore libero officiis nihil cumque doloribus explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Omnis aspernatur nam rerum blanditiis reprehenderit odit unde doloremque facilis magnam, deleniti cupiditate labore dicta dolore libero officiis nihil cumque doloribus explicabo!
        </p>
        <Footer ></Footer>
      </div>
    </FullHeightCon>
    )
  }
  export default AboutSection;