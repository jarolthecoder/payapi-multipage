import { ButtonSecondary } from "@/components/ui";
import { FeaturesList } from "../FeaturesList/FeaturesList";
import styles from "./Plans.module.css";

export const Plan = ({ plan }) => {
  const { name, description, price, features } = plan;
  return (
    <div className={styles.plan}>
      <div className={styles.planDetails}>
        <h3 className={styles.planName}>{name}</h3>
        <p className={styles.planDescription}>{description}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <FeaturesList features={features} />
      <ButtonSecondary className={styles.requestAccessBtn}>
        Request Access
      </ButtonSecondary>
    </div>
  );
};

