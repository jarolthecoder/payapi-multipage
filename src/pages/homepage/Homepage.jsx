import {
  Advantages,
  EasyToImplement,
  Hero,
  SimpleUI,
  WhoWeWorkWith,
} from "./components";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <WhoWeWorkWith />
      <EasyToImplement />
      <SimpleUI />
      <Advantages />
    </main>
  );
};

export default Homepage;
