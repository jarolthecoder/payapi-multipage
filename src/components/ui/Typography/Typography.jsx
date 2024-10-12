import styles from './Typography.module.css'
import classNames from "classnames";
import PropTypes from "prop-types";

export const Typography = ({
  component: Component = "p",
  // size = "medium",
  className,
  children,
  ...props
}) => {
  // // Get the size class based on the component and size prop
  // const sizeClassName = sizeMapping[Component]?.[size] || sizeMapping.p.medium; // Fallback to p.medium if not found

  // Use classNames to combine additional class names with predefined styles
  const typographyClass = classNames(
    // styles.typography, // Always apply the base typography class
    // sizeClassName, // Apply size-specific class
    className // Allow for additional class names
  );

  return (
    <Component className={typographyClass} {...props}>
      {children}
    </Component>
  );
};

// PropTypes
Typography.propTypes = {
  component: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  children: PropTypes.node.isRequired,
  props: PropTypes.object,
};

// const sizeMapping = {
//   h1: {
//     small: styles.h1Small,
//     medium: styles.h1Medium,
//     large: styles.h1Large,
//   },
//   h2: {
//     small: styles.h2Small,
//     medium: styles.h2Medium,
//     large: styles.h2Large,
//   },
//   h3: {
//     small: styles.h3Small,
//     medium: styles.h3Medium,
//     large: styles.h3Large,
//   },
//   p: {
//     small: styles.pSmall,
//     medium: styles.pMedium,
//     large: styles.pLarge,
//   },
//   span: {
//     small: styles.spanSmall,
//     medium: styles.spanMedium,
//     large: styles.spanLarge,
//   },
// };
