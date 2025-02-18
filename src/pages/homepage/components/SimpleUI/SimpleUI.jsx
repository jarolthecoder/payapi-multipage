import { Container } from "@/components/layout";
import styles from "./SimpleUXUI.module.css";
import simpleUIImg from "../../../../assets/home/desktop/illustration-simple-ui.svg";
import { BackgroundPattern } from "@/components/ui";

export const SimpleUI = () => {
  return (
    <section className={styles.main}>
      <Container className={styles.innerContainer}>
        <div className={styles.colLeft}>
          <h2 className={styles.title}>Simple UI & UX</h2>
          <p className={styles.textContent}>
            Our pre-built form is easy to integrate in your app or website&apos;s
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
      <BackgroundPattern className={styles.backgoundPatternImg} />
    </section>
  );
};
