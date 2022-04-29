import React from "react";
import ReactDOM from "react-dom";
import SunburstAnyChart from "./SunburstAnyChart";
//import SunburstD3V4 from "./SunburstD3V4"
import ReactZoomableSun from "./ReactZoomableSun";
import SunWrapper from "./SunWrapper";

import "./styles.css";
function App() {
  return (
    <div className="App">
      <SunWrapper />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
