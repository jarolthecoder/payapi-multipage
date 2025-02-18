import { MobileMenu, MobileMenuToggler, Navbar } from "@/components/shared";
import { ButtonPrimary, Logo } from "@/components/ui";
import { Container } from "..";
import styles from "./Header.module.css";
import { useMediaQuery } from "@/hooks";
import { breakpoints } from "@/lib";
import { useAppContext } from "@/context/AppProvider";

export const Header = () => {
  const { isMobileMenuOpen } = useAppContext();
  const matchesMobile = useMediaQuery(breakpoints.md);

  return (
    <header className={styles.main}>
      <Container className={styles.innerContainer}>
        <div className={styles.colLeft}>
          <Logo />
          {matchesMobile ? (
            <MobileMenuToggler
            />
          ) : (
            <Navbar />
          )}
        </div>
        <ButtonPrimary className={styles.scheduleADemoBtn}>
          Schedule a Demo
        </ButtonPrimary>
      </Container>
      {isMobileMenuOpen && <MobileMenu />}
    </header>
  );
};
