import { useMediaQuery } from "@/hooks";
import { breakpoints } from "@/lib";
import { BackgroundPattern } from "@/components/ui";
import styles from "./TeamMembers.module.css";
import teamImg from "@/assets/about/mobile/image-team-members.jpg";

export const TeamMembers = () => {
  const matchesMobile = useMediaQuery(breakpoints.sm);

  return (
    <section className={styles.main}>
      {matchesMobile ? (
        <img src={teamImg} alt="PayApi Team working together at a cafe" />
      ) : (
        <div className={styles.teamImgHolder}></div>
      )}
      <BackgroundPattern className={styles.backgoundPatternImg} />
    </section>
  );
};
