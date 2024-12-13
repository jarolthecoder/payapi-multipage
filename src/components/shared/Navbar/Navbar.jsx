import { navLinks } from "@/lib";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = ({ color = "dark" }) => {
  const navLinkClasses = classNames(
    styles.link,
    {
      [styles.linkDark]: color === "dark",
      [styles.linkLight]: color === "light",
    }
  );

  return (
    <nav>
      <ul className={styles.linkList}>
        {navLinks.map((link) => (
          <li key={link.label} className={navLinkClasses}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Prop Types 
Navbar.propTypes = {
  color: PropTypes.oneOf(["dark", "light"])
}