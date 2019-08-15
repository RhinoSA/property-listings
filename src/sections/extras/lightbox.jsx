import React, { Component } from "react";
import FsLightbox from "fslightbox-react";
import Menu from "../menu";
import "./styles.css";

const hoverImage = {
  cursor: "pointer",
  marginBottom: 20
};
class GridGallery extends Component {
  state = {
    isVisible: false,
    slide: 0
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  showSlide = slide => {
    this.setState({
      isVisible: !this.state.isVisible,
      slide: slide
    });
  };
  render() {
    return (
      <React.Fragment>
        <FsLightbox
          toggler={this.state.isVisible}
          slide={this.state.slide}
          urls={[
            "../../../assets/images/animals/elephant.jpg",
            "../../../assets/images/animals/lion.jpg",
            "../../../assets/images/animals/giraffe-02.jpg",
            "../../../assets/images/animals/impala-01.jpg",
            "../../../assets/images/animals/white-rhino-01.jpg",
            "../../../assets/images/animals/cheetah.jpg"
          ]}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Menu />
            </div>
            <div className="col-md-9">
              <h1>Lightbox</h1>
              <p>
                For information on how to use Lightbox, see the{" "}
                <a href="https://fslightbox.com" alt="lightbox">
                  documentation
                </a>
                .
              </p>
              <div
                className="card-columns"
                style={{
                  paddingTop: 15,
                  paddingBottom: 25,
                  overflow: "visible"
                }}
              >
                <div className="card" style={hoverImage}>
                  <img
                    className="card-img-top"
                    alt="Elephant"
                    onClick={() => this.showSlide(1)}
                    src="../../../assets/images/animals/elephant.jpg"
                  />
                </div>
                <div className="card" style={hoverImage}>
                  <img
                    className="card-img-top"
                    alt="Lion"
                    onClick={() => this.showSlide(2)}
                    src="../../../assets/images/animals/lion.jpg"
                  />
                </div>
                <div className="card" style={hoverImage}>
                  <img
                    className="card-img-top"
                    alt="Giraffe"
                    onClick={() => this.showSlide(3)}
                    src="../../../assets/images/animals/giraffe-02.jpg"
                  />
                </div>
                <div className="card" style={hoverImage}>
                  <img
                    className="card-img-top"
                    alt="Giraffe"
                    onClick={() => this.showSlide(4)}
                    src="../../../assets/images/animals/impala-01.jpg"
                  />
                </div>
                <div className="card" style={hoverImage}>
                  <img
                    className="card-img-top"
                    alt="Rhino"
                    onClick={() => this.showSlide(5)}
                    src="../../../assets/images/animals/white-rhino-01.jpg"
                  />
                </div>
                <div className="card" style={hoverImage}>
                  <img
                    className="card-img-top"
                    alt="Cheetah"
                    onClick={() => this.showSlide(6)}
                    src="../../../assets/images/animals/cheetah.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GridGallery;
