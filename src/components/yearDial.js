import * as d3 from "npm:d3";

export function yearDial({min = 2000, max = 2024, value = 2015, label = "Release year"} = {}) {
  const width = 140, height = 140, r = 50;
  
  const form = document.createElement("form");
  form.style.display = "inline-flex";
  form.style.flexDirection = "column";
  form.style.alignItems = "center";
  form.style.gap = "4px";
  form.style.fontSize = "12px";
  
  const labelDiv = document.createElement("div");
  labelDiv.style.fontWeight = "600";
  labelDiv.style.marginBottom = "4px";
  labelDiv.textContent = label;
  form.appendChild(labelDiv);
  
  const hidden = document.createElement("input");
  hidden.name = "yearDial";
  hidden.type = "range";
  hidden.min = min;
  hidden.max = max;
  hidden.value = value;
  hidden.style.display = "none";
  form.appendChild(hidden);
  
  // *** Expose initial value on the form itself ***
  let currentValue = value;
  form.value = currentValue;

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .style("width", "120px")
    .style("height", "120px")
    .style("cursor", "pointer");
    
  const g = svg.append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);
    
  g.append("circle")
    .attr("r", r + 10)
    .attr("fill", "#f5f5ff")
    .attr("stroke", "#ccc");
    
  const angleScale = d3.scaleLinear()
    .domain([min, max])
    .range([-Math.PI * 0.75, Math.PI * 0.75]);
    
  const tickVals = d3.range(min, max + 1, 5);
  g.selectAll(".tick").data(tickVals).join("line")
    .attr("class", "tick")
    .attr("x1", d => (r + 4) * Math.cos(angleScale(d)))
    .attr("y1", d => (r + 4) * Math.sin(angleScale(d)))
    .attr("x2", d => (r + 10) * Math.cos(angleScale(d)))
    .attr("y2", d => (r + 10) * Math.sin(angleScale(d)))
    .attr("stroke", "#aaa")
    .attr("stroke-width", 1);
    
  const labelText = g.append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr("font-size", 16)
    .attr("font-weight", 600);
    
  const knob = g.append("circle")
    .attr("r", 6)
    .attr("fill", "#444");
  
  function render() {
    const a = angleScale(currentValue);
    knob
      .attr("cx", r * Math.cos(a))
      .attr("cy", r * Math.sin(a));
    labelText.text(currentValue);

    // *** Keep form.value in sync so Generators.input(form) sees it ***
    form.value = currentValue;
  }
  
  render();
  
  function setFromEvent(event) {
    const [x, y] = d3.pointer(event, g.node());
    const angle = Math.atan2(y, x); // -PI..PI
    const minA = -Math.PI * 0.75;
    const maxA = Math.PI * 0.75;
    const clamped = Math.max(minA, Math.min(maxA, angle));
    const t = (clamped - minA) / (maxA - minA);
    const raw = min + t * (max - min);
    currentValue = Math.round(raw);

    hidden.value = currentValue;

    // *** Update form.value and emit input on the form itself ***
    form.value = currentValue;
    form.dispatchEvent(new Event("input", { bubbles: true }));

    render();
  }
  
  svg.on("pointerdown", event => {
    setFromEvent(event);
    svg.on("pointermove", setFromEvent);
    window.addEventListener("pointerup", () => svg.on("pointermove", null), { once: true });
  });
  
  form.appendChild(svg.node());
  
  return form;
}
