import { useEffect, useState } from "react";
import { DynamicBackgroundComponent } from "../components/DynamicBackgroundComponent";
export const HeroPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {mounted && <DynamicBackgroundComponent />}
    </div>
  );
};
