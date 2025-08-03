const App = () => {
  return React.createElement("div", { className: "test", "x-a": "v" }, React.createElement("h1", {}, "Hello World!"));
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
