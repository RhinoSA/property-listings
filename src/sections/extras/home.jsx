import React from "react";
import Card from "./cardproperty";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = ({ property }) => {
  return (
    <div className="page">
      <TransitionGroup className="card-container">
        <CSSTransition key={property._id} timeout={2500} classNames="slide">
          <Card property={property} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Home;
