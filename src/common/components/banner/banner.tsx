import { FC } from "react";
import { Container } from "../ container/container";

interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
  return (
    <div className="bg-theme-green p-8 mb-8">
      <Container>
        <h1 className="text-center pb-2 text-5xl text-theme-white">
          BrainWave
        </h1>
        <p className="text-center text-2xl  text-theme-white">
          A place to share your knowledge.
        </p>
      </Container>
    </div>
  );
};
