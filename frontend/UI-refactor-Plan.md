To refactor my student weather app into a professional portfolio piece, i need to transition from "learning code" to "production-ready architecture."

As a MERN developer, i understand **component composition**, **API abstraction**, and **modern UI patterns** (like glassmorphism or neo-minimalism).

Here is a structured strategy and a specialized prompt which can be used.

---

## 🛠 Refactoring Roadmap: to Upgrade

To achieve the **DRY** and **Scalable** , focus on these three pillars:

| Pillar            | Current (Student)      | Refactored (Professional)                                        |
| ----------------- | ---------------------- | ---------------------------------------------------------------- |
| **Architecture**  | Logic inside `App.jsx` | Logic abstracted into **Custom Hooks** (`useWeather`).           |
| **UI/UX**         | Basic CSS/HTML         | **Tailwind + shadcn/ui** with "Glass" or "Dark Mode" aesthetics. |
| **Data Handling** | Direct `fetch` calls   | **Service Layer** (Axios instance) + caching/error boundaries.   |

---

## 🚀 The Terminal Prompt

```markdown
I am refactoring this weather application (MERN stack) for my professional portfolio.

My goals are:

1. Implement DRY principles by moving API logic out of components.
2. Upgrade the UI to a modern 2026 aesthetic (Neo-Minimalism or Glassmorphism) using Tailwind CSS and shadcn/ui.
3. Ensure the project is scalable for future features like 7-day forecasts and user-saved cities.

Review my current `frontend/src` directory and propose a Phase-by-Phase refactoring plan:

- Phase 1: Directory Restructuring (e.g., introducing /services, /hooks, and /types).
- Phase 2: Logic Abstraction (Creating a `useWeather` hook to handle loading, error, and data states).
- Phase 3: Component Atomization (Breaking `WeatherFetcher.jsx` into smaller, reusable UI atoms).
- Phase 4: UI/UX Modernization (Theme implementation and responsive layouts).

Please start by analyzing my current `WeatherFetcher.jsx` and suggesting how to split the logic from the view.
```

---

## 🎨 UI Inspiration for 2026

Recruiters love "polish." Instead of a white box with text, aim for:

- **Dynamic Backgrounds:** Change the background gradient based on the weather ID (e.g., deep blues for rain, soft oranges for sunset).
- **Micro-interactions:** Use `framer-motion` for subtle entrance animations when the weather card appears.
- **Skeuomorphic touches:** 2026 trends are moving toward "tactile" design—subtle shadows and textures that make elements feel "touchable."

### Recommended Component Structure

```plaintext
src/
├── api/              # Axios instances & interceptors
├── components/
│   ├── ui/           # Low-level shadcn components (Button, Input)
│   ├── weather/      # Feature-specific components (WeatherCard, ForecastRow)
│   └── layout/       # Navbar, Footer, Container
├── hooks/            # useWeather.js, useLocalStorage.js
├── utils/            # formatters.js (converters for Kelvin/Celsius)
└── App.jsx

```

---

## 💡 Next Step

**Custom Hook (`useWeather`)** based on current `weatherModule.js` logic to get the refactoring started.
