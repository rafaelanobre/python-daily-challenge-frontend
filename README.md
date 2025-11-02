# Python Daily Challenge - Frontend

[![React](https://img.shields.io/badge/React-19.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-purple.svg)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[> Backend repository <](https://github.com/rafaelanobre/python-daily-challenge-backend)

A modern React frontend application for generating and solving AI-powered Python coding challenges. Features user authentication via Clerk, real-time quota tracking, challenge history visualization, and an intuitive interface for practicing Python concepts across multiple difficulty levels.

---

## Key Features

- **Interactive Challenge Generation** with difficulty selection (Easy, Medium, Hard)
- **Multiple Choice Questions (MCQ)** with instant feedback and explanations
- **User Authentication** powered by Clerk with secure token management
- **Real-Time Quota Tracking** showing remaining challenges and reset timers
- **Challenge History** to review past challenges and solutions

---

## Tech Stack

- React 19.1
- Vite 7.0
- React Router DOM 6.30
- Clerk React 5.33
- ESLint + Prettier
- Husky + lint-staged

---

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager
- Running instance of the [backend API](https://github.com/rafaelanobre/python-daily-challenge-backend)
- Clerk account with publishable key

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rafaelanobre/python-daily-challenge-frontend.git
   cd python-daily-challenge-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your environment variables:**
   - Copy `.env.example` to `.env`
   - Fill in your `VITE_CLERK_PUBLISHABLE_KEY` and `BACKEND_URL`

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   BACKEND_URL=http://localhost:8000
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint and auto-fix issues |
| `npm run format` | Format code with Prettier |

---

## Application Features

### Challenge Generator

The main interface allows users to:
- Select difficulty level (Easy, Medium, Hard)
- Generate AI-powered Python challenges
- View remaining daily quota
- See when quota resets (24-hour cycle)
- Receive instant feedback with explanations

### Challenge History

Users can:
- View all previously generated challenges
- Review past answers and explanations
- Track learning progress over time

### Authentication

Secure authentication flow:
- Sign up / Sign in with Clerk
- Protected routes for authenticated users
- Automatic token refresh
- Secure API communication

---

## Project Structure

```
frontend/
├── src/
│   ├── auth/                  # Authentication components
│   │   ├── ClerkProviderWithRoutes.jsx
│   │   └── AuthenticationPage.jsx
│   ├── challenge/             # Challenge-related components
│   │   ├── ChallengeGenerator.jsx
│   │   └── MCQChallenge.jsx
│   ├── history/               # History panel
│   │   └── HistoryPanel.jsx
│   ├── layout/                # Layout components
│   │   └── Layout.jsx
│   ├── utils/                 # Utility functions
│   │   └── api.js
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   ├── App.css                # Application styles
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
├── package.json               # Dependencies and scripts
└── .env.example               # Environment variables template
```

---

## API Integration

The frontend communicates with the backend through the following endpoints:

- `POST /api/generate-challenge` - Generate new challenge
- `GET /api/my-history` - Fetch user's challenge history
- `GET /api/quota` - Get current quota status

All requests are authenticated using Clerk JWT tokens.

---

## Development Workflow

This project uses:

- **Husky** for Git hooks
- **lint-staged** for pre-commit linting
- **Prettier** for code formatting
- **ESLint** for code quality
- **React Fast Refresh** for instant feedback during development

Code is automatically formatted and linted before each commit to maintain consistency.

---

## Roadmap

Planned improvements and features currently in development:

- [ ] Add challenge timer functionality
- [ ] Implement code editor for free-form coding challenges
- [ ] Add dark mode theme
- [ ] Create challenge difficulty filters in history
- [ ] Add social sharing for completed challenges
- [ ] Implement challenge streak tracking
- [ ] Add unit tests with Vitest
- [ ] Create Dockerized deployment

---

## License

MIT License

Copyright (c) 2025 Rafaela Nobre

### Acknowledgments

This project uses:

- React, licensed under the MIT License.
- Vite, licensed under the MIT License.
- Clerk, licensed under the MIT License.
- React Router, licensed under the MIT License.