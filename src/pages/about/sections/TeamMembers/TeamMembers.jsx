import { BackgroundPattern } from "@/components/ui";
import styles from "./TeamMembers.module.css";

export const TeamMembers = () => {
  return (
    <section className={styles.main}>
      <div className={styles.teamImgHolder}></div>
      <BackgroundPattern className={styles.backgoundPatternImg} />
    </section>
  );
}
