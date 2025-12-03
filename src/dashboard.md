---
theme: dashboard
title: Streaming Score Bias Dashboard
toc: false
---
<style>
/* Fix text colors in dark filter panel */
.card label {
  color: #fff !important;
}
.card input[type="checkbox"] + label,
.card input[type="radio"] + label {
  color: #fff !important;
}
.card input {
  color: #fff !important;
}
/* Fix Observable input labels */
.observablehq label {
  color: #fff !important;
}
.observablehq input[type="range"] {
  color: #fff !important;
}
.observablehq input[type="number"] {
  color: #000 !important;
  background: #fff !important;
  border: 1px solid #444 !important;
  border-radius: 4px !important;
  padding: 4px 8px !important;
  font-size: 12px !important;
  font-weight: 600 !important;
}
/* Fix any remaining dark text */
.card * {
  color: inherit;
}
/* Beautiful Year Dial Enhancement */
.year-dial-container {
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  padding: 16px;
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Make the white circle brighter */
.year-dial-container circle[fill="white"],
.year-dial-container circle[fill="#fff"] {
  fill: #ffffff !important;
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.4));
}


.year-dial-container text {
  font-weight: 700 !important;
  font-size: 22px !important;
  fill: #0275D8 !important;
  filter: drop-shadow(0 0 12px rgba(2, 117, 216, 0.7));
}

/* Style the dial circle */
.year-dial-container circle[fill="white"] {
  fill: #ffffff;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
}

/* Style the dial track */
.year-dial-container circle[stroke] {
  stroke: rgba(255, 255, 255, 0.15) !important;
  stroke-width: 2 !important;
}


/* Style the active arc/path if it exists */
.year-dial-container path {
  stroke: #0275D8 !important;
  filter: drop-shadow(0 0 6px rgba(2, 117, 216, 0.6));
}

/* Style the handle/dot */
.year-dial-container circle[r="8"],
.year-dial-container circle[r="6"] {
  fill: #0275D8 !important;
  stroke: #fff !important;
  stroke-width: 3 !important;
  filter: drop-shadow(0 3px 10px rgba(2, 117, 216, 0.8));
  cursor: grab;
  transition: all 0.2s ease;
}
.year-dial-container circle[r="8"]:active,
.year-dial-container circle[r="6"]:active {
  cursor: grabbing;
  filter: drop-shadow(0 4px 14px rgba(2, 117, 216, 1));
}

.year-dial-container circle[r="8"]:hover,
.yearsure-dial-container circle[r="6"]:hover {
  filter: drop-shadow(0 3px 12px rgba(2, 117, 216, 0.8));
  transform: scale(1.1);
}
/* Add subtle label styling */
.year-dial-container + * {
  margin-top: 8px;
}
/* Fix the "Release year" label text */
.year-dial-container label,
.year-dial-container .observablehq--inspect label,
.year-dial-container form > label {
  color: rgba(255, 255, 255, 0.6) !important;
  font-size: 10px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
}
/* Make sure the year number in the circle stays blue */
.year-dial-container svg text {
  fill: #0275D8 !important;
  font-weight: 700 !important;
  filter: drop-shadow(0 0 12px rgba(2, 117, 216, 0.7));
}
/* Beautiful range slider styling */
.observablehq input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, #0275D8 0%, #0275D8 var(--value-percent), #3a3a3a var(--value-percent), #3a3a3a 100%);
  outline: none;
}

.observablehq input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0275D8, #0a9eff);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(2, 117, 216, 0.4);
  border: 2px solid #fff;
  transition: all 0.2s ease;
}

.observablehq input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.15);
  box-shadow: 0 3px 12px rgba(2, 117, 216, 0.6);
}

.observablehq input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0275D8, #0a9eff);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(2, 117, 216, 0.4);
  border: 2px solid #fff;
  transition: all 0.2s ease;
}

.observablehq input[type="range"]::-moz-range-thumb:hover {
  transform: scale(1.15);
  box-shadow: 0 3px 12px rgba(2, 117, 216, 0.6);
}

/* Style the range input container */
.observablehq--inspect input[type="range"] {
  margin: 8px 0;
}

/* Number input styling */
.observablehq [type="number"] {
  min-width: 70px !important;
  text-align: center !important;
}
/* Genre grid layout */
.genre-grid-container .observablehq--inspect {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 2px 4px !important;
  font-size: 10px !important;
}

.genre-grid-container .observablehq--inspect label {
  display: flex !important;
  align-items: center !important;
  gap: 4px !important;
  margin: 0 !important;
  padding: 3px 2px !important;
  white-space: nowrap !important;
  font-size: 10px !important;
}

.genre-grid-container .observablehq--inspect input[type="checkbox"] {
  margin: 0 !important;
  flex-shrink: 0 !important;
}
/* Volume-style vote control */
.vote-control-container {
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  padding: 12px;
  border: 1px solid rgba(255,255,255,0.1);
}

.vote-control-label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 10px;
  opacity: 0.9;
}

.vote-control-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.vote-btn {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.2);
  background: linear-gradient(135deg, rgba(2, 117, 216, 0.2), rgba(2, 117, 216, 0.1));
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  user-select: none;
}

.vote-btn:hover {
  background: linear-gradient(135deg, rgba(2, 117, 216, 0.4), rgba(2, 117, 216, 0.2));
  border-color: rgba(255,255,255,0.4);
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(2, 117, 216, 0.3);
}

.vote-btn:active {
  transform: scale(0.95);
}

.vote-display {
  flex: 1;
  background: rgba(0,0,0,0.3);
  border-radius: 6px;
  padding: 8px 12px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.1);
}

.vote-number {
  font-size: 16px;
  font-weight: 700;
  color: #0275D8;
  text-shadow: 0 0 10px rgba(2, 117, 216, 0.5);
}

.vote-bar-container {
  height: 6px;
  background: rgba(255,255,255,0.1);
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

.vote-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #0275D8, #0a9eff);
  border-radius: 3px;
  transition: width 0.3s ease;
  box-shadow: 0 0 8px rgba(2, 117, 216, 0.6);
}

.vote-bar-container:hover .vote-bar-fill {
  box-shadow: 0 0 12px rgba(2, 117, 216, 0.8);
}
/* Modern Platform Checkboxes */
.platform-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.platform-checkbox {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.platform-checkbox:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.2);
  transform: translateX(2px);
}

.platform-checkbox input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 5px;
  margin-right: 12px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.platform-checkbox input[type="checkbox"]:checked {
  background: linear-gradient(135deg, #0275D8, #0a9eff);
  border-color: #0275D8;
  box-shadow: 0 0 10px rgba(2, 117, 216, 0.5);
}

.platform-checkbox input[type="checkbox"]:checked::after {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.platform-label {
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  flex: 1;
}

.platform-color-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: auto;
  box-shadow: 0 0 8px currentColor;
}

/* Modern Radio Buttons for Visualization */
.viz-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
/* Force all text in year dial container to be white/light */
.year-dial-container * {
  color: rgba(255, 255, 255, 0.7) !important;
}
.viz-radio {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.viz-radio:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.2);
}

.viz-radio.selected {
  background: linear-gradient(135deg, rgba(2, 117, 216, 0.15), rgba(2, 117, 216, 0.05));
  border-color: #0275D8;
  box-shadow: 0 0 12px rgba(2, 117, 216, 0.3);
}

.viz-radio input[type="radio"] {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  margin-right: 12px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.viz-radio input[type="radio"]:checked {
  border-color: #0275D8;
  background: rgba(2, 117, 216, 0.2);
}

.viz-radio input[type="radio"]:checked::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0275D8, #0a9eff);
  box-shadow: 0 0 8px rgba(2, 117, 216, 0.8);
}

.viz-label {
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  line-height: 1.3;
}

/* Section Headers */
.filter-section-header {
  font-size: 10px;
  font-weight: 700;
  color: rgba(255,255,255,0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
  margin-top: 16px;
}

.filter-section-header:first-child {
  margin-top: 0;
}
/* Compact genre checkbox grid */
.observablehq--inspect label {
  display: flex !important;
  align-items: center;
  gap: 4px;
  margin: 0 !important;
  padding: 2px 0;
  white-space: nowrap;
}

.observablehq--inspect input[type="checkbox"] {
  margin: 0 !important;
}
</style>
<!-- <style>
/* Fix text colors in dark filter panel */
.card label {
  color: #fff !important;
}
.card input[type="checkbox"] + label,
.card input[type="radio"] + label {
  color: #fff !important;
}
.card input {
  color: #fff !important;
}
/* Fix Observable input labels */
.observablehq label {
  color: #fff !important;
}
.observablehq input[type="range"] {
  color: #fff !important;
}
.observablehq input[type="number"] {
  color: #000 !important;
}
/* Fix any remaining dark text */
.card * {
  color: inherit;
}
</style> -->
# Dashboard
```js
// Load and clean data
const amazon_raw  = await FileAttachment("amazon_titles.csv").csv({typed: true});
const netflix_raw = await FileAttachment("netflix_titles.csv").csv({typed: true});
const hulu_raw    = await FileAttachment("hulu_titles.csv").csv({typed: true});
const disney_raw  = await FileAttachment("disney_titles.csv").csv({typed: true});

// First, update your data cleaning to parse genres
function clean(row, platform) {
  const release_year = +row.release_year;
  const imdb_score   = +row.imdb_score;
  const tmdb_score   = +row.tmdb_score;
  const imdb_votes   = +row.imdb_votes;
  
  // Parse genres from string format "['genre1', 'genre2']" to array
  const genres = row.genres 
    ? row.genres.replace(/[\[\]']/g, '').split(',').map(g => g.trim())
    : [];

  return {
    title: row.title,
    release_year,
    imdb_score,
    tmdb_score,
    imdb_votes,
    platform,
    genres: genres,
    primary_genre: genres[0] || 'Unknown',
    is_amazon: platform === "Amazon" && release_year >= 2013,
    score_diff: imdb_score - tmdb_score,
    log_votes: Math.log10((imdb_votes || 0) + 1)
  };
}

const movies_all = [
  ...amazon_raw.map(d => clean(d, "Amazon")),
  ...netflix_raw.map(d => clean(d, "Netflix")),
  ...hulu_raw.map(d => clean(d, "Hulu")),
  ...disney_raw.map(d => clean(d, "Disney+"))
];

const movies = movies_all.filter(d =>
  d.release_year >= 2000 &&
  isFinite(d.imdb_score) && d.imdb_score > 0 &&
  isFinite(d.tmdb_score) && d.tmdb_score > 0
);
```

```js
// Import the year dial component
import {yearDial} from "./components/yearDial.js";

// Create input controls
const platformInput = Inputs.checkbox(
  ["Amazon", "Netflix", "Hulu", "Disney+"],
  {
    label: "Platforms",
    value: ["Amazon", "Netflix", "Hulu", "Disney+"]
  }
);

const vizTypeInput = Inputs.radio(
  ["Bias Detector (Scatter)", "Quality Control (Box Plot)", "Genre Analysis"],
  {
    label: "Visualization",
    value: "Bias Detector (Scatter)"
  }
);

// Create custom grid layout for genres
const genreFilterInput = (() => {
  const genres = [
    "action", "animation", "comedy", "crime", "documentation", 
    "drama", "european", "family", "fantasy", "history", 
    "horror", "music", "reality", "romance", "scifi", 
    "sport", "thriller", "war", "western"
  ];
  
  const form = html`<form style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px 8px; font-size: 11px;">
    ${genres.map(genre => html`<label style="display: flex; align-items: center; gap: 6px; cursor: pointer; padding: 2px 0;">
      <input type="checkbox" name="genre" value="${genre}" style="margin: 0; cursor: pointer;">
      <span style="color: #fff;">${genre.charAt(0).toUpperCase() + genre.slice(1)}</span>
    </label>`)}
  </form>`;
  
  form.addEventListener('input', () => {
    const checked = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'))
      .map(input => input.value);
    form.value = checked;
    form.dispatchEvent(new Event('input', {bubbles: true}));
  });
  
  form.value = [];
  return form;
})();
const genreSubTypeInput = Inputs.radio(
  ["Score Bias (Δ)", "IMDb Scores", "TMDb Scores"],
  {
    label: "Genre View",
    value: "Score Bias (Δ)"
  }
);
const yearDialInput = yearDial({
  min: 2000,
  max: 2024,
  value: 2015,
  label: "Release year"
});

// Create a custom volume-style vote control
function createVoteControl(initialValue = 1000) {
  const container = html`<div class="vote-control-container">
    <label class="vote-control-label">MIN IMDb VOTES</label>
    <div class="vote-control-wrapper">
      <button class="vote-btn vote-btn-minus">−</button>
      <div class="vote-display">
        <span class="vote-number">${initialValue.toLocaleString()}</span>
      </div>
      <button class="vote-btn vote-btn-plus">+</button>
    </div>
    <div class="vote-bar-container">
      <div class="vote-bar-fill" style="width: ${(initialValue / 50000) * 100}%"></div>
    </div>
  </div>`;

  let currentValue = initialValue;
  const numberDisplay = container.querySelector('.vote-number');
  const barFill = container.querySelector('.vote-bar-fill');
  const minusBtn = container.querySelector('.vote-btn-minus');
  const plusBtn = container.querySelector('.vote-btn-plus');

  function updateDisplay() {
    numberDisplay.textContent = currentValue.toLocaleString();
    barFill.style.width = `${(currentValue / 50000) * 100}%`;
    container.value = currentValue;
    container.dispatchEvent(new Event('input', { bubbles: true }));
  }

  minusBtn.onclick = () => {
    if (currentValue > 0) {
      currentValue = Math.max(0, currentValue - 1000);
      updateDisplay();
    }
  };

  plusBtn.onclick = () => {
    if (currentValue < 50000) {
      currentValue = Math.min(50000, currentValue + 1000);
      updateDisplay();
    }
  };

  // Allow clicking on the bar to set value
  const barContainer = container.querySelector('.vote-bar-container');
  barContainer.onclick = (e) => {
    const rect = barContainer.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    currentValue = Math.round((percent * 50000) / 1000) * 1000;
    currentValue = Math.max(0, Math.min(50000, currentValue));
    updateDisplay();
  };

  container.value = currentValue;
  return container;
}

const minVotesInput = createVoteControl(1000);
// const minVotesInput = Inputs.range([0, 50000], {
//   label: html`<span style="font-size: 11px; font-weight: 600; color: #fff; text-transform: uppercase; letter-spacing: 0.5px;">Min IMDb votes</span>`,
//   value: 1000,
//   step: 1000,
//   format: (x) => x.toLocaleString()
// });
```

```js
// Make inputs reactive
const selectedPlatforms = Generators.input(platformInput);
const vizType = Generators.input(vizTypeInput);
const selectedYear = Generators.input(yearDialInput);
const minVotes = Generators.input(minVotesInput);
const selectedGenres = Generators.input(genreFilterInput);  // NEW


// Toggle input for temporal expansion
const temporalToggleInput = Inputs.toggle({label: "Expand Temporal View", value: true});
const temporalExpanded = Generators.input(temporalToggleInput);
```

```js
// Filter data based on controls
const filteredMovies = (() => {
  const year = typeof selectedYear === "number" ? selectedYear : null;
  const minVotesVal = typeof minVotes === "number" ? minVotes : 0;
  const platforms = Array.isArray(selectedPlatforms) ? selectedPlatforms : [];
  const genres = Array.isArray(selectedGenres) ? selectedGenres : [];  // NEW

  let current = movies.filter(d => {
    // Existing filters
    const passesBasicFilters = 
      d.imdb_votes >= minVotesVal &&
      (year === null ? true : d.release_year === year) &&
      (platforms.length === 0 || platforms.includes(d.platform));
    
    // NEW: Genre filter - if no genres selected, show all
    const passesGenreFilter = genres.length === 0 || 
      d.genres.some(g => genres.includes(g.toLowerCase()));
    
    return passesBasicFilters && passesGenreFilter;  // MODIFIED
  });

  return current;
})();
```

```js
// Calculate summary statistics
const stats = (() => {
  const amz = filteredMovies.filter(d => d.is_amazon);
  const oth = filteredMovies.filter(d => !d.is_amazon);

  const meanDiffAmazon = d3.mean(amz, d => d.score_diff);
  const meanDiffOther  = d3.mean(oth, d => d.score_diff);

  const byPlatform = d3.rollup(
    filteredMovies,
    v => v.length,
    d => d.platform
  );

  return {
    total: filteredMovies.length,
    amzCount: amz.length,
    othCount: oth.length,
    meanDiffAmazon: isNaN(meanDiffAmazon) ? 0 : meanDiffAmazon,
    meanDiffOther: isNaN(meanDiffOther) ? 0 : meanDiffOther,
    platformCounts: {
      Amazon: byPlatform.get("Amazon") ?? 0,
      Netflix: byPlatform.get("Netflix") ?? 0,
      Hulu: byPlatform.get("Hulu") ?? 0,
      "Disney+": byPlatform.get("Disney+") ?? 0
    }
  };
})();
```

```js
// Small temporal chart for the tile
function createTemporalMini(width = 300) {
  const height = 180;
  const margin = {top: 30, right: 20, bottom: 30, left: 40};
  
  const allPlatforms = ["Amazon", "Netflix", "Hulu", "Disney+"];
  const colorScale = d3.scaleOrdinal()
    .domain(allPlatforms)
    .range(["#E60026", "#0275D8", "#2ECC71", "#F39C12"]);

  const platforms = Array.isArray(selectedPlatforms) ? selectedPlatforms : [];
  const activePlatforms = platforms.length > 0 ? platforms : allPlatforms;
  
 // In createTemporalMini:
const temporalData = movies.filter(d => 
  d.imdb_votes >= minVotes &&
  // DELETE: d.tmdb_votes >= minTmdbVotes &&
  (platforms.length === 0 || platforms.includes(d.platform))
);

  const groups = d3.groups(temporalData, d => d.release_year).sort((a, b) => a[0] - b[0]);

  const trends = groups.map(([yr, recs]) => {
    const result = { year: +yr };
    activePlatforms.forEach(platform => {
      const platformData = recs.filter(d => d.platform === platform);
      result[platform] = platformData.length ? d3.mean(platformData, d => d.score_diff) : null;
    });
    return result;
  }).filter(d => activePlatforms.some(p => d[p] !== null));

  if (!trends.length) {
    const div = document.createElement("div");
    div.style.fontSize = "11px";
    div.style.color = "#999";
    div.style.textAlign = "center";
    div.style.padding = "20px";
    div.textContent = "No temporal data";
    return div;
  }

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .style("max-width", "100%");

  const x = d3.scaleLinear()
    .domain(d3.extent(trends, d => d.year))
    .range([margin.left, width - margin.right]);

  const allVals = trends.flatMap(d => activePlatforms.map(p => d[p])).filter(v => v !== null).concat([0]);
  const y = d3.scaleLinear()
    .domain(d3.extent(allVals))
    .nice()
    .range([height - margin.bottom, margin.top]);

  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(5).tickFormat(d3.format("d")))
    .call(g => g.selectAll("text").attr("font-size", 9));

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(4))
    .call(g => g.selectAll("text").attr("font-size", 9));

  svg.append("line")
    .attr("x1", margin.left)
    .attr("x2", width - margin.right)
    .attr("y1", y(0))
    .attr("y2", y(0))
    .attr("stroke", "#ccc")
    .attr("stroke-dasharray", "2,2");

  const lineGen = platform => d3.line()
    .defined(d => d[platform] !== null)
    .x(d => x(d.year))
    .y(d => y(d[platform]))
    .curve(d3.curveMonotoneX);

  activePlatforms.forEach(platform => {
    svg.append("path")
      .datum(trends)
      .attr("d", lineGen(platform))
      .attr("fill", "none")
      .attr("stroke", colorScale(platform))
      .attr("stroke-width", 1.5);
  });

  return svg.node();
}

// Mini scatter plot
function createScatterMini(width = 300) {
  const height = 180;
  const margin = {top: 25, right: 15, bottom: 30, left: 40};
  
  if (!filteredMovies.length) {
    const div = document.createElement("div");
    div.style.fontSize = "11px";
    div.style.color = "#999";
    div.style.textAlign = "center";
    div.style.padding = "20px";
    div.textContent = "No data";
    return div;
  }

  const allPlatforms = ["Amazon", "Netflix", "Hulu", "Disney+"];
  const colorScale = d3.scaleOrdinal()
    .domain(allPlatforms)
    .range(["#E60026", "#0275D8", "#2ECC71", "#F39C12"]);

  const minVal = Math.max(0, Math.min(
    d3.min(filteredMovies, d => d.tmdb_score),
    d3.min(filteredMovies, d => d.imdb_score)
  ));
  const maxVal = Math.min(10, Math.max(
    d3.max(filteredMovies, d => d.tmdb_score),
    d3.max(filteredMovies, d => d.imdb_score)
  ));
  const pad = 0.2;

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .style("max-width", "100%");

  const x = d3.scaleLinear()
    .domain([minVal - pad, maxVal + pad])
    .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
    .domain([minVal - pad, maxVal + pad])
    .range([height - margin.bottom, margin.top]);

  const r = d3.scaleLinear()
    .domain(d3.extent(filteredMovies, d => d.log_votes))
    .range([1, 4]);

  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(5))
    .call(g => g.selectAll("text").attr("font-size", 9));

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(5))
    .call(g => g.selectAll("text").attr("font-size", 9));

  svg.append("line")
    .attr("x1", x(minVal))
    .attr("y1", y(minVal))
    .attr("x2", x(maxVal))
    .attr("y2", y(maxVal))
    .attr("stroke", "#ccc")
    .attr("stroke-dasharray", "2,2");

  svg.append("g")
    .selectAll("circle")
    .data(filteredMovies)
    .join("circle")
    .attr("cx", d => x(d.tmdb_score))
    .attr("cy", d => y(d.imdb_score))
    .attr("r", d => r(d.log_votes))
    .attr("fill", d => colorScale(d.platform))
    .attr("opacity", 0.4);

  return svg.node();
}

// Mini box plot
function createBoxPlotMini(width = 300) {
  const height = 180;
  const margin = {top: 25, right: 15, bottom: 40, left: 40};
  
  if (!filteredMovies.length) {
    const div = document.createElement("div");
    div.style.fontSize = "11px";
    div.style.color = "#999";
    div.style.textAlign = "center";
    div.style.padding = "20px";
    div.textContent = "No data";
    return div;
  }

  const allPlatforms = ["Amazon", "Netflix", "Hulu", "Disney+"];
  const colorScale = d3.scaleOrdinal()
    .domain(allPlatforms)
    .range(["#E60026", "#0275D8", "#2ECC71", "#F39C12"]);

  const binFn = d3.bin()
    .value(d => d.tmdb_score)
    .thresholds([5, 7, 9]);

  const bins = binFn(filteredMovies);

  const stats = [];
  bins.forEach(bin => {
    allPlatforms.forEach(platform => {
      const vals = bin
        .filter(d => d.platform === platform)
        .map(d => d.imdb_score)
        .sort(d3.ascending);
      if (vals.length > 3) {
        stats.push({
          label: `${bin.x0.toFixed(0)}-${(bin.x0 + 2).toFixed(0)}`,
          platform,
          q1: d3.quantile(vals, 0.25),
          med: d3.quantile(vals, 0.5),
          q3: d3.quantile(vals, 0.75)
        });
      }
    });
  });

  if (!stats.length) {
    const div = document.createElement("div");
    div.style.fontSize = "11px";
    div.style.color = "#999";
    div.style.textAlign = "center";
    div.style.padding = "20px";
    div.textContent = "Not enough data";
    return div;
  }

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .style("max-width", "100%");

  const x0 = d3.scaleBand()
    .domain([...new Set(stats.map(d => d.label))])
    .range([margin.left, width - margin.right])
    .padding(0.2);

  const x1 = d3.scaleBand()
    .domain(allPlatforms)
    .range([0, x0.bandwidth()])
    .padding(0.05);

  const y = d3.scaleLinear()
    .domain([3, 10]).nice()
    .range([height - margin.bottom, margin.top]);

  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x0))
    .selectAll("text")
    .attr("font-size", 8);

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(4))
    .call(g => g.selectAll("text").attr("font-size", 9));

  const boxes = svg.selectAll("g.box").data(stats).join("g")
    .attr("class", "box")
    .attr("transform", d => `translate(${x0(d.label)},0)`);

  boxes.append("rect")
    .attr("x", d => x1(d.platform))
    .attr("width", x1.bandwidth())
    .attr("y", d => y(d.q3))
    .attr("height", d => y(d.q1) - y(d.q3))
    .attr("fill", d => colorScale(d.platform))
    .attr("opacity", 0.7);

  boxes.append("line")
    .attr("x1", d => x1(d.platform))
    .attr("x2", d => x1(d.platform) + x1.bandwidth())
    .attr("y1", d => y(d.med))
    .attr("y2", d => y(d.med))
    .attr("stroke", "white")
    .attr("stroke-width", 1);

  return svg.node();
}
```

```js
function titlesPie(width = 260) {
  const data = [
    {platform: "Amazon",  value: stats.platformCounts.Amazon},
    {platform: "Netflix", value: stats.platformCounts.Netflix},
    {platform: "Hulu",    value: stats.platformCounts.Hulu},
    {platform: "Disney+", value: stats.platformCounts["Disney+"]}
  ].filter(d => d.value > 0);

  if (!data.length) {
    const div = document.createElement("div");
    div.style.fontSize = "12px";
    div.style.color = "var(--theme-foreground-muted)";
    div.textContent = "No titles for current filters.";
    return div;
  }

  const size = Math.min(width, 220);
  const radius = size / 2 - 4;

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, size, size])
    .attr("width", size)
    .attr("height", size);

  const g = svg.append("g")
    .attr("transform", `translate(${size / 2}, ${size / 2})`);

  const colorScale = d3.scaleOrdinal()
    .domain(["Amazon", "Netflix", "Hulu", "Disney+"])
    .range(["#E60026", "#0275D8", "#2ECC71", "#F39C12"]);

  const pie = d3.pie()
    .value(d => d.value)
    .sort(null);

  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  g.selectAll("path")
    .data(pie(data))
    .join("path")
      .attr("d", arc)
      .attr("fill", d => colorScale(d.data.platform))
      .attr("opacity", 0.85);

  return svg.node();
}
```
<div class="grid grid-cols-1">

  <div class="grid gap-2" style="grid-template-columns: 260px 1fr;">
    <div class="card" style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); border: 1px solid #333; padding: 12px;">
      <h2 style="color: #fff; margin-top: 0; margin-bottom: 10px; font-size: 14px; font-weight: 600;">Filters</h2>
      <div style="margin-bottom: 10px;">
        ${platformInput}
      </div>
      <div style="margin-bottom: 10px;">
        ${vizTypeInput}
      </div>
      <div style="margin-bottom: 10px; padding: 10px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.08);">
        <div class="filter-section-header" style="margin-top: 0;">Filter by Genre</div>
        <div class="genre-grid-container">
          ${genreFilterInput}
        </div>
        <div style="font-size: 9px; color: rgba(255,255,255,0.5); margin-top: 6px; font-style: italic;">
          Leave empty to show all genres
        </div>
      </div>
      <div class="year-dial-container" style="margin-bottom: 10px;">
        ${yearDialInput}
      </div>
      <div style="margin-bottom: 12px;">
        ${minVotesInput}
      </div>
      <div style="border-top: 1px solid rgba(255,255,255,0.15); padding-top: 10px; margin-top: 12px;">
        <h2 style="color: #fff; margin-top: 0; margin-bottom: 8px; font-size: 14px; font-weight: 600;">Titles (filtered)</h2>
        <div style="color: #fff; font-size: 32px; font-weight: 700; line-height: 1; margin-bottom: 10px; text-shadow: 0 2px 8px rgba(0,0,0,0.3);">${stats.total.toLocaleString("en-US")}</div>
        <div style="background: rgba(255,255,255,0.08); border-radius: 6px; padding: 6px; margin-bottom: 12px;">
          <div style="color: #bbb; font-size: 8px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; font-weight: 600;">Platform Breakdown</div>
          <div style="display: grid; grid-template-columns: 1fr; gap: 3px; font-size: 10px;">
            <div style="color: #E60026; font-weight: 600;">Amazon <span style="color: #fff; float: right;">${stats.platformCounts.Amazon.toLocaleString("en-US")}</span></div>
            <div style="color: #0275D8; font-weight: 600;">Netflix <span style="color: #fff; float: right;">${stats.platformCounts.Netflix.toLocaleString("en-US")}</span></div>
            <div style="color: #2ECC71; font-weight: 600;">Hulu <span style="color: #fff; float: right;">${stats.platformCounts.Hulu.toLocaleString("en-US")}</span></div>
            <div style="color: #F39C12; font-weight: 600;">Disney+ <span style="color: #fff; float: right;">${stats.platformCounts["Disney+"].toLocaleString("en-US")}</span></div>
          </div>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; margin-top: 16px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;">
          ${titlesPie(220)}
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 6px;">
      <div class="card" style="padding: 10px 12px 12px 12px;">
        <h2 style="margin-top: 0; margin-bottom: 6px; font-size: 14px;">${vizType}</h2>
        <div>${resize(width => createChart(width, null, 320))}</div>
      </div>
      <div class="card" style="padding: 10px 12px 12px 12px;">
        <h2 style="margin-top: 0; margin-bottom: 6px; font-size: 14px;">Temporal Gap (Lines)</h2>
        <div>${resize(width => createChart(width, "Temporal Gap (Lines)", 280))}</div>
        <div style="margin-top: 4px; padding-top: 4px; border-top: 1px solid var(--theme-foreground-faintest);">
          <h3 style="margin-top: 0; margin-bottom: 3px; font-size: 9px; font-weight: 600; color: var(--theme-foreground-muted);">Δ(IMDb − TMDb)</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
            <div style="padding: 3px; background: var(--theme-background-alt); border-radius: 3px;">
              <div style="font-size: 7px; color: var(--theme-foreground-muted); margin-bottom: 1px;">Amazon</div>
              <div style="font-size: 12px; font-weight: 700; color: #E60026;">${stats.meanDiffAmazon.toFixed(2)}</div>
            </div>
            <div style="padding: 3px; background: var(--theme-background-alt); border-radius: 3px;">
              <div style="font-size: 7px; color: var(--theme-foreground-muted); margin-bottom: 1px;">Others</div>
              <div style="font-size: 12px; font-weight: 700; color: #0275D8;">${stats.meanDiffOther.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ```js
// Toggle button for temporal view
const temporalToggle = Inputs.button("Toggle Temporal View", {
  reduce: () => !temporalExpanded
});
``` -->
<!-- ```js
function createTemporalCard() {
  const isExpanded = temporalExpanded;
  
  const container = html`<div class="card" style="cursor: pointer; transition: all 0.2s;">
    <h2>Temporal Gap (Lines) ${isExpanded ? "▼" : "◀"}</h2>
    <div style="font-size: 11px; color: #666; margin-bottom: 8px;">Click to ${isExpanded ? "minimize" : "expand"}</div>
    <div id="temporal-chart-container"></div>
  </div>`;
  
  container.onclick = () => {
    temporalExpanded.value = !temporalExpanded.value;
  };
  
  const chartContainer = container.querySelector('#temporal-chart-container');
  
  if (isExpanded) {
    // Show full-size temporal chart
    const fullChart = resize(width => createChart(width, "Temporal Gap (Lines)"));
    chartContainer.appendChild(fullChart);
  } else {
    // Show mini temporal chart
    const miniChart = resize(width => createTemporalMini(width));
    chartContainer.appendChild(miniChart);
  }
  
  return container;
}
``` -->
```js
function createGenreAnalysis(width) {
  const height = 450;
  const margin = {top: 60, right: 140, bottom: 50, left: 120};
  
  if (!filteredMovies.length) {
    const div = document.createElement("div");
    div.style.padding = "24px";
    div.style.textAlign = "center";
    div.style.color = "var(--theme-foreground-muted)";
    div.textContent = "No titles match the current filters.";
    return div;
  }

  // Get all genres and count titles per genre
  const genreCounts = new Map();
  filteredMovies.forEach(d => {
    d.genres.forEach(g => {
      if (!genreCounts.has(g)) {
        genreCounts.set(g, 0);
      }
      genreCounts.set(g, genreCounts.get(g) + 1);
    });
  });

  // Filter to genres with at least 10 titles
  const validGenres = Array.from(genreCounts.entries())
    .filter(([genre, count]) => count >= 10)
    .map(([genre]) => genre)
    .sort();

  if (!validGenres.length) {
    const div = document.createElement("div");
    div.style.padding = "24px";
    div.style.textAlign = "center";
    div.style.color = "var(--theme-foreground-muted)";
    div.textContent = "Not enough titles per genre for analysis.";
    return div;
  }

  // Calculate average scores by genre and platform
  const allPlatforms = ["Amazon", "Netflix", "Hulu", "Disney+"];
  const colorScale = d3.scaleOrdinal()
    .domain(allPlatforms)
    .range(["#E60026", "#0275D8", "#2ECC71", "#F39C12"]);

  const genreStats = [];
  validGenres.forEach(genre => {
    allPlatforms.forEach(platform => {
      const genreTitles = filteredMovies.filter(d => 
        d.genres.includes(genre) && d.platform === platform
      );
      
      if (genreTitles.length >= 3) {
        genreStats.push({
          genre,
          platform,
          count: genreTitles.length,
          avg_imdb: d3.mean(genreTitles, d => d.imdb_score),
          avg_tmdb: d3.mean(genreTitles, d => d.tmdb_score),
          avg_diff: d3.mean(genreTitles, d => d.score_diff)
        });
      }
    });
  });

  if (!genreStats.length) {
    const div = document.createElement("div");
    div.style.padding = "24px";
    div.style.textAlign = "center";
    div.style.color = "var(--theme-foreground-muted)";
    div.textContent = "Not enough data per platform/genre combination.";
    return div;
  }

  // Get unique genres that have data
  const activeGenres = Array.from(new Set(genreStats.map(d => d.genre)));

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .style("max-width", "100%")
    .style("height", "auto");

  // Scales
  const x = d3.scaleBand()
    .domain(activeGenres)
    .range([margin.left, width - margin.right])
    .padding(0.2);

  const xPlatform = d3.scaleBand()
    .domain(allPlatforms)
    .range([0, x.bandwidth()])
    .padding(0.05);

  const y = d3.scaleLinear()
    .domain([-1, 1])
    .range([height - margin.bottom, margin.top])
    .nice();

  // Axes
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .attr("text-anchor", "end")
    .attr("dx", "-0.5em")
    .attr("dy", "0.5em")
    .attr("font-size", 10);

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(8));

  // Y-axis label
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -(height - margin.bottom - margin.top) / 2 - margin.top)
    .attr("y", margin.left - 75)
    .attr("text-anchor", "middle")
    .attr("font-size", 12)
    .attr("fill", "currentColor")
    .text("Δ (IMDb − TMDb)");

  // Zero line
  svg.append("line")
    .attr("x1", margin.left)
    .attr("x2", width - margin.right)
    .attr("y1", y(0))
    .attr("y2", y(0))
    .attr("stroke", "#999")
    .attr("stroke-width", 1.5)
    .attr("stroke-dasharray", "4,3");

  // Title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", margin.top - 30)
    .attr("text-anchor", "middle")
    .attr("font-size", 14)
    .attr("font-weight", 600)
    .attr("fill", "currentColor")
    .text("Genre-Specific Score Bias by Platform");

  // Subtitle
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", margin.top - 12)
    .attr("text-anchor", "middle")
    .attr("font-size", 10)
    .attr("fill", "var(--theme-foreground-muted)")
    .text("Positive = IMDb rates higher | Negative = TMDb rates higher");

  // Create tooltip
  const tooltip = d3.select("body")
    .selectAll(".genre-tooltip")
    .data([null])
    .join("div")
    .attr("class", "genre-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "rgba(0, 0, 0, 0.9)")
    .style("color", "white")
    .style("padding", "12px 16px")
    .style("border-radius", "8px")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("z-index", "1000")
    .style("box-shadow", "0 4px 12px rgba(0,0,0,0.4)")
    .style("max-width", "280px")
    .style("line-height", "1.5");

  // Draw bars
  const bars = svg.selectAll("g.genre-bar")
    .data(genreStats)
    .join("g")
    .attr("class", "genre-bar")
    .attr("transform", d => `translate(${x(d.genre)},0)`);

  bars.append("rect")
    .attr("x", d => xPlatform(d.platform))
    .attr("width", xPlatform.bandwidth())
    .attr("y", d => d.avg_diff >= 0 ? y(d.avg_diff) : y(0))
    .attr("height", d => Math.abs(y(d.avg_diff) - y(0)))
    .attr("fill", d => colorScale(d.platform))
    .attr("opacity", 0.85)
    .attr("rx", 2)
    .attr("ry", 2)
    .style("cursor", "pointer")
    .on("mouseover", function(event, d) {
      d3.select(this)
        .attr("opacity", 1)
        .attr("stroke", "white")
        .attr("stroke-width", 2);

      const sign = d.avg_diff >= 0 ? "+" : "";
      const tooltipHtml = `
        <div style="font-weight: 700; font-size: 14px; margin-bottom: 8px; color: ${colorScale(d.platform)};">
          ${d.platform} • ${d.genre}
        </div>
        <div style="margin-bottom: 6px;">
          <strong>Titles analyzed:</strong> ${d.count}
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 8px 0; padding: 8px; background: rgba(255,255,255,0.1); border-radius: 4px;">
          <div>
            <div style="color: #aaa; font-size: 11px;">Avg IMDb</div>
            <div style="font-weight: 600; font-size: 16px;">${d.avg_imdb.toFixed(2)}</div>
          </div>
          <div>
            <div style="color: #aaa; font-size: 11px;">Avg TMDb</div>
            <div style="font-weight: 600; font-size: 16px;">${d.avg_tmdb.toFixed(2)}</div>
          </div>
        </div>
        <div style="margin-top: 6px;">
          <strong>Difference (Δ):</strong> ${sign}${d.avg_diff.toFixed(3)}
        </div>
        <div style="margin-top: 6px; font-size: 11px; color: #999;">
          ${d.avg_diff > 0 ? "IMDb users rate this genre higher" : "TMDb users rate this genre higher"}
        </div>
      `;

      tooltip
        .style("visibility", "visible")
        .html(tooltipHtml);
    })
    .on("mousemove", function(event) {
      tooltip
        .style("top", (event.pageY - 10) + "px")
        .style("left", (event.pageX + 15) + "px");
    })
    .on("mouseout", function() {
      d3.select(this)
        .attr("opacity", 0.85)
        .attr("stroke", "none");
      
      tooltip.style("visibility", "hidden");
    });

  // Legend
  const legend = svg.append("g")
    .attr("transform", `translate(${width - margin.right + 15}, ${margin.top})`);

  allPlatforms.forEach((platform, i) => {
    const item = legend.append("g")
      .attr("transform", `translate(0, ${i * 22})`);

    item.append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("fill", colorScale(platform))
      .attr("opacity", 0.85)
      .attr("rx", 2);

    item.append("text")
      .attr("x", 18)
      .attr("y", 9)
      .attr("font-size", 11)
      .attr("font-weight", 600)
      .attr("fill", "currentColor")
      .text(platform);
  });

  return svg.node();
}
```

```js

const colorOther = "#1f77b4";
function createChart(width, forceMode = null, heightOverride = null) {
  const currentMode = forceMode || vizType;
  
  if (!filteredMovies.length) {
    const div = document.createElement("div");
    div.style.padding = "24px";
    div.style.textAlign = "center";
    div.style.color = "var(--theme-foreground-muted)";
    div.textContent = "No titles match the current filters.";
    return div;
  }

  // ========= NEW MODE: GENRE ANALYSIS =========
  if (currentMode === "Genre Analysis") {
    return createGenreAnalysis(width);
  }

  const height = heightOverride || 450;
  const margin = currentMode === "Temporal Gap (Lines)" 
    ? {top: 40, right: 30, bottom: 35, left: 50}
    : {top: 50, right: 30, bottom: 40, left: 50};

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .style("max-width", "100%")
    .style("height", "auto");

  // ========= MODE 1: SCATTER WITH TOOLTIPS =========
  if (currentMode === "Bias Detector (Scatter)") {
    const allPlatforms = ["Amazon", "Netflix", "Hulu", "Disney+"];
    const minVal = Math.max(0, Math.min(
      d3.min(filteredMovies, d => d.tmdb_score),
      d3.min(filteredMovies, d => d.imdb_score)
    ));
    const maxVal = Math.min(10, Math.max(
      d3.max(filteredMovies, d => d.tmdb_score),
      d3.max(filteredMovies, d => d.imdb_score)
    ));
    const pad = 0.2;

    const x = d3.scaleLinear()
      .domain([minVal - pad, maxVal + pad])
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([minVal - pad, maxVal + pad])
      .range([height - margin.bottom, margin.top]);

    const r = d3.scaleLinear()
      .domain(d3.extent(filteredMovies, d => d.log_votes))
      .range([2, 7]);

    const colorScale = d3.scaleOrdinal()
      .domain(allPlatforms)
      .range(["#E60026", "#0275D8", "#2ECC71", "#F39C12"]);

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .call(g => g.append("text")
        .attr("x", (width - margin.left - margin.right) / 2 + margin.left)
        .attr("y", 30)
        .attr("fill", "currentColor")
        .attr("text-anchor", "middle")
        .attr("font-size", 11)
        .text("TMDb score"));

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .call(g => g.append("text")
        .attr("x", 0)
        .attr("y", margin.top - 25)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .attr("font-size", 11)
        .text("IMDb score"));

    svg.append("line")
      .attr("x1", x(minVal))
      .attr("y1", y(minVal))
      .attr("x2", x(maxVal))
      .attr("y2", y(maxVal))
      .attr("stroke", "#ccc")
      .attr("stroke-dasharray", "4,4");

    // Create tooltip div (reuse if exists)
    const tooltip = d3.select("body")
      .selectAll(".scatter-tooltip")
      .data([null])
      .join("div")
      .attr("class", "scatter-tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background-color", "rgba(0, 0, 0, 0.9)")
      .style("color", "white")
      .style("padding", "12px 16px")
      .style("border-radius", "8px")
      .style("font-size", "13px")
      .style("pointer-events", "none")
      .style("z-index", "1000")
      .style("box-shadow", "0 4px 12px rgba(0,0,0,0.4)")
      .style("max-width", "300px")
      .style("line-height", "1.5");

    // Create circles with tooltip handlers
    svg.append("g")
      .selectAll("circle")
      .data(filteredMovies)
      .join("circle")
      .attr("cx", d => x(d.tmdb_score))
      .attr("cy", d => y(d.imdb_score))
      .attr("r", d => r(d.log_votes))
      .attr("fill", d => colorScale(d.platform))
      .attr("opacity", d => {
        const sel = Array.isArray(selectedPlatforms) ? selectedPlatforms : [];
        if (sel.length === 0) return 0.15;
        if (sel.length === allPlatforms.length) return 0.60;
        return sel.includes(d.platform) ? 0.60 : 0.15;
      })
      .attr("stroke", "white")
      .attr("stroke-width", 0)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        // Highlight the circle
        d3.select(this)
          .attr("stroke-width", 2)
          .attr("opacity", 0.95);
        
        // Format tooltip content
        const diff = d.score_diff >= 0 
          ? `+${d.score_diff.toFixed(2)}` 
          : d.score_diff.toFixed(2);
        
        const diffLabel = d.score_diff >= 0 
          ? "IMDb higher" 
          : "TMDb higher";
        
        const tooltipHtml = `
          <div style="font-weight: 700; font-size: 14px; margin-bottom: 8px; color: ${colorScale(d.platform)};">
            ${d.title}
          </div>
          <div style="margin-bottom: 6px;">
            <strong>Platform:</strong> ${d.platform}
          </div>
          <div style="margin-bottom: 6px;">
            <strong>Year:</strong> ${d.release_year}
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 8px 0; padding: 8px; background: rgba(255,255,255,0.1); border-radius: 4px;">
            <div>
              <div style="color: #aaa; font-size: 11px;">IMDb</div>
              <div style="font-weight: 600; font-size: 16px;">${d.imdb_score.toFixed(1)}</div>
            </div>
            <div>
              <div style="color: #aaa; font-size: 11px;">TMDb</div>
              <div style="font-weight: 600; font-size: 16px;">${d.tmdb_score.toFixed(1)}</div>
            </div>
          </div>
          <div style="margin-top: 6px;">
            <strong>Difference:</strong> ${diff} <span style="color: ${d.score_diff >= 0 ? '#4ade80' : '#f87171'};">(${diffLabel})</span>
          </div>
          <div style="margin-top: 6px; font-size: 11px; color: #999;">
            ${d.imdb_votes.toLocaleString()} IMDb votes
          </div>
        `;
        
        tooltip
          .style("visibility", "visible")
          .html(tooltipHtml);
      })
      .on("mousemove", function(event) {
        tooltip
          .style("top", (event.pageY - 10) + "px")
          .style("left", (event.pageX + 15) + "px");
      })
      .on("mouseout", function(event, d) {
        // Remove highlight
        d3.select(this)
          .attr("stroke-width", 0)
          .attr("opacity", () => {
            const sel = Array.isArray(selectedPlatforms) ? selectedPlatforms : [];
            if (sel.length === 0) return 0.15;
            if (sel.length === allPlatforms.length) return 0.60;
            return sel.includes(d.platform) ? 0.60 : 0.15;
          });
        
        tooltip.style("visibility", "hidden");
      });

    // Legend
    const legendItems = allPlatforms;
    const itemWidth = 100;
    const legendWidth = legendItems.length * itemWidth;

    const legend = svg.append("g")
      .attr("transform", `translate(${width / 2 - legendWidth / 2}, ${margin.top - 35})`);

    legendItems.forEach((name, i) => {
      const item = legend.append("g")
        .attr("transform", `translate(${i * itemWidth}, 0)`);

      item.append("circle")
        .attr("r", 5)
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("fill", colorScale(name))
        .attr("opacity", 0.95);

      item.append("text")
        .attr("x", 9)
        .attr("y", 3)
        .attr("font-size", 11)
        .attr("font-weight", 600)
        .attr("fill", "currentColor")
        .text(name);
    });
  }

  // ========= MODE 2: BOX PLOT =========
  else if (currentMode === "Quality Control (Box Plot)") {
    const allPlatforms = ["Amazon", "Netflix", "Hulu", "Disney+"];
    const colorScale = d3.scaleOrdinal()
      .domain(allPlatforms)
      .range(["#E60026", "#0275D8", "#2ECC71", "#F39C12"]);

    const binFn = d3.bin()
      .value(d => d.tmdb_score)
      .thresholds([4, 5, 6, 7, 8, 9]);

    const bins = binFn(filteredMovies);

    const stats = [];
    bins.forEach(bin => {
      allPlatforms.forEach(platform => {
        const vals = bin
          .filter(d => d.platform === platform)
          .map(d => d.imdb_score)
          .sort(d3.ascending);
        if (vals.length > 5) {
          stats.push({
            label: `${bin.x0.toFixed(1)}–${(bin.x0 + 1).toFixed(1)}`,
            platform,
            n: vals.length,
            q1: d3.quantile(vals, 0.25),
            med: d3.quantile(vals, 0.5),
            q3: d3.quantile(vals, 0.75)
          });
        }
      });
    });

    if (!stats.length) {
      const div = document.createElement("div");
      div.style.padding = "40px";
      div.style.textAlign = "center";
      div.style.color = "#888";
      div.textContent = "Not enough data in each bin to draw box plots.";
      return div;
    }

    const x0 = d3.scaleBand()
      .domain([...new Set(stats.map(d => d.label))])
      .range([margin.left, width - margin.right])
      .padding(0.25);

    const x1 = d3.scaleBand()
      .domain(allPlatforms)
      .range([0, x0.bandwidth()])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([3, 10]).nice()
      .range([height - margin.bottom, margin.top]);

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x0))
      .selectAll("text")
      .attr("font-size", 10);

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Legend
    const legendItems = allPlatforms;
    const itemWidth = 100;
    const legendWidth = legendItems.length * itemWidth;

    const legend = svg.append("g")
      .attr("transform", `translate(${width / 2 - legendWidth / 2}, ${margin.top - 35})`);

    legendItems.forEach((name, i) => {
      const item = legend.append("g")
        .attr("transform", `translate(${i * itemWidth}, 0)`);

      item.append("rect")
        .attr("x", -7)
        .attr("y", -5)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", colorScale(name))
        .attr("opacity", 0.85);

      item.append("text")
        .attr("x", 8)
        .attr("y", 3)
        .attr("font-size", 11)
        .attr("font-weight", 600)
        .attr("fill", "currentColor")
        .text(name);
    });

    const boxes = svg.selectAll("g.box").data(stats).join("g")
      .attr("class", "box")
      .attr("transform", d => `translate(${x0(d.label)},0)`);

    boxes.append("rect")
      .attr("x", d => x1(d.platform))
      .attr("width", x1.bandwidth())
      .attr("y", d => y(d.q3))
      .attr("height", d => y(d.q1) - y(d.q3))
      .attr("fill", d => colorScale(d.platform))
      .attr("opacity", 0.85)
      .attr("rx", 3)
      .attr("ry", 3);

    boxes.append("line")
      .attr("x1", d => x1(d.platform))
      .attr("x2", d => x1(d.platform) + x1.bandwidth())
      .attr("y1", d => y(d.med))
      .attr("y2", d => y(d.med))
      .attr("stroke", "white")
      .attr("stroke-width", 2);
  }

  // ========= MODE 3: TEMPORAL GAP =========
  else if (currentMode === "Temporal Gap (Lines)") {
    const allPlatforms = ["Amazon", "Netflix", "Hulu", "Disney+"];
    const colorScale = d3.scaleOrdinal()
      .domain(allPlatforms)
      .range(["#E60026", "#0275D8", "#2ECC71", "#F39C12"]);

    // Use all years data but respect platform and minVotes filters
    const platforms = Array.isArray(selectedPlatforms) ? selectedPlatforms : [];
    const activePlatforms = platforms.length > 0 ? platforms : allPlatforms;
    
    const temporalData = movies.filter(d => 
      d.imdb_votes >= minVotes &&
      (platforms.length === 0 || platforms.includes(d.platform))
    );

    const groups = d3.groups(
      temporalData,
      d => d.release_year
    ).sort((a, b) => a[0] - b[0]);

    const trends = groups.map(([yr, recs]) => {
      const result = { year: +yr };
      activePlatforms.forEach(platform => {
        const platformData = recs.filter(d => d.platform === platform);
        result[platform] = platformData.length ? d3.mean(platformData, d => d.score_diff) : null;
      });
      return result;
    }).filter(d => activePlatforms.some(p => d[p] !== null));

    if (!trends.length) {
      const div = document.createElement("div");
      div.style.padding = "40px";
      div.style.textAlign = "center";
      div.style.color = "#888";
      div.textContent = "Not enough data by platform and year.";
      return div;
    }

    const x = d3.scaleLinear()
      .domain(d3.extent(trends, d => d.year))
      .range([margin.left, width - margin.right]);

    const allVals = trends.flatMap(d => activePlatforms.map(p => d[p])).filter(v => v !== null).concat([0]);
    const y = d3.scaleLinear()
      .domain(d3.extent(allVals))
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(d3.format("d")).ticks(6))
      .call(g => g.selectAll("text").attr("font-size", 9));

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(5))
      .call(g => g.selectAll("text").attr("font-size", 9))
      .call(g => g.append("text")
        .attr("x", -30)
        .attr("y", margin.top - 8)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .attr("font-size", 10)
        .text("IMDb − TMDb gap"));

    svg.append("line")
      .attr("x1", margin.left)
      .attr("x2", width - margin.right)
      .attr("y1", y(0))
      .attr("y2", y(0))
      .attr("stroke", "#999")
      .attr("stroke-width", 1.5)
      .attr("stroke-dasharray", "4,3");

    // Legend
    const legendItems = activePlatforms;
    const itemWidth = 90;
    const legendWidth = legendItems.length * itemWidth;

    const legend = svg.append("g")
      .attr("transform", `translate(${width / 2 - legendWidth / 2}, ${margin.top - 30})`);

    legendItems.forEach((name, i) => {
      const item = legend.append("g")
        .attr("transform", `translate(${i * itemWidth}, 0)`);

      item.append("line")
        .attr("x1", -10)
        .attr("x2", 0)
        .attr("y1", 0)
        .attr("y2", 0)
        .attr("stroke", colorScale(name))
        .attr("stroke-width", 2);

      item.append("text")
        .attr("x", 5)
        .attr("y", 3)
        .attr("font-size", 10)
        .attr("font-weight", 600)
        .attr("fill", "currentColor")
        .text(name);
    });

    const lineGen = platform => d3.line()
      .defined(d => d[platform] !== null)
      .x(d => x(d.year))
      .y(d => y(d[platform]))
      .curve(d3.curveMonotoneX);

    // Draw lines for each active platform
    activePlatforms.forEach(platform => {
      svg.append("path")
        .datum(trends)
        .attr("d", lineGen(platform))
        .attr("fill", "none")
        .attr("stroke", colorScale(platform))
        .attr("stroke-width", 2);

      svg.selectAll(`circle.${platform.replace('+', 'plus')}`).data(trends.filter(d => d[platform] !== null)).join("circle")
        .attr("class", platform.replace('+', 'plus'))
        .attr("cx", d => x(d.year))
        .attr("cy", d => y(d[platform]))
        .attr("r", 2)
        .attr("fill", colorScale(platform));
    });
  }

  return svg.node();
}
```

