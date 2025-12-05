# Streaming Platform Score Bias Dashboard

An interactive data visualization dashboard analyzing rating differences between IMDb and TMDb across major streaming platforms. Explore how different audiences perceive the same content on Amazon Prime Video, Netflix, Hulu, and Disney+.

🔗 **[Live Dashboard](https://information-vizualize-popviz-vpqr.vercel.app/)**

## Overview

This dashboard reveals systematic biases in how films and shows are rated across different platforms and rating communities. IMDb tends to reflect dedicated film enthusiasts, while TMDb captures a broader, more casual audience perspective. Understanding these biases helps reveal how different communities perceive the same content.

## Key Features

### 📊 Four Visualization Modes

1. **Bias Detector (Scatter Plot)** - Compare IMDb vs TMDb scores directly with interactive tooltips
2. **Quality Control (Box Plot)** - Analyze score distributions across quality tiers
3. **Genre Analysis** - Discover genre-specific rating biases by platform
4. **Country-Genre Bias Matrix** - Explore how geography and genre interact with rating patterns

### 🎛️ Interactive Filters

- **Platform Selection** - Filter by Amazon Prime, Netflix, Hulu, or Disney+
- **Release Year Dial** - Beautiful circular slider to focus on specific years (2000-2024)
- **Genre Filters** - 19 genre categories with multi-select capability
- **Minimum Vote Threshold** - Volume-style control to filter by IMDb vote count (0-50k)

### 📈 Dynamic Insights

- **Temporal Analysis** - Track how rating gaps evolve over time
- **Country-Specific Trends** - Compare top 6 countries' rating patterns
- **Real-time Statistics** - Live counts and averages based on active filters
- **Platform Distribution** - Visual pie chart showing filtered title breakdown

## Technical Stack

- **Framework**: [Observable Framework](https://observablehq.com/framework/)
- **Visualization**: D3.js
- **Data Processing**: JavaScript with reactive programming
- **Deployment**: Vercel
- **Styling**: Custom CSS with dark theme

## Data Sources

The dashboard analyzes comprehensive datasets from four major streaming platforms:
- Amazon Prime Video
- Netflix  
- Hulu
- Disney+

Each dataset includes:
- Title metadata (name, release year)
- IMDb scores and vote counts
- TMDb scores
- Genre classifications
- Production countries

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── docs/
│   ├── index.md                 # Main dashboard
│   ├── components/
│   │   └── yearDial.js         # Custom year selector component
│   └── data/
│       ├── amazon_titles.csv
│       ├── netflix_titles.csv
│       ├── hulu_titles.csv
│       └── disney_titles.csv
└── package.json
```

## Key Insights

- **Amazon Bias**: Amazon Prime titles often show higher IMDb ratings relative to TMDb
- **Genre Variations**: Documentary and drama genres show different bias patterns than action/comedy
- **Temporal Trends**: Rating biases have evolved significantly since 2010
- **Geographic Patterns**: US productions show different bias patterns compared to international content

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Observable Framework](https://observablehq.com/framework/)
- Visualizations powered by [D3.js](https://d3js.org/)
- Dataset compiled from IMDb and TMDb APIs

---

**Created by Subhrajit Das** | NYU Tandon School of Engineering

*For questions or feedback, please open an issue on GitHub.*
