import React, { Component } from "react";
import Menu from "../menu";
import ComponentsAndProps from "./componentsandprops";
import { Message } from "./message";
import { Response } from "./response";
import { SimpleButtonClass } from "./simplebuttonclass";
import { SimpleButtonHooks } from "./simplebuttonhooks";

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <React.Fragment>
      <div className="row" style={{ padding: 15 }}>
        <div
          className="UserInfo col-md-2"
          style={{
            backgroundColor: "#6e7f38",
            padding: 4,
            borderRadius: 6,
            overflow: "hidden"
          }}
        >
          <img
            className="img-fuid"
            style={{ width: "100%", height: "auto" }}
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
        </div>
        <div className="UserInfo col-md-10">
          <h4 className="UserInfo-name">{props.author.name}</h4>
          <div className="Comment-text">{props.text}</div>
          <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

const comment = {
  date: new Date(),
  text:
    "This is an example of how one can extract elements and separate the markup from the data that populates the structure of the component.",
  author: {
    name: "Blip",
    avatarUrl: "../../assets/images/avatar.jpg"
  }
};

class Components extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  alertme = () => {
    alert("You clicked on the button.");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Menu />
            </div>
            <div className="col-md-9">
              <h1>React Components</h1>
              <h2>Functional Components</h2>
              <p>This is the basic structure of a functional component:</p>
              <p className="alert alert-secondary">
                import React from "react";
                <br />
                <br />
                const sitename = "Reactor";
                <br />
                <br />
                function Components(props) &#123;
                <br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; sitename &#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                &#125;
                <br />
                <br />
                export default Components;
              </p>
              <p>
                Another name for a functional component is a "stateless
                component". This is because a functional component does not have
                a "state", unlike a class component, which has a state.
              </p>
              <hr />
              <h2>Class Components</h2>
              <p>This is the basic structure of a class component:</p>
              <p className="alert alert-secondary">
                import React, &#123; Component &#125; from "react";
                <br />
                <br />
                import Links from "../parts/links";
                <br />
                <br />
                class About extends Component &#123;
                <br />
                &nbsp;&nbsp;constructor() &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;super();
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sitename: "Reactor"
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                <br />
                &nbsp;&nbsp;render() &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Links /&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;);
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
                <br />
                <br />
                export default About;
              </p>
              <h3>Importing Class Components</h3>
              <p>
                Components can be made up of multiple components that create a
                nest of components. To import a component into another
                component, you need to first import it using the import
                statement as follows:
              </p>
              <p className="alert alert-secondary">
                import Links from "../parts/links";
              </p>
              <p>
                After importing the component you will add the following inside
                your component to include it inside your component to create a
                nested component as follows:
              </p>
              <p className="alert alert-secondary">&lt;Links /&gt;</p>
              <h3>Passing Down the State</h3>
              <p>
                If your nested component needs to have access to your state,
                which in this example is the sitename, then you will need to do
                the following:
              </p>
              <p className="alert alert-secondary">
                &lt;Links sitename=&#123; this.state.sitename &#125; /&gt;
              </p>
              <p>
                What this does is pass down the sitename to the child component,
                which in this case is the "Links" component, so that the child
                component has access to the parent component's state. To use
                this state in your child component, you will include the
                following to make it appear inside a paragraph as an example:
              </p>
              <p className="alert alert-secondary">
                &lt;p&gt;&#123; this.state.sitename &#125;&lt;/p&gt;
              </p>
              <p>
                If you are passing down your state to a functional component,
                you will use the following, replacing the word "state" with the
                word "props" as follows:
              </p>
              <p className="alert alert-secondary">
                &lt;p&gt;&#123; this.props.sitename &#125;&lt;/p&gt;
              </p>
              <h3>The Default Component</h3>
              <p>
                The example below demonstrates the use of multiple functions
                which all form part of the main functional component that
                outputs the final result. To understand the logic, there is a
                function named "Welcome", which receives "props" from the
                function named "Display Numbers". The function receiving the
                props, in this case the function named "Welcome", needs to have
                the word "props" inside the brackets after the function name as
                follows:
              </p>
              <p className="alert alert-secondary">
                function Welcome(props) &#123;
              </p>
              <p>
                This is so that the function can accept the properties from the
                function named "DisplayNumbers" in order for it to receive the
                data in that function, namely the "name" property. The "Welcome"
                function defines how the properties declared in the "Display
                Numbers" function will be rendered markup-wise. The third
                function, named "Component", is where the function is called
                using the following:
              </p>
              <p className="alert alert-secondary">
                &#123;DisplayNumbers()&#125;
              </p>
              <p>
                The "export default Components" line at the end is what
                determines which of the three functions will act as the function
                that will output the result of the three functions. The other
                two functions are children of the parent function, which in this
                case is the default function named "Components".
              </p>
              <p className="alert alert-secondary">
                import React from "react";
                <br />
                <br />
                function Welcome(props) &#123;
                <br />
                &nbsp;&nbsp;return &lt;h3&gt;Hello,
                &#123;props.name&#125;&lt;/h3&gt;;
                <br />
                &#125;
                <br />
                <br />
                function DisplayNumbers() &#123;
                <br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Welcome name="One" /&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Welcome name="Two" /&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Welcome name="Three"
                /&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                &#125;
                <br />
                <br />
                function Components() &#123;
                <br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;List of
                Names&lt;/h1&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;DisplayNumbers()&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                &#125;
                <br />
                <br />
                export default Components;
              </p>
              <p>
                The same logic would apply using class-based components instead
                of functional components. This is how one would do it using
                classes instead of functions:
              </p>
              <p className="alert alert-secondary">
                import React, &#123; Component &#125; from "react";
                <br />
                <br />
                class ListItem extends Component &#123;
                <br />
                &nbsp;&nbsp;render() &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return
                &lt;h3&gt;&#123;this.props.title&#125;&lt;/h3&gt;;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
                <br />
                <br />
                class RepeatComponents extends Component &#123;
                <br />
                &nbsp;&nbsp;render() &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ListItem
                title="One" /&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ListItem
                title="Two" /&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ListItem
                title="Three" /&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;);
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
                <br />
                <br />
                export default RepeatComponents;
              </p>
              <p>
                The idea behing the use of the default component is to allow one
                to break down our app into smaller components so that the code
                is easier to manage. For example, one would break up the app
                into various key elements based on the HTML5 tags. The most
                commonly used tags being &lt;nav&gt;, &lt;header&gt;,
                &lt;main&gt; and &lt;footer&gt;.
              </p>
              <hr />
              <h2>Nesting &amp; Importing Components</h2>
              <p>
                Below is a class for a student component which will have commomn
                elements used by another class for a teacher.
              </p>
              <p className="alert alert-secondary">
                export class Student &#123;
                <br />
                &nbsp;&nbsp;constructor(name) &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;this.name = name;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &nbsp;&nbsp;walk() &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;console.log("walk");
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
              </p>
              <p>
                This is the teacher component which uses some of the student's
                class attributes and is imported into the teacher's component.
              </p>
              <p className="alert alert-secondary">
                import &#123; Student &#125; from "./student";
                <br />
                <br />
                export class Subjects extends Student &#123;
                <br />
                &nbsp;&nbsp;constructor(name, subjects) &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;super(name);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;this.subjects = subjects;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &nbsp;&nbsp;listSubjects() &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;console.log("This is a list of
                subjects.");
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
                <br />
                <br />
                export default class Teacher extends Student &#123;
                <br />
                &nbsp;&nbsp;constructor(name, degree) &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;super(name);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;this.degree = degree;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &nbsp;&nbsp;teach() &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;console.log("Teaches the students.");
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
              </p>
              <p>
                The teacher's component has two classes, one is the teacher's
                default class and the other is a subclass of the teacher's
                class, namely the "Subjects" class. The "Student" class is
                imported into the "Teacher" class as it has elements in common
                that are used as well, namely the "name" attribute. To include
                these attirbutes in the two teacher's classes we have to add a
                constructor which mentions that these two classes will include
                the "name" attribute which comes from the student class in the
                constructor like this:
              </p>
              <p className="alert alert-secondary">
                &nbsp;&nbsp;constructor(name, degree) &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;super(name);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;this.degree = degree;
                <br />
                &nbsp;&nbsp;&#125;
              </p>
              <p>
                To import both these classes into another class, say a class for
                a school, one would do the following:
              </p>
              <p className="alert alert-secondary">
                import Teacher, &#123; Subjects &#125; from "./modules/teacher";
                <br />
                const teacher = new Teacher("Mrs Simpson", "Biologist");
                <br />
                const subjects = new Subjects();
                <br />
                <br />
                console.log(subjects);
                <br />
                console.log(teacher);
                <br />
                <br />
                subjects.listSubjects();
                <br />
                teacher.teach();
              </p>
              <p>
                You will see one declares the import function for the teacher as
                follows:
              </p>
              <p className="alert alert-secondary">
                import Teacher, &#123; Subjects &#125; from "./modules/teacher";
              </p>
              <p>
                The default class is declared and then the subclass "Subjects"
                is declared inside two curly brackets. If there was another
                subclass in the teacher's class called "Age", we would do the
                following:
              </p>
              <p className="alert alert-secondary">
                import Teacher, &#123; Subjects, Age &#125; from
                "./modules/teacher";
              </p>
              <p>
                The "Teacher" class and the "Student" class demonstrate the
                concept of creating modules in React. It is how we create
                various standalone components (modules) which make up the app.
                Breaking down an app into smaller standalone modules makes it
                easier to edit the app and if one is working with a team of
                developers there can be people working on parts of the main app
                without all of them having to be working on the same files or
                modules.
              </p>
              <hr />
              <h2>Extracting Components</h2>
              <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author}
              />
              <h3>The Basic Structure</h3>
              <p>
                Below is how one would separate the information from the markup
                structure. There are two functions, one that creates the current
                date, namely the "formatDate()" function, and then the markup
                generating function named "Comment(props)". The "props", short
                for properties, is the information which is then fed into the
                "return" method to generate the structure based on the data
                which is fed to the "Comment" function. The data in this example
                is contained in the const named "comment". Then finally to
                display the markup with the data one then puts the component
                call in the relevant place on the page as follows:
              </p>
              <p className="alert alert-secondary">
                &lt;Comment
                <br />
                &nbsp;&nbsp;date=&#123;comment.date&#125;
                <br />
                &nbsp;&nbsp;text=&#123;comment.text&#125;
                <br />
                &nbsp;&nbsp;author=&#123;comment.author&#125;
                <br />
                /&gt;
              </p>
              <p>This is the what the final code would look like:</p>
              <p className="alert alert-secondary">
                function formatDate(date) &#123;
                <br />
                &nbsp;&nbsp;return date.toLocaleDateString();
                <br />
                &#125;
                <br />
                <br />
                function Comment(props) &#123;
                <br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&lt;div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&#123;props.author.avatarUrl&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&#123;props.author.name&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;&#123;props.author.name&#125;&lt;/h4&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;&#123;props.text&#125;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;&#123;formatDate(props.date)&#125;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                &#125;
                <br />
                <br />
                const comment = &#123;
                <br />
                &nbsp;&nbsp;date: new Date(),
                <br />
                &nbsp;&nbsp;text:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;"This is an example of how one can
                extract elements and separate the markup from the data that
                populates the structure of the component.",
                <br />
                &nbsp;&nbsp;author: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;name: "Blip",
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;avatarUrl:
                "../../assets/images/avatar.jpg"
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;;
                <br />
                <br />
                &lt;Comment
                <br />
                &nbsp;&nbsp;date=&#123;comment.date&#125;
                <br />
                &nbsp;&nbsp;text=&#123;comment.text&#125;
                <br />
                &nbsp;&nbsp;author=&#123;comment.author&#125;
                <br />
                /&gt;
              </p>
              <p>
                The advantage of using components built in this way is that you
                can reuse these components on other projects. You can basically
                have a complete user interface built with components that you
                can then just plug into another project without having to
                rebuild these components from scratch.
              </p>
              <hr />
              <h2>Material UI</h2>
              <p>
                For a complete set of pre-built components one can look at using
                "Material UI", which has react components you can use that can
                form the base structure of your app. View the{" "}
                <a href="https://material-ui.com" target="material-ui">
                  Material UI
                </a>{" "}
                website for more info.
              </p>
              <hr />
              <p>
                To find out more about using components, you can see the&nbsp;
                <a
                  href="https://reactjs.org/docs/components-and-props.html"
                  target="states-and-props"
                >
                  documentation
                </a>
                &nbsp;on the React website.
              </p>
              <ComponentsAndProps />
              <Message type="Heading" title="Creating a Messages Component" />
              <p>
                This is a function to output a message component. The message
                component also allows you to create a heading instead of a
                message. If the type of message is set to heading, then a
                heading is output, if no type is specified, then the default
                message format is used. There is also a built in switch function
                added, which determines what background color is used for the
                message. If the name of Mark is used, then a className of "alert
                alert-warning" is used, if the name Andrew is used, then a
                className of "alert alert-info" is used. If the names "Andrew"
                or "Mark" are not used as names, then the defaul className is
                used "alert alert-secondary".
              </p>
              <h4>The Messages Component:</h4>
              <p>Create a file named message.jsx and use the following code:</p>
              <p className="alert alert-secondary">
                import React from "react";
                <br />
                <br />
                export function Message(&#123; type, title, name, message
                &#125;) &#123;
                <br />
                &nbsp;&nbsp;let classes;
                <br />
                &nbsp;&nbsp;switch (name) &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;case "Mark":
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;classes = "alert
                alert-warning mb-0";
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;case "Andrew":
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;classes = "alert alert-info
                mb-0";
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;default:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;classes = "alert
                alert-secondary mb-0";
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                <br />
                &nbsp;&nbsp;if (type === "Heading") &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;&#123;title&#125;&lt;/h2&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;);
                <br />
                &nbsp;&nbsp;&#125; else &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                className="card mt-3 mb-3"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                className="card-body"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4
                className="card-title"&gt;&#123;name&#125;'s Message:&lt;/h4&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                className="card-text"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p
                className=&#123;classes&#125;&gt;&#123;message&#125;&lt;/p&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;);
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
              </p>
              <h4>The Response Component:</h4>
              <p>
                Create another file named Response.jsx and use the following
                code:
              </p>
              <p className="alert alert-secondary">
                import React from "react";
                <br />
                <br />
                export function Response(&#123; name, response &#125;) &#123;
                <br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card mt-3
                mb-3 ml-3 mr-3"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                className="card-body"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p
                className="card-text"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;name&#125;:
                &#123;response&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                &#125;
              </p>
              <p>To display a simple heading use:</p>
              <p className="alert alert-secondary">
                &lt;Message type="Heading" title="Using Components Example"
                /&gt;
              </p>
              <p>To display a message:</p>
              <p className="alert alert-secondary">
                &lt;Message
                <br />
                &nbsp;&nbsp;name="Mark"
                <br />
                &nbsp;&nbsp;message="The aliens have just landed outside my
                town."
                <br />
                /&gt;
              </p>
              <p>To display a response:</p>
              <p className="alert alert-secondary">
                &lt;Response
                <br />
                &nbsp;&nbsp;name="Andrew"
                <br />
                &nbsp;&nbsp;response="Do they seem aggressive or peaceful?"
                <br />
                /&gt;
              </p>
              <Message
                name="Mark"
                message="The aliens have just landed outside my town."
              />
              <Response
                name="Andrew"
                response="Do they seem aggressive or peaceful?"
              />
              <Response
                name="Mark"
                response="This does not look good, rather disturbing."
              />
              <Message
                name="Andrew"
                message="Mark messaged me to tell me that aliens had just landed outside his town."
              />
              <Response
                name="Jessica"
                response="That is crazy, what do they look like?"
              />
              <Message
                name="Jessica"
                message="Andrew messaged me to tell me that aliens had just landed outside Mark's town."
              />
              <h2>Stateful Components</h2>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>Question</th>
                    <th>Answer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>What are they?</td>
                    <td>
                      Components are the key building blocks in React
                      applications. Stateful components have their own data that
                      can be used to alter the content the component renders.
                    </td>
                  </tr>
                  <tr>
                    <td>Why are they useful?</td>
                    <td>
                      Stateful components make it easier to keep track of the
                      application state provided by each component and provide
                      the means to alter the data values and reflect the change
                      in the content presented to the user.
                    </td>
                  </tr>
                  <tr>
                    <td>How are they used?</td>
                    <td>
                      Stateful components are defined by using a class or by
                      adding hooks to a functional component.
                    </td>
                  </tr>
                  <tr>
                    <td>Are there any pitfalls or limitations?</td>
                    <td>
                      Care must be taken to ensure that the state data is
                      modified correctly, as described in the "Modifying State
                      Data" section of these notes.
                    </td>
                  </tr>
                  <tr>
                    <td>Are there any alternatives?</td>
                    <td>
                      Components are the key building blocks in a React
                      application, and there is no way to avoid their use. There
                      are alternatives to props that can be useful in larger and
                      more complex projects, as described later.
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th style={{ width: "40%" }}>Problem</th>
                    <th style={{ width: "60%" }}>Solution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Add state data to a component</td>
                    <td>
                      Define a class whose constructor sets the state property
                      or call the useState function to create a property and
                      function for a single state property
                    </td>
                  </tr>
                  <tr>
                    <td>Modify state data</td>
                    <td>
                      Call the setState function or call the function returned
                      by useState
                    </td>
                  </tr>
                  <tr>
                    <td>Share data between components</td>
                    <td>
                      Lift the state data to an ancestor component and
                      distribute it using props
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Define prop types and default values in a class-based
                      component
                    </td>
                    <td>
                      Apply the properties to the class or define static
                      properties within the class
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* START STATEFUL */}
              <h4>A Stateful Component Example</h4>
              <p>
                A stateful component has its own data that influences the
                content the component renders. This data, which is known as
                state data, is separate from the parent component and the props
                it provides. In this example the button receives props from the
                parent component, but also has its own state data, which for
                this example is the hasButtonBeenClicked state property. When
                the user first clicks on the button it alters the component's
                state and sets the hasButtonBeenClicked property to true and
                adds the word "Clicked" to the button text.
              </p>
              <p>
                <SimpleButtonClass
                  className="secondary"
                  disabled="false"
                  text="Click Me"
                  callback={this.alertme}
                />
              </p>
              <p>
                Below is the code used to create the SimpleButtonClass component
                used in the above example of a stateful component:
              </p>
              <p className="alert alert-secondary">
                import React, &#123; Component &#125; from "react";
                <br />
                <br />
                export class SimpleButtonClass extends Component &#123;
                <br />
                &nbsp;&nbsp;constructor(props) &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;super(props);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hasButtonBeenClicked: false,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter: 0
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                <br />
                &nbsp;&nbsp;onMouseDown = () => &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123;
                hasButtonBeenClicked: true &#125;);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; counter:
                this.state.counter + 1 &#125;);
                <br />
                &nbsp;&nbsp;&#125;;
                <br />
                <br />
                &nbsp;&nbsp;render() &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;this.props.callback&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onMouseDown=&#123;this.onMouseDown&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&#123;`btn
                btn-&#36;{/**/}&#123;this.props.className&#125;`&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disabled=&#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.props.disabled
                === true || this.props.disabled === "true"
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.text&#125;
                (&#123;this.state.counter&#125;)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.hasButtonBeenClicked
                &amp;&amp; <span>- Clicked</span>&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;);
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
              </p>
              <p>
                To use the component, add the following component call to the
                component using the SimpleButtonClass component:
              </p>
              <p className="alert alert-secondary">
                &lt;SimpleButtonClass
                <br />
                &nbsp;&nbsp;text="Click Me"
                <br />
                &nbsp;&nbsp;className="secondary"
                <br />
                &nbsp;&nbsp;disabled="false"
                <br />
                &nbsp;&nbsp;callback=&#123;this.alertme&#125;
                <br />
                /&gt;
              </p>
              <h4>A Stateful Functional Component Using Hooks</h4>
              <p>
                In the previous exampe we create a stateful component using a
                class. In this example we will create the same component, but
                using a functional component that relies on hooks to create a
                stateful functional component.
              </p>
              <p>
                <SimpleButtonHooks
                  text="Click Me"
                  className="secondary"
                  disabled="false"
                  callback={this.alertme}
                />
              </p>
              <p>This is the code for the stateful functional component:</p>
              <p className="alert alert-secondary">
                import React, &#123; useState &#125; from "react";
                <br />
                <br />
                export function SimpleButtonHooks(props) &#123;
                <br />
                &nbsp;&nbsp;const [counter, setCounter] = useState(0);
                <br />
                &nbsp;&nbsp;const [hasButtonBeenClicked,
                setHasButtonBeenClicked] = useState(false);
                <br />
                &nbsp;&nbsp;const handleClick = () =&gt; &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;setCounter(counter + 1);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;setHasButtonBeenClicked(true);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;props.callback();
                <br />
                &nbsp;&nbsp;&#125;;
                <br />
                <br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;handleClick&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&#123;`btn
                btn-&#36;
                {/**/}&#123;props.className&#125;`&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disabled=&#123;props.disabled
                === "true" || props.disabled === true&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.text&#125;
                (&#123;counter&#125;) &#123;hasButtonBeenClicked &amp;&amp;
                &lt;span&gt;- Clicked&lt;/span&gt;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                &#125;
              </p>
              <p>
                To use the component, add the following component call to the
                component using the SimpleButtonHooks component:
              </p>
              <p className="alert alert-secondary">
                &lt;SimpleButtonHooks
                <br />
                &nbsp;&nbsp;text="Click Me"
                <br />
                &nbsp;&nbsp;className="secondary"
                <br />
                &nbsp;&nbsp;disabled="false"
                <br />
                &nbsp;&nbsp;callback=&#123;this.alertme&#125;
                <br />
                /&gt;
              </p>
            </div>
          </div>
        </div>
        {/* END STATEFUL */}
      </React.Fragment>
    );
  }
}

export default Components;
