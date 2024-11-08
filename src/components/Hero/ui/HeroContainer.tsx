import { HeroSubTitle } from "./HeroSubTitle";
import { HeroTitle } from "./HeroTitle";
import { HeroButton } from "./HeroButton";
import { HeroArrow } from "./HeroArrow";

export const HeroContainer = () => {
  const title = "Hero Page Example";
  const subtitle =
    "A sleek, modern hero page built with React, TypeScript, and Vite.";
  return (
    <>
      <HeroTitle titleText={title} />
      <HeroSubTitle subtitleText={subtitle} />
      <HeroButton />
      <HeroArrow />
    </>
  );
};
