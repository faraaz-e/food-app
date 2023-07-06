import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createElement (object) => renders => HTMLElement

const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
console.log(heading); // it is an object not an html element

// JSX (transpiled before it reaches the JS via Parcel - Babel[js compiler - converts jsx to react BTS])
// JSX => React.createElement => results Object => rendered => HTMLElement

const jsxHeading = (
  <h1 id="jsxHead" className="customheading">
    Hello JSX
  </h1>
);
console.log(jsxHeading); // this is an object not an html element

// React Functional Component

const TestComponent = () => {
  return <h1>Hello Test Functional Component</h1>;
};

const HeadingComponent = () => (
  <div id="container">
    {jsxHeading}
    {TestComponent()}
    <TestComponent />
    <TestComponent></TestComponent>
    <h1 className="heading"> Hello Functional Component </h1>
  </div>
);

/**
 * first letter of variable - uppercase
 * { } used to include normal javascript
 * < /> used to include functional components
 */


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); // after rendering an object it becomes html element on webpage

root.render(<HeadingComponent />); // way to render functional components (using tags </>)
