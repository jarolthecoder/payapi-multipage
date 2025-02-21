import { Container } from "@/components/layout";
import { Stat } from "./Stat";
import styles from "./Stats.module.css";

export const Stats = () => {
  return (
    <section>
      <Container className={styles.innerContainer}>
        {statsData.map(({ title, stat }) => (
          <Stat key={title} title={title} stat={stat} />
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
