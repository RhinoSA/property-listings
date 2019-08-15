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
import Modal from "../modules/modal";

const modalContent = (
  <React.Fragment>
    Pellentesque eu quam consequat, hendrerit arcu vel, vestibulum ante. Fusce
    interdum non mi et tempor. Suspendisse eros nisi, dapibus ac egestas ut,
    vulputate ac mi. Nullam mauris sem, maximus a mollis eu, ornare ac mi.
    Curabitur in viverra mauris. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. In dolor turpis, dignissim ac elit in, iaculis porttitor
    magna.
    <br />
    <br />
    Integer porta, purus vel laoreet vulputate, quam ipsum iaculis leo, non
    gravida magna diam vitae nisi. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas.
  </React.Fragment>
);

const modalContentTwo = (
  <React.Fragment>
    Integer porta, purus vel laoreet vulputate, quam ipsum iaculis leo, non
    gravida magna diam vitae nisi. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas. Etiam egestas
    suscipit efficitur. Cras in mauris velit. Pellentesque eu quam consequat,
    hendrerit arcu vel, vestibulum ante. Fusce interdum non mi et tempor.
    Suspendisse eros nisi, dapibus ac egestas ut, vulputate ac mi. Nullam mauris
    sem, maximus a mollis eu, ornare ac mi.
    <br />
    <br />
    Curabitur in viverra mauris. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. In dolor turpis, dignissim ac elit in, iaculis porttitor
    magna. Integer porta, purus vel laoreet vulputate, quam ipsum iaculis leo,
    non gravida magna diam vitae nisi. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas.
  </React.Fragment>
);

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
      interval: 2,
      // Modal One
      modalID: "one",
      modalCall: "#one",
      modalTitle: "Modal Title One",
      modalContent: modalContentTwo,
      modalClass: "centered",
      modalFooter: false,
      // Modal Two
      modalID2: "two",
      modalCall2: "#two",
      modalTitle2: "Modal Title Two",
      modalContent2: modalContent,
      modalClass2: "scrollable",
      modalFooter2: true
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
        <Modal
          modalID={this.state.modalID}
          modalTitle={this.state.modalTitle}
          modalContent={this.state.modalContent}
          modalClass={this.state.modalClass}
          modalFooter={this.state.modalFooter}
        />
        <Modal
          modalID={this.state.modalID2}
          modalTitle={this.state.modalTitle2}
          modalContent={this.state.modalContent2}
          modalClass={this.state.modalClass2}
          modalFooter={this.state.modalFooter2}
        />
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
          data-spy="scroll"
          data-target="#spymenu"
          data-offset="0"
        >
          <ScrollspyMenu />

          {/* ########## START ROW ########## */}
          <div className="row">
            <div className="col-md-12">
              <h1 style={{ marginTop: 20 }}>Bootstrap Modules</h1>
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
              <h4>Primary Colours</h4>
              <p>
                <button className="btn btn-primary">Primary</button>&nbsp;&nbsp;
                <button className="btn btn-primary active">Primary</button>
                &nbsp;&nbsp;
                <button className="btn btn-primary" disabled>
                  Primary
                </button>
              </p>
              <p className="alert alert-primary">This is an alert.</p>
              <h4>Secondary Colours</h4>
              <p>
                <button className="btn btn-secondary">Secondary</button>
                &nbsp;&nbsp;
                <button className="btn btn-secondary active">Secondary</button>
                &nbsp;&nbsp;
                <button className="btn btn-secondary" disabled>
                  Secondary
                </button>
              </p>
              <p className="alert alert-secondary">This is an alert.</p>
              <h4>Info Colours</h4>
              <p>
                <button className="btn btn-info">Info</button>&nbsp;&nbsp;
                <button className="btn btn-info active">Info</button>
                &nbsp;&nbsp;
                <button className="btn btn-info" disabled>
                  Info
                </button>
              </p>
              <p className="alert alert-info">This is an alert.</p>
              <h4>Warning Colours</h4>
              <p>
                <button className="btn btn-warning">Warning</button>&nbsp;&nbsp;
                <button className="btn btn-warning active">Warning</button>
                &nbsp;&nbsp;
                <button className="btn btn-warning" disabled>
                  Warning
                </button>
              </p>
              <p className="alert alert-warning">This is an alert.</p>
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
              <p>
                <button
                  type="button"
                  id="btnone"
                  className="btn btn-secondary btn-sm"
                  data-toggle="modal"
                  data-target={this.state.modalCall}
                >
                  Modal One
                </button>

                <button
                  type="button"
                  className="btn btn-secondary btn-sm ml-2"
                  data-toggle="modal"
                  data-target={this.state.modalCall2}
                >
                  Modal Two
                </button>
              </p>
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
