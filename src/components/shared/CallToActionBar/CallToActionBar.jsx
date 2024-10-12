import { Container } from "@/components/layout"
import { DemoField } from ".."
import styles from './CallToActionBar.module.css'

export const CallToActionBar = () => {
  return (
    <section className={styles.main}>
      <Container className={styles.innerContainer} component="section">
        <h2>Ready to start?</h2>
        <DemoField />
      </Container>
    </section>
  );
}
