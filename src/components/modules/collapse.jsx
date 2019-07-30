import React, { Component } from "react";
import CollapseItem from "./collapseitem";
import CollapseSingle from "./collapsesingle";
//import AccordianWrap from "./accordionwrap";

class Collapse extends Component {
  // Need the props here for toggle
  constructor(props) {
    // Need the props here for the toggle
    super(props);
    this.state = {
      wrapperID: "accordion",
      accordions: [
        {
          id: 1,
          ariaExpand: false,
          headingID: "heading-one",
          collapseID: "accord01",
          collapseThisID: "#accord01",
          accTitle: "The First Heading",
          accText:
            "The text of the first collapsable card and is just to show what the effect looks like with some random text to make it appear like this is meaningful content. One has to write a lot of words to make take up enough space to make this work and I should have maybe considered using dummy text instead of trying to write this long stream of words. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable"
        },
        {
          id: 2,
          ariaExpand: false,
          headingID: "heading-two",
          collapseID: "accord02",
          collapseThisID: "#accord02",
          accTitle: "The Second Heading",
          accText:
            "The text of the second collapse item. Pellentesque tincidunt, ipsum et accumsan cursus, ipsum urna fringilla purus, eu interdum enim magna a ipsum. Duis ac porttitor orci, ac molestie nisl. Morbi eu viverra ipsum. Quisque ac cursus orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla a nisi a lectus sollicitudin eleifend. Sed dignissim efficitur leo. Donec consequat, diam sed viverra tempus, velit erat sodales nisi, vitae tempus mauris nisl eget neque. Duis gravida condimentum arcu, vel tincidunt massa lobortis eget. Vivamus sit amet malesuada quam."
        },
        {
          id: 3,
          ariaExpand: false,
          headingID: "heading-three",
          collapseID: "accord03",
          collapseThisID: "#accord03",
          accTitle: "The Third Heading",
          accText:
            "The text of the third collapsable item in this accordion. Aliquam euismod lorem massa, a dignissim eros condimentum ut. Aliquam et velit vel justo tempor semper ut nec sem. Sed non magna dui. Cras vel libero risus. Nullam viverra, metus eu tincidunt posuere, orci quam pharetra ante, ac hendrerit orci enim eu urna. Nullam ac laoreet eros. Integer ullamcorper augue vel nibh varius, non pellentesque nibh venenatis. Duis placerat, dolor sed mollis auctor, lectus nisl bibendum lorem, ut pellentesque lorem nulla id est. Nullam lacinia convallis ante quis mollis."
        }
      ],
      collapseBtnWidth: 80,
      collapseID: "exampleCollapse",
      collapseText:
        "This is hidden information which is displayed when the user clicks on the button to open this panel to make it visible. The button's text also changes depending on whether the panel is opened or closed. Do not add a margin to the bottom of the hidden panel or there is an odd jump just as the panel is about to vanish."
    };
    this.toggleText = this.toggleText.bind(this);
  }

  toggleText() {
    this.setState(function(prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }

  render() {
    // Solitary Button Constants
    const closedText = "Hide Info";
    const openedText = "More Info";
    const collapseBtnWidth = 80;
    return (
      <React.Fragment>
        <h4>Collapsable Accordion Group</h4>
        <div id={this.state.wrapperID} className="accordion mb-3 mt-3">
          {this.state.accordions.map(rows => (
            <CollapseItem
              key={rows.id}
              wrapperID={this.state.wrapperID}
              ariaExpand={rows.ariaExpand}
              collapseID={rows.collapseID}
              headingID={rows.headingID}
              accTitle={rows.accTitle}
              accText={rows.accText}
              collapseThisID={rows.collapseThisID}
              collapseBtnWidth={rows.collapseBtnWidth}
            />
          ))}
        </div>
        <p>This is the component call for the accordion menu:</p>
        <p className="alert alert-secondary">
          &lt;div id=&#123;this.state.wrapperID&#125; className="accordion mb-3
          mt-3"&gt;
          <br />
          &nbsp;&nbsp;&#123;this.state.accordions.map(rows => (<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;CollapseItem
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key=&#123;rows.id&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wrapperID=&#123;this.state.wrapperID&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ariaExpand=&#123;rows.ariaExpand&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;collapseID=&#123;rows.collapseID&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;headingID=&#123;rows.headingID&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accTitle=&#123;rows.accTitle&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accText=&#123;rows.accText&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;collapseThisID=&#123;rows.collapseThisID&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;collapseBtnWidth=&#123;rows.collapseBtnWidth&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
          <br />
          &nbsp;&nbsp;))&#125;
          <br />
          &lt;/div&gt;
        </p>

        <h4>Solitary Collapsable Item</h4>

        <CollapseSingle
          closedText={closedText}
          openedText={openedText}
          collapseBtnWidth={collapseBtnWidth}
          collapseID={this.state.collapseID}
          collapseText={this.state.collapseText}
        />
        <p className="mt-3">
          To create an instance of the above visibility toggler, use the
          following component call:
        </p>
        <p className="alert alert-secondary">
          &lt;CollapseSingle
          <br />
          &nbsp;&nbsp;closedText=&#123;closedText&#125;
          <br />
          &nbsp;&nbsp;openedText=&#123;openedText&#125;
          <br />
          &nbsp;&nbsp;collapseBtnWidth=&#123;collapseBtnWidth&#125;
          <br />
          &nbsp;&nbsp;collapseID=&#123;this.state.collapseID&#125;
          <br />
          &nbsp;&nbsp;collapseText=&#123;this.state.collapseText&#125;
          <br />
          /&gt;
        </p>
        <p>
          You will also need to create the following constants just after the
          start of the render method:
        </p>
        <p className="alert alert-secondary">
          const closedText = "Hide Info";
          <br />
          const openedText = "More Info";
          <br />
          const collapseBtnWidth = 80;
        </p>
        <p>
          The element lying directly below the toggle button will also need to
          have a margin set using the following css class: "mt-3". The button
          text on the accordion menu is created with css, as well as the
          changing of the button's colour.
        </p>
      </React.Fragment>
    );
  }
}

export default Collapse;
