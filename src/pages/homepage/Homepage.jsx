import {
  Advantages,
  EasyToImplement,
  HomeHero,
  SimpleUI,
  WhoWeWorkWith,
} from "./components";

const Homepage = () => {
  return (
    <main>
      <HomeHero />
      <WhoWeWorkWith />
      <EasyToImplement />
      <SimpleUI />
      <Advantages />
    </main>
  );
};

export default Homepage;
