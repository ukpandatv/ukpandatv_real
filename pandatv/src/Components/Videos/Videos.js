import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

class Videos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "videos" : [],
      "isLoading" : true,
      "error" : "",
      "categories": ["food","travel","living","europe","london","china"],
      "isVideoBg": false,

    }
    this.API_KEY = process.env.REACT_APP_WEATHER_API_KEY

  }
  componentDidMount(){
    this.callVideos();
  }
  callVideos = () => {
    // save 20 items in state
    fetch(`http://chino.ibasezero.com:47128/api/get/video/1${this.API_KEY}`,)
      .then(response => response.json())
      .then(data => {this.setState({videos : data.slice(0,20), isLoading: false })})
      .catch(error => this.setState({error,isLoading: false}))
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
          <div className="col-sm-12 videoBg panel justify-content-center align-items-center h-100 d-flex flex-column text-center m-0 p-0">
            <h1 className="text-white pageTitle">Videos</h1>
            <p></p>
          </div>
        </FullHeightCon>
        <FullHeightCon>
          <div className="">
            <div className="d-flex justify-content-center">
              <div className="categories d-flex"style={{"marginTop": "2rem"}}>
                {this.state.categories.map((category,i) =>
                  {
                    return (<a key={uuid.v4()}className="tomatoText category text-capitalize"value={category}>{category}</a>)
                  })
                }
              </div>
            </div>
            <div className="collection d-flex row p-3">
              { this.state.videos.map((video,i) => {
                  return (
                    <div className="col-md-4" key={uuid.v4()}>
                      <div className="card m-2">
                        <div className="card-image">
                          <div className="embed-responsive embed-responsive-16by9">
                            <video controls poster={video.thumbnailUrl} type="video/mp4">
                              <source src={video.thumbnailUrl} key={uuid.v4()} type="video/ogg"></source>
                            </video>
                            {/* <iframe width={"560" }height={"315"}src={video.thumbnailUrl}frameBorder="0"allowfullscreen></iframe> */}
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-title text-center">
                            <h5 className="pt-2 tomatoText">{video.title.slice(0,20)}</h5>
                            <p className="smallClass tomatoText">Not sure about this content</p>
                          </div>
                        </div>
                      </div>
                    </div>)})
              }
            </div>
          </div>
        </FullHeightCon>
      </div>
    )
  }
}

export default Videos ;