import React, { Component } from "react";
import Title from "../modules/title";

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
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

  render() {
    const title = "Using Components";
    return (
      <React.Fragment>
        <div className="container" style={{ marginTop: 0 }}>
          <Title title={title} />
          <p>
            One has two main types of components, functional components and
            class components. Both of these components start with an import
            statement and an export statement, but the import statement for each
            of these two types of components is different.
          </p>
          <hr />
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
            Another name for a functional component is a "stateless component".
            This is because a functional component does not have a "state",
            unlike a class component, which has a state.
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
            Components can be made up of multiple components that create a nest
            of components. To import a component into another component, you
            need to first import it using the import statement as follows:
          </p>
          <p className="alert alert-secondary">
            import Links from "../parts/links";
          </p>
          <p>
            After importing the component you will add the following inside your
            component to include it inside your component to create a nested
            component as follows:
          </p>
          <p className="alert alert-secondary">&lt;Links /&gt;</p>
          <h3>Passing Down the State</h3>
          <p>
            If your nested component needs to have access to your state, which
            in this example is the sitename, then you will need to do the
            following:
          </p>
          <p className="alert alert-secondary">
            &lt;Links sitename=&#123; this.state.sitename &#125; /&gt;
          </p>
          <p>
            What this does is pass down the sitename to the child component,
            which in this case is the "Links" component, so that the child
            component has access to the parent component's state. To use this
            state in your child component, you will include the following to
            make it appear inside a paragraph as an example:
          </p>
          <p className="alert alert-secondary">
            &lt;p&gt;&#123; this.state.sitename &#125;&lt;/p&gt;
          </p>
          <p>
            If you are passing down your state to a functional component, you
            will use the following, replacing the word "state" with the word
            "props" as follows:
          </p>
          <p className="alert alert-secondary">
            &lt;p&gt;&#123; this.props.sitename &#125;&lt;/p&gt;
          </p>
          <h3>The Default Component</h3>
          <p>
            The example below demonstrates the use of multiple functions which
            all form part of the main functional component that outputs the
            final result. To understand the logic, there is a function named
            "Welcome", which receives "props" from the function named "Display
            Numbers". The function receiving the props, in this case the
            function named "Welcome", needs to have the word "props" inside the
            brackets after the function name as follows:
          </p>
          <p className="alert alert-secondary">
            function Welcome(props) &#123;
          </p>
          <p>
            This is so that the function can accept the properties from the
            function named "DisplayNumbers" in order for it to receive the data
            in that function, namely the "name" property. The "Welcome" function
            defines how the properties declared in the "Display Numbers"
            function will be rendered markup-wise. The third function, named
            "Component", is where the function is called using the following:
          </p>
          <p className="alert alert-secondary">&#123;DisplayNumbers()&#125;</p>
          <p>
            The "export default Components" line at the end is what determines
            which of the three functions will act as the function that will
            output the result of the three functions. The other two functions
            are children of the parent function, which in this case is the
            default function named "Components".
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Welcome name="Three" /&gt;
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
            The same logic would apply using class-based components instead of
            functional components. This is how one would do it using classes
            instead of functions:
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
            The idea behing the use of the default component is to allow one to
            break down our app into smaller components so that the code is
            easier to manage. For example, one would break up the app into
            various key elements based on the HTML5 tags. The most commonly used
            tags being &lt;nav&gt;, &lt;header&gt;, &lt;main&gt; and
            &lt;footer&gt;.
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
            This is the teacher component which uses some of the student's class
            attributes and is imported into the teacher's component.
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
            &nbsp;&nbsp;&nbsp;&nbsp;console.log("This is a list of subjects.");
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
            default class and the other is a subclass of the teacher's class,
            namely the "Subjects" class. The "Student" class is imported into
            the "Teacher" class as it has elements in common that are used as
            well, namely the "name" attribute. To include these attirbutes in
            the two teacher's classes we have to add a constructor which
            mentions that these two classes will include the "name" attribute
            which comes from the student class in the constructor like this:
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
            To import both these classes into another class, say a class for a
            school, one would do the following:
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
            The default class is declared and then the subclass "Subjects" is
            declared inside two curly brackets. If there was another subclass in
            the teacher's class called "Age", we would do the following:
          </p>
          <p className="alert alert-secondary">
            import Teacher, &#123; Subjects, Age &#125; from
            "./modules/teacher";
          </p>
          <p>
            The "Teacher" class and the "Student" class demonstrate the concept
            of creating modules in React. It is how we create various standalone
            components (modules) which make up the app. Breaking down an app
            into smaller standalone modules makes it easier to edit the app and
            if one is working with a team of developers there can be people
            working on parts of the main app without all of them having to be
            working on the same files or modules.
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
            generating function named "Comment(props)". The "props", short for
            properties, is the information which is then fed into the "return"
            method to generate the structure based on the data which is fed to
            the "Comment" function. The data in this example is contained in the
            const named "comment". Then finally to display the markup with the
            data one then puts the component call in the relevant place on the
            page as follows:
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
            &nbsp;&nbsp;&nbsp;&nbsp;"This is an example of how one can extract
            elements and separate the markup from the data that populates the
            structure of the component.",
            <br />
            &nbsp;&nbsp;author: &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;name: "Blip",
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;avatarUrl: "../../assets/images/avatar.jpg"
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
            The advantage of using components built in this way is that you can
            reuse these components on other projects. You can basically have a
            complete user interface built with components that you can then just
            plug into another project without having to rebuild these components
            from scratch.
          </p>
          <hr />
          <h2>Material UI</h2>
          <p>
            For a complete set of pre-built components one can look at using
            "Material UI", which has react components you can use that can form
            the base structure of your app. View the{" "}
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
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Components;
