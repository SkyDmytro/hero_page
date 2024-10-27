import Sidebar from "./components/Sidebar";
import { HeroPage } from "./pages/HeroPage";
import { ParallaxPage } from "./pages/ParallaxPage";
import "./App.css";

export const App = () => {
  return (
    <>
      <section
        className="min-h-screen bg-gray-900 text-white overflow-hidden"
        id="Hero"
      >
        <Sidebar />
        <HeroPage />
      </section>
      <section className="h-screen" id="Parallax">
        <ParallaxPage />
      </section>
    </>
  );
};

export default App;
