import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Story } from "./components/Story";
import { Chapters } from "./components/Chapters";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Story />
      <Chapters />
      <Team />
      <Footer />
    </div>
  );
}