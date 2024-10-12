import { Container } from "@/components/layout";
import styles from "./SimpleUXUI.module.css";
import simpleUIImg from "../../../../assets/home/desktop/illustration-simple-ui.svg";
import bgPatternCircleImg from "../../../../assets/shared/desktop/bg-pattern-circle.svg";

export const SimpleUI = () => {
  return (
    <section className={styles.main}>
      <Container className={styles.innerContainer}>
        <div className={styles.colLeft}>
          <h2 className={styles.title}>Simple UI & UX</h2>
          <p className={styles.textContent}>
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
        <figure className={styles.colRight}>
          <img
            src={simpleUIImg}
            className={styles.illustration}
            alt="Smart-phone displaying the PayAPI app simple UI"
          />
        </figure>
      </Container>
      {/* Pattern Image */}
      <img
        className={styles.backgoundPatternImg}
        src={bgPatternCircleImg}
        alt="Decorative background pattern"
      />
    </section>
  );
};
