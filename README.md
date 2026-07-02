# The Wild Oasis

An internal hotel management dashboard for a boutique hotel/lodge — a back-office tool for hotel staff.

## Demo Credentials

- **Email:** admin@gmail.com
- **Password:** pass1234

## Features

- **Dashboard** — Overview analytics with stats cards, stay duration pie chart, sales trend chart, and today's activity. Filterable by last 7/30/90 days.
- **Bookings** — Full CRUD table of guest bookings with filtering (status), sorting, and pagination.
- **Check-in/out** — Guest check-in workflow (confirm payment, optional breakfast) and checkout.
- **Cabins** — CRUD table for managing hotel cabins with image upload.
- **Settings** — Hotel-wide configuration (min/max nights, max guests, breakfast price).
- **Authentication** — Staff login/signup, profile updates (name, avatar, password).
- **Dark mode** — Light/dark theme toggle persisted in localStorage.

## Tech Stack

| Category | Tool |
|---|---|
| Frontend | React 18, React Router v6 |
| Styling | styled-components v5 |
| Server State | TanStack React Query v4 |
| Backend / DB | Supabase (PostgreSQL + Auth + Storage) |
| Forms | React Hook Form v7 |
| Charts | Recharts v2 |
| Notifications | react-hot-toast |
| Date Handling | date-fns |
| Icons | react-icons (Heroicons v2) |
| Build Tool | Vite |

## Getting Started

### Prerequisites

- Node.js 16+
- A [Supabase](https://supabase.com) project

### Setup

1. **Clone the repo**
   ```bash
   git clone <repo-url>
   cd the-wild-oasis
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Supabase**

   Update `src/services/supabase.js` with your Supabase project URL and anon key:
   ```js
   const supabaseUrl = "https://<your-project>.supabase.co";
   const supabaseKey = "<your-anon-key>";
   ```

4. **Create the admin user**

   In your Supabase project dashboard under **Authentication → Users**, create a user with:
   - Email: `admin@gmail.com`
   - Password: `pass1234`

5. **Run the development server**
   ```bash
   npm run dev
   ```

### Seed Data

The app includes a built-in uploader for sample data. After logging in, use the **Upload ALL** button in the sidebar to populate the database with sample guests, cabins, and bookings.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── features/        # Domain feature modules (auth, bookings, cabins, etc.)
│   ├── authentication/
│   ├── bookings/
│   ├── cabins/
│   ├── check-in-out/
│   ├── dashboard/
│   └── settings/
├── pages/           # Route-level page components
├── services/        # Supabase API layer
├── ui/              # Reusable generic UI components
├── hooks/           # Shared custom hooks
├── context/         # React context (dark mode)
├── styles/          # Global styles
├── data/            # Seed data + uploader utility
└── utils/           # Constants and helpers
```
