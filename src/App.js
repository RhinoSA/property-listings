import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGE SECTIONS
import Footer from "./components/modules/footer";
import Navbar from "./components/modules/navbar/navbar";

// PAGES
import Home from "./components/pages/home";
import Animals from "./components/pages/animals";
import Forms from "./components/pages/forms";
import SearchAnimals from "./components/pages/searchanimals";
import Links from "./components/pages/links";
import Bootstrap from "./components/pages/bootstrap";
import Default from "./components/pages/default";
//import Axios from "./components/pages/axios";
import ToDo from "./components/pages/todo";
import JavaScript from "./components/pages/javascript";
// PROPERTY SEARCH
import Rooms from "./components/pages/rooms";
import SingleRoom from "./components/pages/singleroom";
//import Error from "./components/pages/error";
// SHOP
import Shop from "./components/shop";
import Details from "./components/shop/details";
import Cart from "./components/cart";
//import Default from "./components/default";
import Modal from "./components/shop/modal";

import SingleMammal from "./components/pages/singlemammal";

// NEW
import Functions from "./sections/javascript/functions";
import Strings from "./sections/javascript/strings";
import Arrays from "./sections/javascript/arrays";
import Conditionals from "./sections/javascript/conditionals";
import Operators from "./sections/javascript/operators";
import Replace from "./sections/javascript/replace";
import Loops from "./sections/javascript/loops";
import Modules from "./sections/javascript/modules";
import HOCBasics from "./sections/components/basics";
import ComponentsHome from "./sections/components/components";
import ChildrenProp from "./sections/components/childrenprop";
import EventPropagation from "./sections/events/eventpropagation";
import RouterBasics from "./sections/router/basics";
import Events from "./sections/events/events";
import PropsBasics from "./sections/props/basics";
import FunctionProps from "./sections/props/functionprops";
import DefaultProps from "./sections/props/defaultprops";
import PropTypes from "./sections/props/proptypes";
import Context from "./sections/context/context";
import ListsBasics from "./sections/lists/basics";
import FilteredSearch from "./sections/lists/filteredsearch";
import ReactReveal from "./sections/extras/reactreveal";
import ReactIcons from "./sections/extras/reacticons";
import UniqueID from "./sections/extras/uniqueid";
import ReactTransitionGroup from "./sections/extras/reacttransitiongroup";
import Hooks from "./sections/hooks/hooks";
import ConditionalRendering from "./sections/conditional/conditionalrendering";
import CssSwitch from "./sections/extras/cssswitch";
import AnimateOnScroll from "./sections/extras/animateonscroll";
import ReactMotion from "./sections/extras/reactmotion";
import GridGallery from "./sections/extras/lightbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sitename: "Reactor"
    };
  }

  render() {
    const sitename = "Reactor";
    return (
      <Router>
        <Header />
        {/*<Header sitename={this.state.sitename} />*/}
        <main role="main">
          <div className="page-frame" />
          <Switch>
            {/* NEW */}
            <Route exact path="/home/functions" component={Functions} />
            <Route exact path="/home/router" component={RouterBasics} />
            <Route exact path="/home/strings" component={Strings} />
            <Route exact path="/home/arrays" component={Arrays} />
            <Route exact path="/home/conditionals" component={Conditionals} />
            <Route exact path="/home/operators" component={Operators} />
            <Route exact path="/home/replace" component={Replace} />
            <Route exact path="/home/modules" component={Modules} />
            <Route exact path="/home/loops" component={Loops} />
            <Route exact path="/home/events" component={Events} />
            <Route exact path="/home/functionprops" component={FunctionProps} />
            <Route exact path="/home/props-basics" component={PropsBasics} />
            <Route exact path="/home/defaultprops" component={DefaultProps} />
            <Route exact path="/home/proptypes" component={PropTypes} />
            <Route exact path="/home/hoc-basics" component={HOCBasics} />
            <Route exact path="/home/components" component={ComponentsHome} />
            <Route exact path="/home/children-prop" component={ChildrenProp} />
            <Route exact path="/home/context" component={Context} />
            <Route exact path="/home/lists" component={ListsBasics} />
            <Route exact path="/home/filtering" component={FilteredSearch} />
            <Route exact path="/home/react-reveal" component={ReactReveal} />
            <Route exact path="/home/react-icons" component={ReactIcons} />
            <Route exact path="/home/unique-id" component={UniqueID} />
            <Route exact path="/home/css-switch" component={CssSwitch} />
            <Route exact path="/home/react-motion" component={ReactMotion} />
            <Route exact path="/home/lightbox" component={GridGallery} />
            <Route
              exact
              path="/home/animate-on-scroll"
              component={AnimateOnScroll}
            />
            <Route
              exact
              path="/home/react-transition-group"
              component={ReactTransitionGroup}
            />
            <Route path="/home/hooks" component={Hooks} />
            <Route
              path="/home/conditional-rendering"
              component={ConditionalRendering}
            />
            <Route
              exact
              path="/home/event-propagation"
              component={EventPropagation}
            />
            {/* ORIGINAL */}
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/animals" component={Animals} />
            <Route path="/bootstrap" component={Bootstrap} />
            <Route path="/forms" component={Forms} />
            <Route path="/search" component={SearchAnimals} />
            <Route path="/links" component={Links} />
            {/*<Route path="/axios" component={Axios} />*/}
            <Route path="/todo" component={ToDo} />
            <Route path="/javascript" component={JavaScript} />
            {/*<Route exact path="/" component={Home} />*/}
            <Route path="/Shop" component={Shop} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            {/*<Route path="/home" component={Home} />*/}
            <Route path="/productlist" component={Cart} />
            {/* ROOM FINDER */}
            <Route exact path="/rooms/" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route exact path="/mammals/:slug" component={SingleMammal} />
            <Route exact path="/order/:slug" component={SingleMammal} />
            {/*<Route path="/error" component={Error} />*/}
            {/* AXIOS */}
            {/*<Route exact path="/:post_id" component={AxiosPost} />*/}
            {/*<Route component={Default} />*/}
            <Route component={Default} />
          </Switch>
          <Modal />
        </main>
        {/*<Footer sitename={this.state.sitename} />*/}
        <Footer sitename={sitename} />
      </Router>
    );
  }
}

function Header() {
  return <Navbar />;
}

export default App;
