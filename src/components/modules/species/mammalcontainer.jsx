import React from "react";
import MammalFilter from "./mammalfilter";
import MammalList from "./mammallist";
import FeaturedMammals from "./featuredmammals";
import { withMammalConsumer } from "../../../contextmammals";
import Loading from "../loading";

function MammalContainer({ context }) {
  const { loading, sortedMammals, featuredAnimals, mammals } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <h2>Featured Species</h2>
      <div className="card-columns mt-3">
        <FeaturedMammals mammals={featuredAnimals} />
      </div>
      <MammalFilter mammals={mammals} />
      <MammalList mammals={sortedMammals} />
    </React.Fragment>
  );
}

export default withMammalConsumer(MammalContainer);
