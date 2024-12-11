import { Container, Hero } from "@/components/layout";
import { PartnersLogosGrid } from "@/components/shared";
import { HelpRequestForm } from "./components";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <main>
      <Hero
        title="Submit a help request and we’ll get in touch shortly."
        className={styles.hero}
      />
      <section>
        <Container className={styles.sectionContainer}>
          <HelpRequestForm />
          <div className={styles.partnersContainer}>
            <h4>Join the thousands of innovators already building with us</h4>
            <PartnersLogosGrid color="dark" />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
