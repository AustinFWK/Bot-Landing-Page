import Hero from "./sections/hero/Hero";
import { ThemeProvider } from "./components/themeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <h1>Valorant Patch Notes Bot</h1>
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
