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
          "title" : "Traveling in China Winter horse riding",
          "date" :  "13-06-2019 Thursday",
          "author":  "In Travelling",
          "article": "Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd"
        },
        {
          "imgUrl" : "https://s3.amazonaws.com/gallerist/products/4937/large/simple-nature.jpg?1496302338",
          "title" : "Traveling in China Winter horse riding",
          "date" :  "13-06-2019 Thursday",
          "author":  "In Travelling",
          "article": "Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd"
        },
        {
          "imgUrl" : "https://s3.amazonaws.com/gallerist/products/4937/large/simple-nature.jpg?1496302338",
          "title" : "Traveling in China Winter horse riding",
          "date" :  "13-06-2019 Thursday",
          "author":  "In Travelling",
          "article": "Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd"
          },
        {
          "imgUrl" : `https://s3.amazonaws.com/gallerist/products/4937/large/simple-nature.jpg?1496302338`,
          "title" : "Traveling in China Winter horse riding",
          "date" :  "13-06-2019 Thursday",
          "author":  "In Travelling",
          "article":
          "Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd Lorem ipsum dolorem dolog anet sobok bla bla bla bla bla dolorem pfasdasdasdasd"
        }
    ],
    "direction": "flex-row-reverse",
    }
  }

  render() {
    const FullHeightCon = styled.div `
      width: 100vw;
      height: 100vh;
      padding: 0;
      margin: 0;
      overflow: auto;
    `
    return (
      <div>
        <FullHeightCon>
          <div className="col-sm-12 newsBg panel justify-content-center align-items-center h-100 d-flex flex-column text-center m-0 p-0">
            <p className="text-white pageTitle text-uppercase">News</p>
          </div>
        </FullHeightCon>
        <FullHeightCon className="d-flex flex-column">
            {this.state.news.map((elem,i) => {
              return (
                <div key={i} className={`newsWrapper position-relative text-left ${i % 2 ? 'row-reverse-margin':'a'}`}>
                  <div className="col-md-7 newImageWrapper d-flex justify-content-end align-items-center">
                    <img className="img-fluid newsImage"src={elem.imgUrl}/>
                  </div>
                  <div className="col-md-5 d-flex align-items-center"style={{"zIndex":"2"}}>
                    <div className={`newsDescription ${i % 2 ? 'left-margin': ''}`}>
                      <p className="tomatoText newsTitle">{elem.title}</p>
                        <p className="tomatoText dateText">{elem.author}{elem.date}</p>
                      <p>{elem.article}</p>
                    </div>
                  </div>
                </div>
                )}
            )}
        </FullHeightCon>
      </div>
    )
  }
}


export default News;