import { MobileMenu, MobileMenuToggler, Navbar } from "@/components/shared";
import { ButtonPrimary, Logo } from "@/components/ui";
import { useEffect, useState } from "react";
import { Container } from "..";
import styles from "./Header.module.css";

export const Header = () => {
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth <= 720); // Initalize here to prevent flickers on window load
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleDetectMobileSize = () => {
      if (window.innerWidth <= 720) {
        setIsMobileSize(true);
      } else {
        setIsMobileSize(false);
      }
    };

    window.addEventListener("resize", handleDetectMobileSize);

    return () => window.removeEventListener("resize", handleDetectMobileSize);
  }, []);

  return (
    <header className={styles.main}>
      <Container className={styles.innerContainer}>
        <div className={styles.colLeft}>
          <Logo />
          {isMobileSize ? (
            <MobileMenuToggler
              isMobileMenuOpen={isMobileMenuOpen}
              onClick={handleMobileMenu}
            />
          ) : (
            <Navbar />
          )}
        </div>
        <ButtonPrimary className={styles.scheduleADemoBtn}>
          Schedule a Demo
        </ButtonPrimary>
      </Container>
      {isMobileMenuOpen && <MobileMenu handleMobileMenu={handleMobileMenu} />}
    </header>
  );
};
