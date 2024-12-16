import { Container } from "@/components/layout"
import styles from "./CultureAndPeople.module.css";

export const CultureAndPeople = () => {
  return (
    <section className={styles.main}>
      <Container className={styles.innerContainer}>
        <div className={styles.row}>
          <h2>The Culture</h2>
          <p>
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>
        <div className={styles.row}>
          <h2>The People</h2>
          <p>
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </div>
      </Container>
    </section>
  );
};
