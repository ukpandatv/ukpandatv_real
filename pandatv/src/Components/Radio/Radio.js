import React from 'react';
import uuid from 'uuid';

import styled from 'styled-components';

const Radio = (props) => {
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
        <div className="col-sm-12 radioBg panel justify-content-center align-items-center h-100 d-flex flex-column text-center m-0 p-0">
          <h1 className="text-white">Radio</h1>
          <p></p>
        </div>
      </FullHeightCon>
      <FullHeightCon>
        <div className="d-flex justify-content-center">
          <div className="categories d-flex"style={{"marginTop": "2rem"}}>
              <h3>Where are the radios come from?</h3>
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="categories d-flex"style={{"marginTop": "2rem"}}>
                    {/* render radio list here */}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </FullHeightCon>
    </div>
  )
}

export default Radio;