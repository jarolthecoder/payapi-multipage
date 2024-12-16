import { Hero } from "@/components/layout";
import {
  CultureAndPeople,
  Stats,
  TeamMembers,
  VisionAndBusiness,
} from "./components";
import styles from "./About.module.css";

const About = () => {
  return (
    <main>
      <Hero
        className={styles.hero}
        title="We empower innovators by delivering access to the financial system"
      />
      <VisionAndBusiness />
      <TeamMembers />
      <Stats />
      <CultureAndPeople />
    </main>
  );
};

export default About;
