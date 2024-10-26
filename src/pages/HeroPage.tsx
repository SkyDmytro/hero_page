import { useEffect, useState } from "react";
import { DynamicBackgroundComponent } from "../components/DynamicBackgroundComponent";
import { HeroPageTitle } from "../components/HeroPageTitle";
export const HeroPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const title = "Hero Page for G&M";
  const subtitle = "Test Task by Skydan Dmytro";

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {mounted && <DynamicBackgroundComponent />}
      <HeroPageTitle title={title} subtitle={subtitle} />
    </div>
  );
};
