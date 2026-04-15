import Hero from "./sections/hero/Hero";
import Instructions from "./sections/functionality/Instructions";
import Features from "./sections/features/Features";
import CallToAction from "./sections/cta/callToAction";
import { ThemeProvider } from "./components/themeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Hero />
      <Instructions />
      <Features />
      <CallToAction />
    </ThemeProvider>
  );
}

export default App;
