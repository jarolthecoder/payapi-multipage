import { Container } from "@/components/layout"
import styles from "./VisionAndBusiness.module.css";

export const VisionAndBusiness = () => {
  return (
    <section className={styles.main}>
      <Container className={styles.innerContainer}>
        <div className={styles.row}>
          <h2>Our Vision</h2>
          <p>
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.
          </p>
        </div>
        <div className={styles.row}>
          <h2>Our Business</h2>
          <p>
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </div>
      </Container>
    </section>
  );
}
