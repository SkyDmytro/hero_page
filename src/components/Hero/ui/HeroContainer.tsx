import { HeroSubTitle } from "./HeroSubTitle";
import { HeroTitle } from "./HeroTitle";
import { HeroButton } from "./HeroButton";
import { HeroArrow } from "./HeroArrow";

export const HeroContainer = () => {
  const title = "Hero Page for G&M";
  const subtitle = "Test Task by Skydan Dmytro";
  return (
    <>
      <HeroTitle titleText={title} />
      <HeroSubTitle subtitleText={subtitle} />
      <HeroButton />
      <HeroArrow />
    </>
  );
};
