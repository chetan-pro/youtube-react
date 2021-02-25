import React, { Component } from "react";
import "./style.css";
import data from "./data";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cate: null,
    };
  }
  cato = (id) => {
    this.setState({ cate: id });
  };
  setAll = () => {
    this.setState({ cate: null });
  };
  work = "";
  render() {
    const category = [
      "Comedy",
      "Movies",
      "Action",
      "Drama",
      "Romance",
      "Thriller",
      "Suspense",
      "Songs",
      "Roasting",
      "Prank",
      "Web Series",
      "Alt Balaji",
      "Google",
      "Amazon",
      "Job",
    ];
    let main;
    main = (
      <div className="videos">
        <section className="video-section">
          {data.map((video,id) => (
            <article key={id} className="video-container">
              <a href="#" className="thumbnail" data-duration={video.length}>
                {/* <a href="#" className="thumbnail" data-duration={video.length}> */}
                {/* <a href="#" className="thumbnail" data-duration={video.length}> */}
                <img className="thumbnail-image" src={video.thumbnail} />
              </a>
              <div className="video-bottom-section">
                <a href="#">
                  <img className="channel-icon" src={video.channel_icon} />
                </a>
                <div className="video-details">
                  <a href="#" className="video-title">
                    {video.title}
                  </a>
                  <div className="video-review">
                  <a href="#" className="video-channel-name">
                    {video.channel_name}
                  </a>
                  <div className="video-metadata">
                    <span>{video.views} views</span> •{" "}
                    <span>{video.time} ago</span>
                  </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
        <section className="video-section">
          <h2 className="video-section-title">
            Latest 
            <button className="video-section-title-close">&times;</button>
          </h2>
          {data.map((video,id) => (
            <article key={id} className="video-container">
              <a href="#" className="thumbnail" data-duration={video.length}>
                {/* <a href="#" className="thumbnail" data-duration={video.length}> */}
                {/* <a href="#" className="thumbnail" data-duration={video.length}> */}
                <img className="thumbnail-image" src={video.thumbnail} />
              </a>
              <div className="video-bottom-section">
                <a href="#">
                  <img className="channel-icon" src={video.channel_icon} />
                </a>
                <div className="video-details">
                  <a href="#" className="video-title">
                    {video.title}
                  </a>
                  <div className="video-review">
                  <a href="#" className="video-channel-name">
                    {video.channel_name}
                  </a>
                  <div className="video-metadata">
                    <span>{video.views} views</span> •{" "}
                    <span>{video.time} ago</span>
                  </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    );

    let fil = [];
    if (this.state.cate >= 0) {
      fil = data.filter((el) => {
        return el.category === category[this.state.cate];
      });
    }
    if (fil.length > 0 ) {
      main = (
        <div className="videos">
          <section className="video-section">
            {fil.map((video, id) => (
              <article key={id} className="video-container">
                <a href="#" className="thumbnail" data-duration={video.length}>
                  {/* <a href="#" className="thumbnail" data-duration={video.length}> */}
                  {/* <a href="#" className="thumbnail" data-duration={video.length}> */}
                  <img className="thumbnail-image" src={video.thumbnail} />
                </a>
                <div className="video-bottom-section">
                  <a href="#">
                    <img className="channel-icon" src={video.channel_icon} />
                  </a>
                  <div className="video-details">
                    <a href="#" className="video-title">
                      {video.title}
                    </a>
                    <a href="#" className="video-channel-name">
                      {video.channel_name}
                    </a>
                    <div className="video-metadata">
                      <span>{video.views} views</span> •{" "}
                      <span>{video.time} ago</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      );
    }
    console.log(this.props.value);
    if (this.props.value) {
      main = (
        <div className="videos">
          <section className="video-section">
            {this.props.fil.map((video, id) => (
              <article key={id} className="video-container">
                <a href="#" className="thumbnail" data-duration={video.length}>
                  {/* <a href="#" className="thumbnail" data-duration={video.length}> */}
                  {/* <a href="#" className="thumbnail" data-duration={video.length}> */}
                  <img className="thumbnail-image" src={video.thumbnail} />
                </a>
                <div className="video-bottom-section">
                  <a href="#">
                    <img className="channel-icon" src={video.channel_icon} />
                  </a>
                  <div className="video-details">
                    <a href="#" className="video-title">
                      {video.title}
                    </a>
                    <a href="#" className="video-channel-name">
                      {video.channel_name}
                    </a>
                    <div className="video-metadata">
                      <span>{video.views} views</span> •{" "}
                      <span>{video.time} ago</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      );
    }

    const cato = (
      <div className="categories">
        <section className="category-section">
          <button className="category active" onClick={this.setAll}>
            All
          </button>
          {category.map((category, id) => (
            <button className="category" key={id} onClick={() => this.cato(id)}>
              {category}
            </button>
          ))}
        </section>
      </div>
    );

    return (
      <div className="maindiv">
        {cato}
        {main}
      </div>
    );
  }
}

export default Main;
