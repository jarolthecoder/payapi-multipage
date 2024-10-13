import PropTypes from "prop-types";
import styles from "./Buttons.module.css";
import classNames from "classnames";

export const ButtonSecondary = ({ children, onClick, className, color = "dark", ...props }) => {
  const buttonClasses = classNames(
    styles.btn, 
    styles.btnSecondary, 
    {
      [styles.btnSecondaryDark]: color === "dark",
      [styles.btnSecondaryLight]: color === "light",
    },
    className
  );
  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Prop Types
ButtonSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.oneOf(["dark", "light"]),
  props: PropTypes.object,
};
