import React, { Component } from "react";
import Carousel from "../modules/carousel";
import $ from "jquery";

// Scrollspy Menu
import ScrollspyMenu from "../sections/scrollspymenu";
// Clock
import Clock from "../modules/clock";

// Page Sections
import AlertSection from "../sections/alertsection";
import CarouselSection from "../sections/carouselsection";
import ButtonBadgeSection from "../sections/buttonbadgesection";
import ModalsSection from "../sections/modalssection";
import DropdownsSection from "../sections/dropdownssection";
import PopoversSection from "../sections/popoverssection";
import TooltipsSection from "../sections/tooltipssection";
import CardsSection from "../sections/cardssection";
import CollapseSection from "../sections/collapsesection";
import InputGroupsSection from "../sections/inputgroupssection";
import ListGroupsSection from "../sections/listgroupssection";
import NavbarsSection from "../sections/navbarssection";
import PaginationSection from "../sections/paginationsection";
import ScrollspySection from "../sections/scrollspysection";
import TabsSection from "../sections/tabssection";

// Function to determine if it is morning,
// afternoon or evening
function time() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "Good morning :)";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Good afternoon :)";
  } else {
    timeOfDay = "Good evening :)";
  }
  return timeOfDay;
}

class Bootstrap extends Component {
  constructor() {
    super();
    this.state = {
      carouselID: "home-carousel",
      carouselHeight: null,
      carousel: [
        {
          id: 1,
          imageUrl: "../assets/images/banner-01.jpg",
          alt: "Image One",
          class: "carousel-item active",
          caption: time()
        },
        {
          id: 2,
          imageUrl: "../assets/images/banner-02.jpg",
          alt: "Image One",
          class: "carousel-item",
          caption: "You can include it on any page you want"
        },
        {
          id: 3,
          imageUrl: "../assets/images/banner-03.jpg",
          alt: "Image One",
          class: "carousel-item",
          caption: "It can display different images on different pages"
        }
      ],
      interval: 2
    };
  }

  componentDidMount() {
    // Initiate Carousel on page mount
    $("#home-carousel").carousel("cycle");
    $("body").scrollspy("refresh");

    // STICKY SCRIPT BELOW HERE
    // =========================
    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
      var stickyHeight = sticky.outerHeight();
      var stickyTop = stickyWrapper.offset().top;
      if (scrollElement.scrollTop() >= stickyTop) {
        stickyWrapper.height(stickyHeight);
        sticky.addClass("is-sticky");
      } else {
        sticky.removeClass("is-sticky");
        stickyWrapper.height("auto");
      }
    };
    $('[data-toggle="sticky-onscroll"]').each(function() {
      var sticky = $(this);
      var stickyWrapper = $("<div>").addClass("sticky-wrapper");
      sticky.before(stickyWrapper);
      sticky.addClass("sticky");
      $(window).on("scroll.sticky-onscroll resize.sticky-onscroll", function() {
        stickyToggle(sticky, stickyWrapper, $(this));
      });
      stickyToggle(sticky, stickyWrapper, $(window));
    });
    // =========================
    // STICKY SCRIPT ENDS HERE
    //Scrollspy
    $("body").scrollspy({ target: "#spymenu" });
  }

  render() {
    // Activate Popovers
    $(function() {
      $('[data-toggle="popover"]').popover();
    });
    // Hide Popovers when clicking on the page
    $("html").on("click", function(e) {
      if (
        typeof $(e.target).data("original-title") == "undefined" &&
        !$(e.target)
          .parents()
          .is(".popover.in")
      ) {
        $("[data-original-title]").popover("hide");
      }
    });
    // Activate Tooltips
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });

    return (
      <React.Fragment>
        <span id="spy-0" className="anchor" />

        <Carousel
          carouselID={this.state.carouselID}
          carousel={this.state.carousel}
          carouselHeight={this.state.carouselHeight}
          interval={this.state.interval}
        />
        <Clock />
        <div
          className="container"
          style={{ marginTop: 15 }}
          data-spy="scroll"
          data-target="#spymenu"
          data-offset="0"
        >
          <ScrollspyMenu />

          {/* ########## START ROW ########## */}
          <div className="row">
            <div className="col-md-12">
              <h1>Bootstrap Modules</h1>
              <p>
                Below are various Bootstrap components one can use to create the
                elements one would need for a website. There is a button on the
                right which opens a scrollspy enabled menu so you can quickly
                jump to the relevant section on the page.
              </p>
              <ol>
                <li>Input Groups</li>
                <li>List Groups</li>
                <li>Navbars</li>
                <li>Pagination</li>
              </ol>
              <hr />
              <h2>Installing Bootstrap</h2>
              <p>To install Bootstrap run the following command in Terminal:</p>
              <p className="alert alert-secondary">npm install bootstrap</p>
              <p>Then in you index.js file include the following:</p>
              <p className="alert alert-secondary">
                import "bootstrap/dist/css/bootstrap.min.css";
                <br />
                import "bootstrap/dist/js/bootstrap.bundle.min";
                <br />
                import "bootstrap/dist/js/jquery.min.js";
              </p>
            </div>
          </div>
          {/* ########## END ROW ########## */}
          <div className="row">
            <div className="col-md-12">
              {/* ########## START SECTION 1 ########## */}
              <hr />
              <AlertSection />
              <hr />
              <ButtonBadgeSection />
              <hr />
              <CardsSection />
              <hr />
              <CarouselSection />
              <hr />
              <CollapseSection />
              <hr />
              <DropdownsSection />
              <hr />
              <InputGroupsSection />
              <hr />
              <ListGroupsSection />
              <hr />
              <ModalsSection />
              <hr />
              <NavbarsSection />
              <hr />
              <PaginationSection />
              <hr />
              <PopoversSection />
              <hr />
              <ScrollspySection />
              <hr />
              <TabsSection />
              <hr />
              <TooltipsSection />
              {/* ########## END SECTION 14 ########## */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Bootstrap;
