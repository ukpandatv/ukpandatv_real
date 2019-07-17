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
      "categories": ["food","travel","living","europe","london","china"]
    }
  }
  componentDidMount(){
    this.callVideos();
  }
  callVideos = () => {
    // save 20 items in state
    fetch('https://jsonplaceholder.typicode.com/photos')
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
          <div className="col-sm-12 videoBg panel justify-content-end align-items-center h-100 d-flex flex-column text-center m-0 p-0">
            <h3>About Us</h3>
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
              {
                this.state.videos.map((video,i) => {
                  return (
                    <div className="videoCard d-flex flex-column col-3">
                      <img src={video.thumbnailUrl}></img>
                      <p className="videoTitle">{video.title}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </FullHeightCon>
      </div>
    )
  }
}

export default Videos ;