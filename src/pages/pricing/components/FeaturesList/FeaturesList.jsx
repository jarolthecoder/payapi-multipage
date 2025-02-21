import { FeatureItem } from "./FeatureItem";
import styles from "./FeaturesList.module.css";

export const FeaturesList = ({ features }) => {
  return (
    <ul className={styles.featuresList}>
      {featuresList.map((feature) => {
        const isIncluded = features.includes(feature);
        return (
          <FeatureItem
            key={feature}
            feature={feature}
            isIncluded={isIncluded}
          />
        );
      })}
    </ul>
  );
};

const featuresList = [
  "Transactions",
  "Auth",
  "Identity",
  "Investments",
  "Assets",
  "Liabilities",
  "Income",
];
