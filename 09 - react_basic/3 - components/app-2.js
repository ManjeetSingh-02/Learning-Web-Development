import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const reuseableComponent = (props) => {
  return React.createElement("div", {}, [React.createElement("p", {}, props.text), React.createElement("p", {}, props.count)]);
};

const App = () => {
  return React.createElement(
    "div",
    {
      className: "test",
      "x-a": "v",
    },
    [
      React.createElement("h1", {}, "Multiple Hello Worlds"),
      React.createElement(reuseableComponent, {
        text: "Hello World! 1",
        count: 1,
      }),
      React.createElement(reuseableComponent, {
        text: "Hello World! 2",
        count: 2,
      }),
      React.createElement(reuseableComponent, {
        text: "Hello World! 3",
        count: 3,
      }),
      React.createElement(reuseableComponent, {
        text: "Hello World! 4",
        count: 4,
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
