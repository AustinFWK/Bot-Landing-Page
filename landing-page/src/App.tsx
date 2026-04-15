import Hero from "./sections/hero/Hero";
import HowItWorks from "./sections/functionality/howItWorks";
import Features from "./sections/features/Features";
import CallToAction from "./sections/cta/callToAction";
import { ThemeProvider } from "./components/themeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Hero />
      <HowItWorks />
      <Features />
      <CallToAction />
    </ThemeProvider>
  );
}

export default App;
