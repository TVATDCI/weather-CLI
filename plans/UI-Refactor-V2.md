These prompts are designed to be **instruction-heavy**. They tell the agent exactly what directories to create, which dependencies to install, and provide the clean code based on our 2026 "Bento/Query" architecture.

---

## Pre-Requisite: The "Big Install"

I have already installed these dependencies for you:

```bash
npm install @tanstack/react-query lucide-react clsx tailwind-merge

```

---

## Prompt 1: Phase 1 & 2 (Scaffolding & API Layer)

**Copy/Paste this to your agent:**

> "I am refactoring a Weather-CLI app. Act as a senior frontend engineer. Please perform the following tasks:
>
> 1. **Directory Setup**: Create the following structure under `src/`: `api/`, `hooks/`, `utils/`, `components/ui/`, `components/weather/`, `components/layout/`, and `styles/`.
> 2. **API Client**: Create `src/api/axios.js` using a standard Axios instance with a base URL from `import.meta.env.VITE_API_BASE_URL`.
> 3. **Weather Service**: Create `src/api/weatherApi.js` with a method `getWeather(city)` that calls your backend.
> 4. **Utility Setup**: Create `src/utils/cn.js` to export a helper function using `clsx` and `twMerge` for dynamic Tailwind classes.
> 5. **Barrel Exports**: Create `index.js` files in each new directory to simplify imports.
>
> Ensure all files use modern ES modules and `.jsx` extension where applicable."

---

## Prompt 2: The "Logic" Layer (React Query & Geolocation)

**Copy/Paste this to your agent:**

> "Now, let's implement the data fetching logic using TanStack Query.
>
> 1. **Query Client**: Create `src/lib/queryClient.js` and initialize the `QueryClient`.
> 2. **Weather Hook**: Create `src/hooks/useWeather.jsx`. Instead of manual `useEffect`, use the `useQuery` hook from `@tanstack/react-query`. It should take a `city` as a key and call `weatherApi.getWeather`.
> 3. **Geolocation Hook**: Create `src/hooks/useGeolocation.jsx` that uses the browser's `navigator.geolocation` API to return the user's current coordinates.
> 4. **Main Entry**: Update `src/main.jsx` to wrap the `App` component with the `QueryClientProvider`.
>
> Provide the code for all these files."

---

## Prompt 3: The Atomic UI Library

**Copy/Paste this to your agent:**

> "We are building a professional UI library. Create the following atomic components in `src/components/ui/`. Use the `cn()` utility we created earlier for styling.
>
> 1. **Card.jsx**: A 'glassmorphism' container with `backdrop-blur-md`, `bg-white/10`, and a subtle border.
> 2. **Button.jsx**: A reusable button with variants for 'primary', 'secondary', and 'ghost'.
> 3. **Input.jsx**: A styled input field with a focus ring that matches our weather theme.
> 4. **Skeleton.jsx**: A pulse animation placeholder for loading states.
>
> Use `lucide-react` for any necessary icons. All components should use `.jsx`."

---

## Prompt 4: The Bento Grid Weather Display

**Copy/Paste this to your agent:**

> "Let's build the main feature. Create a 'Bento Grid' style weather display in `src/components/weather/WeatherDashboard.jsx`.
>
> 1. **Layout**: The dashboard should be a responsive grid (e.g., `grid-cols-1 md:grid-cols-4`).
> 2. **Main Tile**: A large tile (spanning 2 columns) showing the current temperature, city name, and a large weather icon.
> 3. **Detail Tiles**: Smaller tiles for 'Humidity', 'Wind Speed', 'UV Index', and 'Visibility'.
> 4. **Integration**: Use the `useWeather` hook to pull data and the `Skeleton` component for the loading state.
> 5. **Icons**: Use `lucide-react` (Sun, Cloud, Wind, Droplets) for each tile.
>
> Focus on high-end 2026 aesthetics—clean typography and generous spacing."

Based on your `package.json`, you have a solid foundation with **React 19** and **Tailwind v4**. Since you already have `axios` installed (`^1.13.5`), you can skip that.

However, for a professional "V2" refactor, you are missing the tools that handle the "heavy lifting" of state and class management in a modern React app.

### Updated Installation Command

Run this in your WSL terminal:

```bash
npm install @tanstack/react-query lucide-react clsx tailwind-merge

```

### Why you still need `clsx` and `tailwind-merge` with Tailwind v4

Even though Tailwind v4 is a massive upgrade (CSS-first, faster), it still doesn't solve **runtime class conflicts** inside your React components.

- **`clsx`**: Allows you to write clean conditional logic (e.g., `active && 'bg-blue-500'`).
- **`tailwind-merge`**: Specifically handles Tailwind's "last-class-wins" behavior. Without it, if you pass `px-4` to a component that already has `px-2`, both might stay in the HTML, leading to unpredictable styling.
- **The Result**: The `cn()` utility we'll create is the industry standard for building the "Atomic UI" library mentioned in your blueprint.

---

### Bento Grid Configuration (Tailwind v4 Style)

In Tailwind v4, we use a CSS-first configuration. Instead of a `tailwind.config.js`, add these "glass" and "bento" tokens directly to your main CSS file (usually `src/index.css` or `src/App.css`):

```css
@import "tailwindcss";

@theme {
  /* Custom Glassmorphism Tokens */
  --color-glass-white: rgba(255, 255, 255, 0.1);
  --color-glass-border: rgba(255, 255, 255, 0.2);
  --backdrop-blur-glass: blur(12px);

  /* Bento Grid Specifics */
  --spacing-bento-gap: 1rem;
}

/* Custom Bento Utility */
@utility bento-grid {
  display: grid;
  gap: var(--spacing-bento-gap);
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @variant md {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: 180px;
  }
}

@utility glass-card {
  background-color: var(--color-glass-white);
  backdrop-filter: var(--backdrop-blur-glass);
  border: 1px solid var(--color-glass-border);
  border-radius: 1.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
}
```

---

### Revised Gemini Agent Prompt: The Weather Bento

Use this prompt to have your agent build the main UI using the new v4 utilities:

> "Using the `@utility` classes we just defined (`bento-grid`, `glass-card`), create the `src/components/weather/WeatherDashboard.jsx` component.
>
> 1. **Structure**:
>
> - A `main` container using the `bento-grid` class.
> - **Tile 1 (Main)**: Spans 2 columns and 2 rows (`md:col-span-2 md:row-span-2`). Displays current Temp, City, and a large Lucide icon.
> - **Tile 2 (Forecast)**: Spans 2 columns (`md:col-span-2`). A horizontal scroll or list of the next 5 hours.
> - **Tiles 3-6 (Stats)**: Single tiles for Humidity, Wind, UV Index, and Pressure.
>
> 1. **Logic**: Use the `useWeather` hook. Show a loading state with our `Skeleton` components if `isLoading` is true.
> 2. **Icons**: Use `lucide-react` icons (Thermometer, Wind, Droplets, Sun).
>
> Ensure the design feels 'meaningful and innovative' as per my goal of building a professional portfolio piece."

---
