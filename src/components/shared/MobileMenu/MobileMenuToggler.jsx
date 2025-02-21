import { useAppContext } from "@/context/AppProvider";
import styles from "./MobileMenu.module.css";

export const MobileMenuToggler = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useAppContext();
  return (
    <button
      type="button"
      onClick={toggleMobileMenu}
      className={styles.mobileMenuToggler}
    >
      {isMobileMenuOpen ? (
        <svg width="22" height="23" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.839.54L21.96 2.66 13.12 11.5l8.84 8.839-2.121 2.121-8.84-8.84-8.838 8.84L.04 20.34l8.838-8.84L.04 2.662 2.16.54 11 9.378 19.839.54z"
            fill="#FBFCFE"
            fillRule="evenodd"
          />
        </svg>
      ) : (
        <svg width="28" height="17" xmlns="http://www.w3.org/2000/svg">
          <g fill="#36536B" fillRule="evenodd">
            <path d="M0 0h28v3H0zM0 7h28v3H0zM0 14h28v3H0z" />
          </g>
        </svg>
      )}
    </button>
  );
};