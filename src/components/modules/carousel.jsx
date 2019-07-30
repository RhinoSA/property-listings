import React, { Component } from "react";

class Carousel extends Component {
  render() {
    let carousel = this.props.carousel;
    const carouselHref = "#" + this.props.carouselID;
    return (
      <div
        id={this.props.carouselID}
        className="carousel slide carousel-fade"
        data-ride="carousel"
        style={{ height: this.props.carouselHeight, backgroundColor: "#ccc" }}
      >
        <div className="carousel-inner text-center">
          {carousel.map(slides => (
            <div className={slides.class} key={slides.id}>
              <img
                src={slides.imageUrl}
                className="img-fluid"
                alt={slides.alt}
              />
              <div className="carousel-caption d-none d-md-block">
                <p>{slides.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href={carouselHref}
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href={carouselHref}
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
