import { ButtonSecondary } from "@/components/ui";
import styles from "./Plans.module.css";

export const Plan = ({ plan }) => {
  const { name, description, price, features } = plan;
  return (
    <div>
      <div className={styles.planDetails}>
        <h3 className={styles.planName}>{name}</h3>
        <p>{description}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <FeaturesList features={features} />
      <ButtonSecondary>Request Access</ButtonSecondary>
    </div>
  );
};

const FeaturesList = ({ features }) => {
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

const FeatureItem = ({ feature, isIncluded }) => {
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

const featuresList = [
  "Transactions",
  "Auth",
  "Identity",
  "Investments",
  "Assets",
  "Liabilities",
  "Income",
];