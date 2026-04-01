import Hero from "./sections/hero/Hero";
import ProblemSolution from "./sections/problem/Problem";
import { ThemeProvider } from "./components/themeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Hero />
      <ProblemSolution />
    </ThemeProvider>
  );
}

export default App;
