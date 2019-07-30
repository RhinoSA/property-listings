import React, { Component } from "react";
import items from "./mammaldata";

const MammalContext = React.createContext();

class MammalProvider extends Component {
  state = {
    mammals: [],
    sortedMammals: [],
    featuredAnimals: [],
    order: "all",
    family: "all",
    loading: true
  };

  componentDidMount() {
    let mammals = this.formatData(items);
    mammals.sort((a, b) => a.title.localeCompare(b.title));
    //console.log(mammals);
    let featuredAnimals = mammals.filter(mammals => mammals.featured === true);

    this.setState({
      mammals,
      featuredAnimals,
      sortedMammals: mammals,
      loading: false
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let photosURL = item.photos.map(image => image.imgURL);
      let photoTitle = item.photos.map(image => image.title);
      let photoFeatured = item.photos.map(image => image.featured);
      let mammals = { ...item, photosURL, photoTitle, photoFeatured };
      //let mammals = { ...item };
      return mammals;
    });
    return tempItems;
  }

  getMammal = slug => {
    let tempMammal = [...this.state.mammals];
    const mammal = tempMammal.find(mammal => mammal.slug === slug);
    return mammal;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterMammals
    );
  };

  filterMammals = () => {
    let { mammals, order, family } = this.state;
    // All the rooms
    let tempMammal = [...mammals];
    // Filter by type
    if (order !== "all") {
      tempMammal = tempMammal.filter(mammal => mammal.order === order);
    }
    // Filter by type
    if (family !== "all") {
      tempMammal = tempMammal.filter(mammal => mammal.family === family);
    }
    // Change State
    this.setState({
      sortedMammals: tempMammal
    });
  };

  render() {
    return (
      <MammalContext.Provider
        value={{
          ...this.state,
          getMammal: this.getMammal,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </MammalContext.Provider>
    );
  }
}

const MammalConsumer = MammalContext.Consumer;

export function withMammalConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <MammalConsumer>
        {value => <Component {...props} context={value} />}
      </MammalConsumer>
    );
  };
}

export { MammalProvider, MammalConsumer, MammalContext };
