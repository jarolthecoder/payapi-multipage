import { Container } from "@/components/layout";
import { DemoField } from "@/components/shared";
import styles from "./Hero.module.css";
import phoneImg from "../../../../assets/home/desktop/illustration-phone-mockup.svg";
import bgPatternCircleImg from "../../../../assets/shared/desktop/bg-pattern-circle.svg";

export const Hero = () => {
  return (
    <section>
      <Container className={styles.innerContainer}>
        <div className={styles.colLeft}>
          <h1 className={styles.title}>
            Start building with our APIs for absolutely free.
          </h1>
          <div className={styles.demoFieldContainer}>
            <DemoField />
          </div>
          <p className={styles.lead}>
            Have any questions?{" "}
            <a href="/contact" className={styles.leadLink}>
              Contact Us
            </a>
          </p>
        </div>
        <figure className={styles.colRight}>
          <img
            src={phoneImg}
            alt="Smart-phone Illustration"
            className={styles.phoneIllustrationImg}
          />
        </figure>
        {/* Pattern Image */}
        <img
          className={styles.backgoundPatternImg}
          src={bgPatternCircleImg}
          alt="Decorative background pattern"
        />
      </Container>
    </section>
  );
};
