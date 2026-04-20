# Java Concepts UI

A React + Vite single-page application for learning core Java concepts with a json-server-powered backend.

## Features

- Browse Java topics (Data Types, OOP, Collections, Exception Handling, and more) from a sidebar-driven dashboard
- User authentication (register / login)
- Contact form with offline queue – messages are stored locally and automatically retried when the server is reachable
- Light / dark mode support
- Responsive layout

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 19, Tailwind CSS 4, Framer Motion, Lucide React |
| Routing | React Router v7 |
| HTTP | Axios (via shared `src/lib/api.js` client) |
| Mock API | json-server (reads `db.json`) |
| Bundler | Vite 7 |

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install dependencies

```bash
npm install
```

### Configure environment

Copy `.env.example` and adjust as needed:

```bash
cp .env.example .env
```

The default `VITE_API_BASE_URL=http://localhost:3000` works with the bundled json-server setup.

### Run the mock API

```bash
npx json-server --watch db.json --port 3000
```

### Run the development server

```bash
npm run dev
```

Open <http://localhost:5173> in your browser.

### Build for production

```bash
npm run build
```

## Project Structure

```
src/
├── config/
│   └── dashboardConfig.jsx   # Single source of truth for sidebar links + route elements
├── hooks/
│   └── useFetch.js           # Reusable data-fetch hook (wraps shared API client)
├── lib/
│   └── api.js                # Axios instance (reads VITE_API_BASE_URL)
├── dashboard/
│   ├── Dashboard.jsx         # Layout with auto-generated sidebar
│   └── dashboardPages/       # Individual topic pages
├── pages/                    # Public pages (Home, Login, Register, Contact, …)
└── routes/
    └── routes.jsx            # Router (dashboard children auto-generated from config)
```

## Adding a New Topic

1. Create the page component under `src/dashboard/dashboardPages/`.
2. Add one entry to `src/config/dashboardConfig.jsx` – the sidebar and router are both derived from this file automatically.
3. Add the corresponding data to `db.json`.
