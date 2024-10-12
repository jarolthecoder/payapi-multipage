import { Container } from "@/components/layout";
import styles from "./EasyToImplement.module.css";
import easyToImplementImg from "../../../../assets/home/desktop/illustration-easy-to-implement.svg";

export const EasyToImplement = () => {
  return (
    <section className={styles.main}>
      <Container className={styles.innerContainer}>
        <figure className={styles.colLeft}>
          <img
            src={easyToImplementImg}
            className={styles.illustration}
            alt="Code Illustration"
          />
        </figure>
        <div className={styles.colRight}>
          <h2 className={styles.title}>Easy to implement</h2>
          <p className={styles.textContent}>
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </Container>
    </section>
  );
};
