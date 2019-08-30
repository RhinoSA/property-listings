import React, { Component } from "react";
import Menu from "../menu";

class Objects extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let myObject = {};
    myObject.name = "lion";
    myObject.order = "carnivora";

    let myObjectTwo = {
      name: "lion",
      order: "carnivora",
      sentence: function() {
        return `A ${myObjectTwo.name} is part of the order ${
          myObjectTwo.order
        }.`;
      }
    };

    let animal = {
      name: "lion",
      order: "carnivora",
      sentence() {
        return `A ${animal.name} is part of the order ${animal.order}.`;
      }
    };

    class animalClass {
      constructor() {
        this.name = "leopard";
        this.order = "carnivora";
        this.collective = "leap";
      }
      sentence = () => {
        return `A ${this.name} is part of the order ${this.order}.`;
      };
    }

    let animalShow = new animalClass();

    let secondAnimalShow = {};
    Object.assign(secondAnimalShow, animalShow);

    let thirdAnimalShow = {
      ...animalShow,
      collective: "cackle",
      name: "hyaena"
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>Javascript Objects</h1>
            <p>{myObjectTwo.sentence()}</p>
            <h2>Defining an Object</h2>
            <p>This is how one defines an object:</p>
            <p className="alert alert-secondary">
              let myObject = &#123;&#125;;
              <br />
              myObject.name = "lion";
              <br />
              myObject.order = "carnivora";
            </p>
            <p>
              This is how one would define the object with the properties
              inside:
            </p>
            <p className="alert alert-secondary">
              let myObject = &#123;
              <br />
              &nbsp;&nbsp;name: "lion";
              <br />
              &nbsp;&nbsp;order: "carnivora";
              <br />
              &#125;;
            </p>
            <p>To access the object data one would do the following:</p>
            <p className="alert alert-secondary">
              &#123;`A &#36;{/**/}&#123;myObject.name&#125; is part of the order
              &#36;{/**/}&#123;myObject.order&#125;.`&#125;;
            </p>
            <h4>The Output:</h4>
            <p>{`A ${myObject.name} is part of the order ${
              myObject.order
            }.`}</p>
            <h2>Using Variables as Object Properties</h2>
            <p>
              Below is a basic example of how one would use variables as object
              properties:
            </p>
            <p className="alert alert-secondary">
              let name = "lion";
              <br />
              <br />
              let myObject = &#123;
              <br />
              &nbsp;&nbsp;name,
              <br />
              &nbsp;&nbsp;order: "carnivora";
              <br />
              &#125;;
            </p>
            <h2>Using Functions as Methods</h2>
            <p>
              In the previous example, name and order are the object properties.
              One can also define object methods, which are functions, as
              follows:
            </p>
            <p className="alert alert-secondary">
              let name = "lion";
              <br />
              <br />
              let animal = &#123;
              <br />
              &nbsp;&nbsp;name,
              <br />
              &nbsp;&nbsp;order: "carnivora",
              <br />
              &nbsp;&nbsp;sentence() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return `A &#36;{/**/}
              &#123;animal.name&#125; is part of the order &#36;{/**/}
              &#123;animal.order&#125;.`;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;;
            </p>
            <p>
              To use the above function inside a component, one would do the
              following:
            </p>
            <p className="alert alert-secondary">
              &#123;animal.sentence()&#125;
            </p>
            <h4>The Output:</h4>
            <p>{animal.sentence()}</p>
            <h2>Using Classes</h2>
            <p>
              Classes are templates for objects and define the properties and
              methods that new instances of the object will posses. Classes are
              used in React to define components that have state data. Below is
              an example of a basic class:
            </p>
            <p className="alert alert-secondary">
              class animalClass &#123;
              <br />
              &nbsp;&nbsp;constructor() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.name = "leopard";
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.order = "carnivora";
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.collective = "leap";
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;sentence = () =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return `A &#36;{/**/}
              &#123;this.name&#125; is part of the order &#36;{/**/}
              &#123;this.order&#125;.`;
              <br />
              &nbsp;&nbsp;&#125;;
              <br />
              &#125;
              <br />
              <br />
              let animalShow = new animalClass();
            </p>
            <p>To create an instance of the class one uses the following:</p>
            <p className="alert alert-secondary">
              let animalShow = new animalClass();
            </p>
            <p>
              To use the class inside a component one would use the following
              code:
            </p>
            <p className="alert alert-secondary">
              &#123;animalShow.sentence()&#125;
            </p>
            <h4>The Output:</h4>
            <p>{animalShow.sentence()}</p>
            <h4>Copying the Properties of an Object</h4>
            <p>
              To copy the properties of one object and transfer them to another
              object, one would do the following:
            </p>
            <p className="alert alert-secondary">
              let secondAnimalShow = &#123;&#125;;
              <br />
              Object.assign(secondAnimalShow, animalShow);
            </p>
            <p>One can also clone the object using this method:</p>
            <p className="alert alert-secondary">
              let secondAnimalShow = &#123; ...animalShow &#125;;
            </p>
            <p>Then to output the cloned object one would use:</p>
            <p className="alert alert-secondary">
              &#123;secondAnimalShow.sentence()&#125;
            </p>
            <p>{secondAnimalShow.sentence()}</p>
            <h4>Updating Properies in a Cloned Object</h4>
            <p>
              To change an object's properties when cloning an object one would
              use the following:
            </p>
            <p className="alert alert-secondary">
              let secondAnimalShow = &#123; ...animalShow &#125;
              <br />
              <br />
              let thirdAnimalShow = &#123;
              <br />
              &nbsp;&nbsp;...animalShow,
              <br />
              &nbsp;&nbsp;collective: "cackle",
              <br />
              &nbsp;&nbsp;name: "hyaena"
              <br />
              &#125;;
            </p>
            <p>
              A {animalShow.collective} of {animalShow.name}s.
              <br />A {thirdAnimalShow.collective} of {thirdAnimalShow.name}s.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Objects;
