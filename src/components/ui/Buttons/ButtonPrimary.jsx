import PropTypes from "prop-types";
import styles from "./Buttons.module.css";
import classNames from "classnames";

export const ButtonPrimary = ({ children, onClick, className, ...props }) => {
  const buttonClasses = classNames(styles.btn, styles.btnPrimary, className);
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
ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  props: PropTypes.object,
};
