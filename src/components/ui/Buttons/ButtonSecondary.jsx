import PropTypes from "prop-types";
import styles from "./Buttons.module.css";
import classNames from "classnames";

export const ButtonSecondary = ({ children, onClick, className, ...props }) => {
  const buttonClasses = classNames(styles.btn, styles.btnSecondary, className);
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
  props: PropTypes.object,
};
