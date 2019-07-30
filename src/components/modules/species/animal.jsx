import React from "react";
import { Link } from "react-router-dom";

function Animal({ animals }) {
  const { slug, title, latin } = animals;
  return (
    <Link to={`/mammals/${slug}`} className="list-group-item">
      {title} - {latin}
    </Link>
  );
}

export default Animal;
