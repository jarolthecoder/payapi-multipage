import { Container } from "@/components/layout";
import { PartnersLogosGrid } from "./PartnersLogosGrid";
import { BackgroundPattern, ButtonSecondary } from "@/components/ui";
import styles from "./WhoWeWorkWith.module.css";

export const WhoWeWorkWith = () => {
  return (
    <section className={styles.main}>
      <Container className={styles.innerContainer}>
        <div className={styles.colLeft}>
          <h2 className={styles.title}>Who we work with</h2>
          <p className={styles.textContent}>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <ButtonSecondary color="light">About Us</ButtonSecondary>
        </div>
        <div className={styles.colRight}>
          <PartnersLogosGrid />
        </div>
        <BackgroundPattern className={styles.backgoundPatternImg} />
      </Container>
    </section>
  );
};
