import React, { Component } from "react";
import styled from 'styled-components';
import uuid from 'uuid';



class News extends Component {
  constructor (props){
    super(props)
    this.state = {
      "news" : [
        {
        "imgUrl" : "https://s3.amazonaws.com/gallerist/products/4937/large/simple-nature.jpg?1496302338",
        "script" : "lorem ipsum dolorem dolog anet sobok"
        },
        {
          "imgUrl" : "https://s3.amazonaws.com/gallerist/products/4937/large/simple-nature.jpg?1496302338",
          "script" : "lorem ipsum dolorem dolog anet sobok"
        },
        {
        "imgUrl" : "https://s3.amazonaws.com/gallerist/products/4937/large/simple-nature.jpg?1496302338",
        "script" : "lorem ipsum dolorem dolog anet sobok"
        },,
        ,

        {
        "imgUrl" : "https://s3.amazonaws.com/gallerist/products/4937/large/simple-nature.jpg?1496302338",
        "script" : "lorem ipsum dolorem dolog anet sobok"
        }
    ]
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
          <div className="col-sm-12 newsBg panel justify-content-end align-items-center h-100 d-flex flex-column text-center m-0 p-0">
            <h3>News</h3>
          </div>
        </FullHeightCon>
        <FullHeightCon>
            {this.state.news.map((elem,i) =>
              {
              return (
                <div className="row w-100">
                  <div className="col-md-7 bg-danger d-flex justify-content-center"><img className="img-fluid newsImage"src={elem.imgUrl}/></div>
                  <div className="col-md-5 bg-primary">{elem.script}</div>
                </div>
              )
            })}

        </FullHeightCon>
      </div>
    )
  }
}


export default News;