# CoolFix - AC Diagnostic Tool

An industrial-themed web application for diagnosing air conditioner error codes across 12 major brands. 

## Features
- **Instant Diagnostics**: Look up error codes for LG, Samsung, Daikin, Mitsubishi Electric, Midea, Gree, Carrier, Toshiba, Panasonic, Haier, Hitachi, and Fujitsu.
- **Detailed Solutions**: Get problem descriptions, step-by-step solutions, severity levels, and technician recommendations.
- **Search History**: Keeps track of your last 5 searches in the current session.
- **Standalone App**: Runs entirely in the browser using React via CDN. No build steps or backend required.

## Tech Stack
- **Frontend**: React & Babel (via CDN)
- **Styling**: Tailwind CSS (via CDN script)
- **Data storage**: Local JavaScript list in `errorCodes.js`

## Getting Started
Because this application is fully static and client-side, you don't need to install Node.js or any dependencies. 

1. Simply clone this repository.
2. Open `index.html` in any web browser.

## Hosting (GitHub Pages)
This project is perfectly suited for free hosting with **GitHub Pages**:
1. Push this code to a new public repository on GitHub.
2. Go to your repository **Settings** -> **Pages**.
3. Under "Build and deployment", select **Deploy from a branch**.
4. Select your `main` or `master` branch and `/ (root)` folder, then click save.
5. In a few minutes, your site will be live on the internet!
