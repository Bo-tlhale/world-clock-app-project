# World Clock 🌍

A browser-based world clock application built with **HTML, CSS and JavaScript**. It displays the local date and time in different cities and allows users to view a selected timezone.

## Features

- Live clocks for São Paulo, Seoul and Stockholm, updated every second
- City selection for Bangkok, Gaborone and Melbourne
- An option to display the user's detected timezone
- Dates and times formatted using Moment.js and Moment Timezone
- A clean interface styled with CSS

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML | Page structure and city selection |
| CSS | Layout and styling |
| JavaScript | DOM updates and user interaction |
| Moment.js | Date and time formatting |
| Moment Timezone | Timezone calculations |

## How It Works

1. On page load, the application renders clocks for São Paulo, Seoul and Stockholm.
2. JavaScript refreshes those clocks every second.
3. Selecting a city replaces the default clock display with that city's date and time.
4. Selecting **My location** uses the browser's detected timezone through Moment Timezone.

## Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/Bo-tlhale/world-clock-app-project.git
   ```

2. Open the `world-clock-app-project` folder.
3. Open `index.html` in a web browser.

An internet connection is required to load the Moment.js libraries from their CDNs.

## Project Structure

```text
world-clock-app-project/
├── index.html
└── src/
    ├── script.js
    └── style.css
```

## Known Limitations

- Sydney appears in the initial HTML, but the current JavaScript does not populate or refresh its clock.
- The blank **Select a city...** option is not handled by the selection function.
- After selecting a city, the displayed time is not refreshed every second. Live updates currently apply only to the default clock elements.

## Learning Focus

This project explores timezone-aware date and time calculations, JavaScript event handling, dynamic DOM updates and formatting time for a web interface.

**Developed by:** [Botlhale Mpatlanyane](https://github.com/Bo-tlhale)
