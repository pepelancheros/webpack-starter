import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";

window.React = React;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>hola mundo</div>
  </React.StrictMode>
);
