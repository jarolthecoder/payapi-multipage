import { Container } from "@/components/layout";
import styles from "./Hero.module.css";
import { BackgroundPattern } from "@/components/ui";
import PropTypes from "prop-types";

export const Hero = ({ title, className, }) => {
  return (
    <section className={styles.main}>
      <Container className={className}>
        <h1 className={styles.title}>{title}</h1>
      </Container>
      <BackgroundPattern className={styles.backgoundPatternImg} />
    </section>
  );
};

Hero.proptypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};
