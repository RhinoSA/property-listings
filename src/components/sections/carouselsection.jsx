import React, { Component } from "react";

class CarouselSection extends Component {
  render() {
    return (
      <div className="section-wrap">
        <span id="spy-4" className="anchor" />
        <h2>Carousel</h2>
        <p>
          To use the Bootstrap carousel module you need to first of all import
          the module:
        </p>
        <p className="alert alert-secondary">
          import Carousel from "../modules/carousel";
        </p>
        <p>Then inside the page include the following to create the module:</p>
        <p className="alert alert-secondary">
          &lt;Carousel
          <br />
          &nbsp;&nbsp;carouselID=&#123;this.state.carouselID&#125;
          <br />
          &nbsp;&nbsp;carousel=&#123;this.state.carousel&#125;
          <br />
          &nbsp;&nbsp;carouselHeight=&#123;this.state.carouselHeight&#125;
          <br />
          &nbsp;&nbsp;interval=&#123;this.state.interval&#125;
          <br />
          /&gt;
        </p>
        <p>
          Then create a componentDidMount() method to ensure that the carousel
          initiates when the page is loaded.
        </p>
        <p className="alert alert-secondary">
          componentDidMount() &#123;
          <br />
          &nbsp;&nbsp;// Initiate Carousel on page mount
          <br />
          &nbsp;&nbsp;$("#home-carousel").carousel("cycle");
          <br />
          &#125;
        </p>
        <p>
          You will also need to include jQuery in your app by doing the
          following:
        </p>
        <p className="alert alert-secondary">import $ from "jquery";</p>
        <p>
          Also include jQuery just before the &lt;/body&gt; tag on your
          index.html file as follows:
        </p>
        <p className="alert alert-secondary">
          &lt;script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"&gt;&lt;/script&gt;
        </p>
        <p>
          Then finally, you need to add the data inside your state that
          populates the carousel module with the data:
        </p>
        <p className="alert alert-secondary">
          constructor() &#123;
          <br />
          &nbsp;&nbsp;super();
          <br />
          &nbsp;&nbsp;this.state = &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;carouselID: "home-carousel",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;carouselHeight: null,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;carousel: [<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: 1,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageUrl:
          "../assets/images/banner-01.jpg",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt: "Image One",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "carousel-item
          active",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;caption: "This is a
          carousel module for React"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: 2,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageUrl:
          "../assets/images/banner-02.jpg",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt: "Image One",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class:
          "carousel-item",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;caption: "You can
          include it on any page you want"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: 3,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageUrl:
          "../assets/images/banner-03.jpg",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt: "Image One",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class:
          "carousel-item",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;caption: "It can
          display different images on different pages"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;],
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;interval: 2<br />
          &nbsp;&nbsp;&#125;;
          <br />
          &#125;
        </p>
        <p>
          For more information you can view the{" "}
          <a
            href="https://getbootstrap.com/docs/4.0/components/carousel"
            target="boot-carousel"
          >
            documentation
          </a>{" "}
          on the Bootstrap website.
        </p>
      </div>
    );
  }
}

export default CarouselSection;
