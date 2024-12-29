import Container from "@/app/components/container";
import Hero, { HeroSubtitle, HeroTitle } from "./components/Hero";

export default function HomePage() {
  return (
    <div>
      <Container>
        <Hero>
          <HeroTitle>
            Linear is the better way <br /> to build product
          </HeroTitle>
          <HeroSubtitle>
            Meet the new standart for the modern software development. <br />
            Streamline issues, sprints and product roadmaps
          </HeroSubtitle>
          <img src="/img/hero.webp" alt="Hero Image" />
        </Hero>
      </Container>
    </div>
  );
}
