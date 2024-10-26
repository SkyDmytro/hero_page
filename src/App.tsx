import { HeroPage } from "./pages/HeroPage";
import { ParallaxPage } from "./pages/ParallaxPage";

export const App = () => {
  return (
    <>
      <section className="min-h-screen bg-gray-900 text-white overflow-hidden">
        <HeroPage />
      </section>
      <section className="h-screen">
        <ParallaxPage />
      </section>
    </>
  );
};

export default App;
