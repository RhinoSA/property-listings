import React, { Component } from "react";
import $ from "jquery";
import { FaAngleRight, FaAngleLeft, FaInfo } from "react-icons/fa";
import LandscapesAlive from "./portfolio/landscapes-alive.jpg";
import TaylorWallace from "./portfolio/taylor-wallace.jpg";
import WildAfrica from "./portfolio/wild-africa-foundation.jpg";
import SamClark from "./portfolio/sam-clark.jpg";
import Millstone from "./portfolio/millstone-pottery.jpg";
import WalkingLions from "./portfolio/walking-for-lions.jpg";
import WalkingLions02 from "./portfolio/walking-for-lions-02.jpg";
import FatPlants from "./portfolio/fat-plants.jpg";
import RikkisTaxi from "./portfolio/rikkis-taxi.jpg";
import Landlord from "./portfolio/e-landlord.jpg";
import MegaBond from "./portfolio/mega-bond.jpg";
import Sekunjalo from "./portfolio/sekunjalo.jpg";
import Gijima01 from "./portfolio/gijima-01.jpg";
import Gijima02 from "./portfolio/gijima-02.jpg";
import EasterGrabbit from "./portfolio/easter-grabbit.jpg";
import ThreeShips01 from "./portfolio/three-ships-01.jpg";
import ThreeShips02 from "./portfolio/three-ships-02.jpg";
import Farhills01 from "./portfolio/farhills-01.jpg";
import Farhills02 from "./portfolio/farhills-02.jpg";
import Farhills03 from "./portfolio/farhills-03.jpg";
import HermanusRiver01 from "./portfolio/hermanus-river-01.jpg";
import HermanusRiver02 from "./portfolio/hermanus-river-02.jpg";
import HermanusRiver03 from "./portfolio/hermanus-river-03.jpg";
import HermanusRiver04 from "./portfolio/hermanus-river-04.jpg";
import GordonsGin from "./portfolio/gordons-gin.jpg";
import Santam from "./portfolio/santam.jpg";
import Riverbelle from "./portfolio/riverbelle-casino-01.jpg";
import FourByFour01 from "./portfolio/4x4-01.jpg";
import FourByFour02 from "./portfolio/4x4-02.jpg";
import PlayingForKeeps from "./portfolio/playing-for-keeps.jpg";
import XWing from "./portfolio/x-wing.jpg";
import Stapeliad from "./portfolio/stapeliad.jpg";
import Packaging from "./portfolio/packaging.jpg";
import Shirts from "./portfolio/shirts.jpg";
import Oxpeckers from "./portfolio/oxpeckers.jpg";

class Portfolio extends Component {
  state = {
    totalImages: 34
  };
  componentDidMount() {
    $("#portfolio").carousel({ ride: true });
  }
  render() {
    return (
      <div className={this.props.portfolioClass}>
        <div className="portfolio-inner">
          <h1 className="heading-section">Portfolio</h1>
          <div className="info-section">
            This is a gallery of some of my work that I have done to give you an
            idea of what it is I can do.
          </div>

          <div className="carousel-portfolio-wrap">
            <div
              id="portfolio"
              className="carousel slide carousel-fade"
              data-ride="carousel"
              data-interval="false"
            >
              <ol className="carousel-indicators">
                <li data-target="#portfolio" data-slide-to="0" className="active">
                  1/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="1">
                  2/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="2">
                  3/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="3">
                  4/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="4">
                  5/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="5">
                  6/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="6">
                  7/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="7">
                  8/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="8">
                  9/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="9">
                  10/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="10">
                  11/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="11">
                  12/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="12">
                  13/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="13">
                  14/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="14">
                  15/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="15">
                  16/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="16">
                  17/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="17">
                  18/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="18">
                  19/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="19">
                  20/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="20">
                  21/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="21">
                  22/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="22">
                  23/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="23">
                  24/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="24">
                  25/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="25">
                  26/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="26">
                  27/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="27">
                  28/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="28">
                  29/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="29">
                  30/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="30">
                  31/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="31">
                  32/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="32">
                  33/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="33">
                  34/{this.state.totalImages}
                </li>
                <li data-target="#portfolio" data-slide-to="34">
                  35/{this.state.totalImages}
                </li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-mask"></div>
                <div className="carousel-item active">
                  <img src={LandscapesAlive} alt="Landscapes Alive" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Logo design for Landscapes Alive - Wholesale &amp; Retail
                      Nursery
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={TaylorWallace} alt="Taylor Wallace" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Logo design for Taylor Wallace</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={WildAfrica} alt="Wild Africa Foundation" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Logo design for Wild Africa Foundation</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={SamClark} alt="Sam Clark" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Icon design for Sam Clark photographic safaris</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Millstone} alt="Millstone Pottery" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Logo design for Millstone Pottery</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={WalkingLions} alt="Walking for Lions" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Logo icon design for Walking for Lions</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={WalkingLions02} alt="Walking for Lions" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Logo design for a Walking for Lions project</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={FatPlants} alt="Fat Plants" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Logo design for a plant information website</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={RikkisTaxi} alt="Rikkis Taxi" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Illustration of a taxi for Rikkis, a taxi company based in
                      Cape Town
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Landlord} alt="E-Landlord" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Logo design for E-landlord, an online property letting
                      service
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={MegaBond} alt="Mega-Bond" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Packaging design and promotional material for Mega-Bond
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Sekunjalo} alt="Sekunjalo Health Care" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Logo and business card design for Sekunjalo Health Care
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Gijima01} alt="Gijima" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Brochure design for Gijima Energy Bar, a Bokomo product
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Gijima02} alt="Gijima" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Brochure design for Gijima Energy Bar, a Bokomo product
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={EasterGrabbit} alt="Easter Grabbit" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Point-of-sale easter promotion "product dumpbin"</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={ThreeShips01} alt="Three Ships" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Information brochure for a Three Ships whisky sales
                      representative's conference
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={ThreeShips02} alt="Three Ships" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Information brochure for a Three Ships whisky sales
                      representative's conference
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Farhills01} alt="Farhills" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Logo and brochure design for Farhills Country Resort</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Farhills02} alt="Farhills" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Brochure design for Farhills Country Resort</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Farhills03} alt="Farhills" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Corporate stationary design for Farhills Country Resort
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={HermanusRiver01} alt="Hermanus River" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Advert design for Hermanus River Golf Estate for Time
                      Magazine
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={HermanusRiver02} alt="Hermanus River" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Corporate stationary design for Hermanus River Golf Estate
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={HermanusRiver03} alt="Hermanus River" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Map illustration for Hermanus River Golf Estate</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={HermanusRiver04} alt="Hermanus River" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Sitemap illustration for Hermanus River Golf Estate</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={GordonsGin} alt="Gordon's Gin" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Dartboard created using Lightwave 3D for a promotional
                      campaign for Gordon's Gin
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Santam} alt="Santam Key" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      3D key created using Lightwave 3D for Santam Insurance
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Riverbelle} alt="Riverbelle Casino" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      3D steamboat created using Lightwave 3D for Riverbelle
                      Casino
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={FourByFour01} alt="4x4" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Concept design for an interactive CD for a 4X4 information
                      source
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={FourByFour02} alt="4x4" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Concept design for an interactive CD for a 4X4 information
                      source
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={PlayingForKeeps} alt="Playing for Keeps" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      Book cover design for "Playing for Keeps", a book aimed at
                      teenagers
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={XWing} alt="X-Wing" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Star Wars X-Wing fighter created using Lightwave 3D</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Stapeliad} alt="Stapeliad" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>3D model of a stapeliad built with Lightwave 3D</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Packaging} alt="I&amp;J" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      3D packaging built using Lightwave 3D for I&amp;J's Meal
                      Box range
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Shirts} alt="Shirts" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>
                      T-Shirt artwork for a charity project to raise funds for
                      endangered species
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Oxpeckers} alt="Oxpeckers" />
                  <div className="info-slide">
                    <span>
                      <FaInfo />
                    </span>
                    <p>Advert design for Oxpeckers, environmental journalist</p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#portfolio"
                role="button"
                data-slide="prev"
              >
                <FaAngleLeft />
              </a>
              <a
                className="carousel-control-next"
                href="#portfolio"
                role="button"
                data-slide="next"
              >
                <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
