import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const dumbComponent = () => {
  return React.createElement("div", {}, [
    React.createElement("p", {}, "Hello World! 1"),
    React.createElement("p", {}, "Hello World! 2"),
    React.createElement("p", {}, "Hello World! 3"),
    React.createElement("p", {}, "Hello World! 4"),
  ]);
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
      React.createElement(dumbComponent),
      React.createElement(dumbComponent),
      React.createElement(dumbComponent),
      React.createElement(dumbComponent),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
