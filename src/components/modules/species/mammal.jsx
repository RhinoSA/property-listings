import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Mammal({ mammal }) {
  const capitalize = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const { title, latin, slug, order } = mammal;
  return (
    <article className="list-group-item">
      <Link to={`/mammals/${slug}`}>
        {title} - {latin} - {capitalize(order)}
      </Link>
    </article>
  );
}

Mammal.propTypes = {
  mammal: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
    latin: PropTypes.string.isRequired
  })
};
