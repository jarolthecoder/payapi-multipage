import styles from "./Stats.module.css";

export const Stat = ({ title, stat }) => {
  return (
    <div key={title} className={styles.statContainer}>
      <h3 className={styles.statTitle}>{title}</h3>
      <p className={styles.statNumber}>{stat}</p>
    </div>
  );
};
