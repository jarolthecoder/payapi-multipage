import styles from "./FeaturesList.module.css";

export const FeatureItem = ({ feature, isIncluded }) => {
  return (
    <li className={styles.feature} style={{ opacity: isIncluded ? 1 : 0.5 }}>
      {isIncluded && (
        <svg width="14" height="11" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 5.718L4.893 9.56l8.107-8"
            stroke="#BA4270"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      )}
      <p className={styles.featureName}>{feature}</p>
    </li>
  );
};
