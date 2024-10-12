import styles from "./Advantages.module.css";
import PropTypes from "prop-types";

export const AdvantageItem = ({ icon, title, description }) => {
  return (
    <div className={styles.advantageBox}>
      <img src={icon} alt={title} className={styles.advantageIcon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Prop Types
AdvantageItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
