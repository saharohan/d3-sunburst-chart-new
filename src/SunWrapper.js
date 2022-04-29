import ReactDOM from "react-dom";
import SunburstChart from "./SunburstChart";
import Sunburst from "sunburst-chart";
import data from "./data-color";
import React, { useState, useEffect, useRef } from "react";

function SunWrapper() {
  const ref = useRef();
  useEffect(() => {
    // U
    Sunburst()
      .data(data)
      .label("name")
      .size("size")
      .color("color")
      .width("600")
      .tooltipContent((d, node) => `<i>${node.value}</i>`)(ref.current);
  });
  // set el height and width etc.

  console.log("node", ref);
  return (
    <div>
      <SunburstChart ref={ref} />
    </div>
  );
}

export default SunWrapper;
