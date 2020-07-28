import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ScrollProgressRead from "react-scroll-progress-read";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ position: "fixed", zIndex: "1" }}>
      <ScrollProgressRead barColor="linear-gradient(124deg, rgba(203, 50, 84, 1) 18%, rgba(247, 0, 55, 1) 65%)" />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
