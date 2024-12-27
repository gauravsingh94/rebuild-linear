import React from "react";

interface HeroProps {
  children: React.ReactNode;
}

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center my-6">{children}</div>;
};

export const HeroTitle = ({ children }: HeroProps) => {
  return <p className="text-5xl my-2">{children}</p>;
};

export const HeroSubtitle = ({ children }: HeroProps) => {
  return <p className="text-lg mb-12">{children}</p>;
};

export default Hero;
