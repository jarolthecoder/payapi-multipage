import { Container } from "@/components/layout"
import { BackgroundPattern } from "@/components/ui";
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.main}>
      <Container>
        <h1 className={styles.title}>Pricing</h1>
      </Container>
      <BackgroundPattern className={styles.backgoundPatternImg} />
    </section>
  );
}