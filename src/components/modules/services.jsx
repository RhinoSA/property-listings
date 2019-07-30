import React, { Component } from "react";
import TitleServices from "./titleservices";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "This is some dummy text for this service."
      },
      {
        icon: <FaHiking />,
        title: "Hiking Trails",
        info: "This is some dummy text for this service."
      },
      {
        icon: <FaShuttleVan />,
        title: "Shuttle Services",
        info: "This is some dummy text for this service."
      },
      {
        icon: <FaBeer />,
        title: "Beer on Tap",
        info: "This is some dummy text for this service."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <TitleServices titleservices="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
