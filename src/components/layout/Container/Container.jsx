import classNames from "classnames";
import styles from "./Container.module.css";
import PropTypes from "prop-types";

export const Container = ({ component: Component = "div", children, className }) => {
  const containerClasses = classNames(className, styles.main);

  return <Component className={containerClasses}>{children}</Component>;
};

// Prop Types
Container.propTypes = {
  component: PropTypes.string,
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string
}