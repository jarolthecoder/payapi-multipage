import { Container } from "@/components/layout";
import { Plan } from "./Plan";
import { plansData } from "./plansData";
import styles from "./Plans.module.css";

export const Plans = () => {
  return (
    <section className={styles.main}>
      <Container className={styles.innerContainer}>
        {plansData.map((plan) => (
          <Plan key={plan.name} plan={plan} />
        ))}
      </Container>
    </section>
  );
};
