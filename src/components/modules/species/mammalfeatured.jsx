import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NoImage from "../../../images/noimage.jpg";

export default function MammalFeatured({ mammal }) {
  const capitalize = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const { title, latin, slug, order, photosURL } = mammal;

  return (
    <article className="card mb-3">
      <div className="card-body" style={{ padding: 0 }}>
        {photosURL.length === 0 ? (
          <Link to={`/mammals/${slug}`}>
            <img src={NoImage} alt={title} className="card-img-top" />
          </Link>
        ) : (
          <Link to={`/mammals/${slug}`}>
            <img src={photosURL[0]} alt={title} className="card-img-top" />
          </Link>
        )}
        <h4 className="card-title" style={{ padding: "15px 15px 0px 15px" }}>
          {title}
        </h4>
        <div className="card-text" style={{ padding: "0px 15px 15px 15px" }}>
          <p>
            Latin Name: {latin}
            <br />
            Order: {capitalize(order)}
          </p>
          <Link to={`/mammals/${slug}`} className="btn btn-secondary btn-sm">
            More Info
          </Link>
        </div>
      </div>
    </article>
  );
}

MammalFeatured.propTypes = {
  mammal: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
    photosURL: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
