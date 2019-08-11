import React from "react";
import Mammal from "./mammal";

export default function MammalList({ mammals }) {
  
  if (mammals.length === 0) {
    return (
      <div>
        <p className="alert alert-secondary">
          No mammals match your search paramaters.
        </p>
      </div>
    );
  }

  return (
    <section>
      <div className="mb-3">
        {mammals.map(item => {
          return <Mammal key={item.id} mammal={item} />;
        })}
      </div>
    </section>
  );
}