import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Notify from "./Components/KitUI/notify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Notify />
    <App />
  </React.StrictMode>
);