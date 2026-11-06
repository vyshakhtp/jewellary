# Anaswara Jewellers Dashboard

A small React dashboard inspired by the supplied screenshot. It uses React for the interface, Bootstrap for its base stylesheet, Lucide icons, and plain CSS for the custom layout.

## Run it

1. Install Node.js if it is not already installed.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev` and open the local address Vite prints.

## How the code is organized

- `src/main.jsx` loads React, Bootstrap, the custom stylesheet, and the dashboard.
- `src/Dashboard.jsx` combines the page components and holds the small page-level interactions.
- `src/components/Header.jsx`, `src/components/Sidebar.jsx`, `src/components/MetricCards.jsx`, `src/components/Charts.jsx`, and `src/components/QuickNavigation.jsx` each contain one part of the dashboard.
- `src/styles.css` contains the colors, layout, and mobile adjustments.

The sidebar buttons switch the selected page heading. The chart buttons update the selected time range, and the refresh button shows a brief update message. The displayed metrics and chart values are sample data for the frontend.
