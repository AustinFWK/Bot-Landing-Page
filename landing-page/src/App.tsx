import Hero from "./sections/hero/Hero";
import ProblemSolution from "./sections/problem/Problem";
import Features from "./sections/features/Features";
import CallToAction from "./sections/cta/callToAction";
import { ThemeProvider } from "./components/themeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Hero />
      <ProblemSolution />
      <Features />
      <CallToAction />
    </ThemeProvider>
  );
}

export default App;
