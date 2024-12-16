import { Container } from "@/components/layout";
import styles from "./Stats.module.css";

export const Stats = () => {
  return (
    <section>
      <Container className={styles.innerContainer}>
        {statsData.map(({ title, stat }) => (
          <div key={title} className={styles.statContainer}>
            <h3 className={styles.statTitle}>{title}</h3>
            <p className={styles.statNumber}>{stat}</p>
          </div>
        ))}
      </Container>
    </section>
  );
};

const statsData = [
  { title: "Team Members", stat: "300+" },
  { title: "Offices in the US", stat: "3" },
  { title: "Transactions Analyzed", stat: "10M+" },
];
