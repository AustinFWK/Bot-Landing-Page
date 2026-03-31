import Hero from "./sections/hero/Hero";
import { ThemeProvider } from "./components/themeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Hero />
    </ThemeProvider>
  );
}

export default App;
