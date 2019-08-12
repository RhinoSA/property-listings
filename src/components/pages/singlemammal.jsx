import React, { Component } from "react";

import $ from "jquery";

import { Link } from "react-router-dom";
import { MammalContext } from "../../contextmammals";
import Title from "../modules/title";
import styled from "styled-components";
import defaultImg from "../../images/lion.jpg";

class SingleMammal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }

  componentDidMount() {
    // Initiate Carousel on page mount
    $("#animal-carousel").carousel("cycle");
  }

  static contextType = MammalContext;

  render() {
    const carouselControls = (
      <React.Fragment>
        <a
          className="carousel-control-next"
          href="#animal-carousel"
          role="button"
          data-slide="next"
        >
          <span className="arrow-carousel">&gt;</span>
        </a>
        <a
          className="carousel-control-prev"
          href="#animal-carousel"
          role="button"
          data-slide="prev"
        >
          <span className="arrow-carousel">&lt;</span>
        </a>
      </React.Fragment>
    );

    const { getMammal } = this.context;
    const mammal = getMammal(this.state.slug);
    //console.log(room);
    if (!mammal) {
      return (
        <div className="error">
          <h4>That animal could not be found...</h4>
          <Link to="/animals" className="btn btn-primary">
            Back to Species
          </Link>
        </div>
      );
    }
    const {
      title,
      latin,
      superFamily,
      family,
      subFamily,
      tribe,
      order,
      suborder,
      length,
      lengthMale,
      lengthFemale,
      height,
      heightMale,
      heightFemale,
      shoulder,
      shoulderMale,
      shoulderFemale,
      weight,
      weightMale,
      weightFemale,
      tail,
      tailMale,
      tailFemale,
      horns,
      gestation,
      teats,
      teeth,
      collective,
      photos,
      featuredPhoto,
      featuredTitle
    } = mammal;

    const capitalize = s => {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    };

    const noun = collective;
    let info = "";
    if (noun.length === 1) {
      for (let i = 0; i < noun.length; i++) {
        info += noun[i];
      }
    } else {
      for (let i = 0; i < noun.length; i++) {
        if (i === noun.length - 1) {
          info += "and " + noun[i] + ".";
        } else if (i === noun.length - 2) {
          info += "" + noun[i] + " ";
        } else {
          info += noun[i] + ", ";
        }
      }
    }

    const BackgroundImage = styled.header`
      position: absolute;
      top: 0;
      left: 0;
      background-image: url(${featuredPhoto ? featuredPhoto : defaultImg});
      background-size: 100% auto;
      background-repeat: no-repeat;
      display: inline-block;
      width: 100%;
      height: 100%;
      margin-top: 0px;
      margin-bottom: 0px;
    `;

    const collectiveNounBefore = info;

    const collectiveNoun = capitalize(collectiveNounBefore);

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Title title={title} />
              {featuredPhoto ? (
                <div className="banner-title">
                  <div className="title-float">{latin}</div>
                  {featuredTitle ? (
                    <div className="featured-title">
                      <div className="description-float">{featuredTitle}</div>
                    </div>
                  ) : null}
                  {featuredPhoto ? (
                    <BackgroundImage className="banner-photo" photos={photos} />
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 order-lg-1 order-md-2 order-sm-2 order-2">
              <p>
                <b>Latin:</b> {latin}
                <br />
                {/* Order */}
                {order ? <b>Order:</b> : null}
                {order ? ` ${capitalize(order)}` : null}
                {order ? <br /> : null}
                {/* Suborder */}
                {suborder ? <b>Suborder:</b> : null}
                {suborder ? ` ${capitalize(suborder)}` : null}
                {suborder ? <br /> : null}
                {/* Superfamily */}
                {superFamily ? <b>Superfamily:</b> : null}
                {superFamily ? ` ${capitalize(superFamily)}` : null}
                {superFamily ? <br /> : null}
                {/* Family */}
                {family ? <b>Family:</b> : null}
                {family ? ` ${capitalize(family)}` : null}
                {family ? <br /> : null}
                {/* Subfamily */}
                {subFamily ? <b>Subfamily:</b> : null}
                {subFamily ? ` ${capitalize(subFamily)}` : null}
                {subFamily ? <br /> : null}
                {/* Tribe */}
                {tribe ? <b>Tribe:</b> : null}
                {tribe ? ` ${capitalize(tribe)}` : null}
                {tribe ? <br /> : null}
                {/* Weight */}
                {weight === "" ? null : <b>Weight:</b>}
                {weight === "" ? null : ` ${weight}`}
                {weight === "" ? null : <br />}
                {weightMale === "" ? null : <b>Weight Male:</b>}
                {weightMale === "" ? null : ` ${weightMale}`}
                {weightMale === "" ? null : <br />}
                {weightFemale === "" ? null : <b>Weight Female:</b>}
                {weightFemale === "" ? null : ` ${weightFemale}`}
                {weightFemale === "" ? null : <br />}
                {/* Length */}
                {length === "" ? null : <b>Length:</b>}
                {length === "" ? null : ` ${length}`}
                {length === "" ? null : <br />}
                {lengthMale === "" ? null : <b>Length Male:</b>}
                {lengthMale === "" ? null : ` ${lengthMale}`}
                {lengthMale === "" ? null : <br />}
                {lengthFemale === "" ? null : <b>Length Female:</b>}
                {lengthFemale === "" ? null : ` ${lengthFemale}`}
                {lengthFemale === "" ? null : <br />}
                {/* Height */}
                {height === "" ? null : <b>Total Height:</b>}
                {height === "" ? null : ` ${height}`}
                {height === "" ? null : <br />}
                {heightMale === "" ? null : <b>Height Male:</b>}
                {heightMale === "" ? null : ` ${heightMale}`}
                {heightMale === "" ? null : <br />}
                {heightFemale === "" ? null : <b>Height Female:</b>}
                {heightFemale === "" ? null : ` ${heightFemale}`}
                {heightFemale === "" ? null : <br />}
                {/* Shoulder */}
                {shoulder === "" ? null : <b>Shoulder:</b>}
                {shoulder === "" ? null : ` ${shoulder}`}
                {shoulder === "" ? null : <br />}
                {shoulderMale === "" ? null : <b>Shoulder Male:</b>}
                {shoulderMale === "" ? null : ` ${shoulderMale}`}
                {shoulderMale === "" ? null : <br />}
                {shoulderFemale === "" ? null : <b>Shoulder Female:</b>}
                {shoulderFemale === "" ? null : ` ${shoulderFemale}`}
                {shoulderFemale === "" ? null : <br />}
                {/* Tail */}
                {tail === "" ? null : <b>Tail:</b>}
                {tail === "" ? null : ` ${tail}`}
                {tail === "" ? null : <br />}
                {tailMale === "" ? null : <b>Tail Male:</b>}
                {tailMale === "" ? null : ` ${tailMale}`}
                {tailMale === "" ? null : <br />}
                {tailFemale === "" ? null : <b>Tail Female:</b>}
                {tailFemale === "" ? null : ` ${tailFemale}`}
                {tailFemale === "" ? null : <br />}
                {/* Horns */}
                {horns === "" ? null : <b>Horns:</b>}
                {horns === "" ? null : ` ${capitalize(horns)}`}
                {horns === "" ? null : <br />}
                {/* Teats */}
                {teats === "" ? null : <b>Teats:</b>}
                {teats === "" ? null : ` ${teats}`}
                {teats === "" ? null : <br />}
                {/* Gestation */}
                {gestation === "" ? null : <b>Gestation:</b>}
                {gestation === "" ? null : ` ${gestation}`}
                {gestation === "" ? null : <br />}
                {/* Teeth */}
                {teeth === "" ? null : <b>Teeth:</b>}
                {teeth === "" ? null : ` ${teeth}`}
                {collectiveNoun === "" ? null : <br />}
                {collective.length > 1 ? <b>Collective Nouns:</b> : null}
                {collective.length === 1 ? <b>Collective Noun:</b> : null}
                {collectiveNoun ? ` ${collectiveNoun}` : null}
              </p>
              <Link to="/animals" className="btn btn-secondary">
                Browse Animals
              </Link>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 order-lg-2 order-md-1 order-sm-1 order-1">
              {photos.length === 0 ? (
                <p
                  className="alert alert-secondary"
                  style={{ marginTop: 76, textAlign: "center" }}
                >
                  There are currently no photos of this species in the database.
                </p>
              ) : (
                <div list={photos}>
                  <div
                    id="animal-carousel"
                    className="carousel-medium carousel slide carousel-fade"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {photos.map(rows => (
                        <div
                          className={
                            rows.active === true
                              ? "carousel-item active"
                              : "carousel-item"
                          }
                          key={rows.id}
                        >
                          <img
                            className="img-carousel"
                            src={rows.imgURL}
                            alt={rows.title}
                          />

                          {rows.description === "" ? null : (
                            <div className="carousel-caption d-none d-md-block">
                              {rows.description}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {photos.length === 1 ? null : carouselControls}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleMammal;
