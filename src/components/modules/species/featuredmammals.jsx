import React from "react";
import MammalFeatured from "./mammalfeatured";

export default function FeaturedMammals({ mammals }) {
  if (mammals.length === 0) {
    return (
      <div>
        <h3>No featured animals today.</h3>
      </div>
    );
  }
  return (
    <section>
      <div>
        {mammals.map(item => {
          return <MammalFeatured key={item.id} mammal={item} />;
        })}
      </div>
    </section>
  );
}
