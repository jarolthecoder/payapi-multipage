import { ButtonPrimary } from "@/components/ui";
import { navLinks } from "@/lib";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.css";

export const MobileMenu = ({ handleMobileMenu }) => {
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
                onClick={handleMobileMenu}
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

MobileMenu.propTypes = {
  handleMobileMenu: PropTypes.func.isRequired,
};
