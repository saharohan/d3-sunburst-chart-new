import React from "react";
import data from "./data-color";
import Sunburst from "react-sunburst-d3-v4";

class SunburstD3V4 extends React.Component {
  onSelect(event) {
    console.log(event);
  }
  render() {
    return (
      <div className="xxxx">
        <Sunburst
          data={data}
          onSelect={this.onSelect}
          scale="linear"
          tooltipContent={
            <div
              class="sunburstTooltip"
              style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;"
            />
          }
          tooltip
          tooltipPosition="right"
          keyId="anagraph"
          width="480"
          height="400"
        />
      </div>
    );
  }
}
export default SunburstD3V4;
