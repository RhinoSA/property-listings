import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGE SECTIONS
import Footer from "./components/modules/footer";
import Navbar from "./components/modules/navbar/navbar";

// PAGES
import Home from "./components/pages/home";
import Animals from "./components/pages/animals";
import Basics from "./components/pages/basics";
import Components from "./components/pages/components";
import Forms from "./components/pages/forms";
import SearchAnimals from "./components/pages/searchanimals";
import Links from "./components/pages/links";
import Bootstrap from "./components/pages/bootstrap";
import Hooks from "./components/pages/hooks";
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

//import AxiosPost from "./components/modules/axiospost";

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
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/animals" component={Animals} />
            <Route path="/bootstrap" component={Bootstrap} />
            <Route path="/basics" component={Basics} />
            <Route path="/components" component={Components} />
            <Route path="/forms" component={Forms} />
            <Route path="/search" component={SearchAnimals} />
            <Route path="/links" component={Links} />
            <Route path="/hooks" component={Hooks} />
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
