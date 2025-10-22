# TC URL Shortener

A modern, responsive URL shortening application built with React, TypeScript, and TanStack Router. Shorten your long URLs and manage them with ease using a clean, intuitive interface.

🔗 **Live Demo**: [https://tc-url-shortener-fndrpyglu-longld-fes-projects.vercel.app/](https://tc-url-shortener-fndrpyglu-longld-fes-projects.vercel.app/)

## 📋 Features

- **URL Shortening**: Convert long URLs into short, shareable links
- **Local Storage**: Automatically save shortened URLs to browser storage
- **Copy to Clipboard**: One-click copy functionality for shortened URLs
- **Responsive Design**: Fully responsive UI that works on all devices
- **Real-time Validation**: Form validation with helpful error messages
- **Toast Notifications**: User-friendly feedback for all actions
- **Advanced Statistics**: View metrics and analytics about link performance
- **Modern UI**: Built with Tailwind CSS for a polished look

## 🛠️ Tech Stack

### Core

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Routing & State Management

- **TanStack Router** - File-based routing with type safety
- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **Class Variance Authority (CVA)** - Component variant management

### API & Data

- **Axios** - HTTP client
- **RapidAPI URL Shortener** - External URL shortening service

### UI Components

- **Radix UI** - Accessible component primitives
- **React Toastify** - Toast notifications

### Developer Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Husky** - Git hooks for code quality

## 📁 Project Structure

```
tc-url-shortener/
├── src/
│   ├── api/              # API client and service layer
│   │   ├── url-shortener-api.ts
│   │   └── web-api-client.ts
│   ├── assets/           # Images and static files
│   │   └── images/
│   ├── components/       # React components
│   │   ├── Home/         # Home page components
│   │   ├── NavBar/       # Navigation components
│   │   └── ui/           # Reusable UI components
│   ├── constants/        # App constants
│   ├── hooks/            # Custom React hooks
│   │   ├── useToggleClick.ts
│   │   ├── useUrlShortening.ts
│   │   └── useUrlStorage.ts
│   ├── routes/           # TanStack Router routes
│   │   ├── __root.tsx
│   │   └── index.tsx
│   ├── schemas/          # Zod validation schemas
│   │   └── urlShortener.ts
│   ├── types/            # TypeScript type definitions
│   │   └── common.ts
│   ├── index.css         # Global styles
│   └── main.tsx          # App entry point
├── .env                  # Environment variables
├── .husky/               # Git hooks
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **Bun** or **npm** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tc-url-shortener
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_API_URL=https://url-shortener-service.p.rapidapi.com
   ```

   > **Note**: You'll need a RapidAPI key. Get one at [RapidAPI](https://rapidapi.com/) and update the API key in `src/api/web-api-client.ts`

4. **Run the development server**

   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173`

### Build for Production

```bash
bun run build
# or
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
bun run preview
# or
npm run preview
```

## 🔧 Configuration

### Environment Variables

- `VITE_API_URL` - Base URL for the URL shortening API

### TypeScript Path Aliases

The project uses `@/` alias for absolute imports:

```typescript
import { Button } from "@/components/ui/Button/Button";
```

## 📝 Scripts

- `dev` - Start development server
- `build` - Build for production
- `lint` - Run ESLint
- `preview` - Preview production build
- `prepare` - Set up Husky git hooks

## 🎨 Key Components

### Button Component

Reusable button with variants (primary, secondary) and sizes (sm, default, lg):

```tsx
<Button variant="primary" size="lg">
  Get Started
</Button>
```

### URL Shortener

Main form component for shortening URLs with validation and error handling.

### Custom Hooks

- `useUrlStorage` - Manages URL persistence in localStorage
- `useUrlShortening` - Handles URL shortening API calls
- `useToggleClick` - Manages toggle state with click-outside detection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- URL Shortening API provided by RapidAPI
- UI inspiration from Frontend Mentor
- Icons and illustrations from the design assets
