import React from "react";

import AnyChart from "anychart-react";
import anychart from "anychart";

import "./styles.css";

var data = [
  {
    id: "ops",
    name: "Operation Summary",
    fill: "#fff",
    label: {
      fontColor: "#2a333d",
      fontWeight: "bold"
    }
  },
  {
    id: "running",
    parent: "ops",
    name: "Running",
    fill: "#C2E358"
  },
  {
    id: "stopped",
    parent: "ops",
    name: "Stopped",
    fill: "#F78608"
  },
  {
    id: "alarm-run",
    parent: "running",
    name: "Alarm",
    fill: "#9ED763"
  },
  {
    id: "operational",
    parent: "running",
    name: "Operational",
    fill: "#9ED763",
    value: 63
  },
  {
    id: "stand-by",
    parent: "running",
    name: "Stand-by",
    fill: "#9ED763",
    value: 18
  },
  {
    id: "medium",
    parent: "alarm-run",
    name: "Medium",
    fill: "#2C9E4B",
    value: 10
  },
  {
    id: "low",
    parent: "alarm-run",
    name: "Low",
    fill: "#2C9E4B",
    value: 89
  },
  {
    id: "fault",
    parent: "stopped",
    name: "Fault",
    fill: "#EE3711",
    value: 10
  },
  {
    id: "maintenance",
    parent: "stopped",
    name: "Maintenance",
    fill: "#EE3711",
    value: 2
  },
  {
    id: "alarm-stop",
    parent: "stopped",
    name: "Alarm",
    fill: "#EE3711"
  },
  {
    id: "hight",
    parent: "alarm-stop",
    name: "Hight",
    fill: "#E6172F",
    value: 2
  }
];

class SunburstAnyChart extends React.Component {
  constructor() {
    super();
    // makes tree from the data for the sample
    let dataTree = anychart.data.tree(data, "as-table");
    console.log("try", dataTree);

    // create sunburst chart
    let chart = anychart.sunburst(dataTree);

    // set calculation mode
    chart.calculationMode("parent-independent");

    // set chart title
    chart.title("Europe Population");

    // set custom palette
    chart.palette(["#0288d1", "#d4e157", "#ff6e40", "#f8bbd0"]);

    // format chart labels
    chart.labels().format("{%Name}\n{%Value}{scale:(1000000)(1)|( mln)}");

    // format chart tooltip
    chart.tooltip().format("{%Name}: {%Value}{scale:(1000000)(1)|( mln)}");

    // the fill specified in the data has priority
    // set point fill
    chart.fill(function() {
      return anychart.color.darken(this.parentColor, 0.15);
    });

    // set container id for the chart
    chart.container("container");

    // initiate chart drawing
    chart.draw();
    this.state = {
      chart: chart
    };
  }
  render() {
    return (
      <div>
        <AnyChart instance={this.state.chart} title="" />
      </div>
    );
  }
}

export default SunburstAnyChart;
