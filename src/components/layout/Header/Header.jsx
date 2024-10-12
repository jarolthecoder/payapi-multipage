import { Navbar } from "@/components/shared";
import { ButtonPrimary, Logo } from "@/components/ui";
import { Container } from "..";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.main}>
      <Container className={styles.innerContainer}>
        <div className={styles.colLeft}>
          <Logo />
          <Navbar />
        </div>
        <ButtonPrimary>Schedule a Demo</ButtonPrimary>
      </Container>
    </header>
  );
};
