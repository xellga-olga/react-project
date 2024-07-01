import { FC } from "react";
import { Header } from "./common/components/header/header";
import { Banner } from "./common/components/banner/banner";
import { Feed } from "./modules/feed/components/feed/feed";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Feed />
    </div>
  );
};
