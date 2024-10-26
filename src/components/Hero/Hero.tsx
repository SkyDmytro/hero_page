import { useEffect, useState } from "react";
import { DynamicBackgroundComponent } from "./ui/HeroDynamicBackgroundComponent";
import { HeroContainer } from "./ui/HeroContainer";
export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {mounted && <DynamicBackgroundComponent />}
      <HeroContainer />
    </div>
  );
};
