import React, { Component } from "react";
import items from "../data/mammals";

const MammalsContext = React.createContext();

class MammalsProvider extends Component {
  state = {
    mammals: [],
    sortedMammals: [],
    featuredAnimals: [],
    order: "all",
    family: "all",
    loading: true,
    carnivora: false
  };

  componentDidMount() {
    let mammals = this.formatData(items);
    mammals.sort((a, b) => a.title.localeCompare(b.title));
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
    let { mammals, order, family, carnivora } = this.state;
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
    // Filter by pets
    if (carnivora) {
      tempMammal = tempMammal.filter(mammal => mammal.order === "carnivora");
    }
    // Change State
    this.setState({
      sortedMammals: tempMammal
    });
  };

  render() {
    return (
      <MammalsContext.Provider
        value={{
          ...this.state,
          getMammal: this.getMammal,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </MammalsContext.Provider>
    );
  }
}

const MammalsConsumer = MammalsContext.Consumer;

export function withMammalsConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <MammalsConsumer>
        {value => <Component {...props} context={value} />}
      </MammalsConsumer>
    );
  };
}

export { MammalsProvider, MammalsConsumer, MammalsContext };
