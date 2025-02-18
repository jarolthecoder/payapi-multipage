import { ButtonPrimary } from "@/components/ui";
import { navLinks } from "@/lib";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.css";
import { useAppContext } from "@/context/AppProvider";

export const MobileMenu = () => {
  const { toggleMobileMenu } = useAppContext();
  return (
    <div className={styles.main}>
      <div className={styles.innerContainer}>
        <hr />
        <nav className={styles.mobileMenuNav}>
          <ul className={styles.linkList}>
            {navLinks.map((link) => (
              <li
                key={link.label}
                role="button"
                className={styles.navLink}
                onClick={toggleMobileMenu}
              >
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonPrimary className={styles.scheduleDemoBtn}>
          Schedule a Demo
        </ButtonPrimary>
      </div>
    </div>
  );
};