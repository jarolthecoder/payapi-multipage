import { useMediaQuery } from "@/hooks";
import { breakpoints } from "@/lib";
import { BackgroundPattern } from "@/components/ui";
import styles from "./TeamMembers.module.css";
import teamImgDesktop from "@/assets/about/desktop/image-team-members.jpg";
import teamImgTablet from "@/assets/about/tablet/image-team-members.jpg";
import teamImgMobile from "@/assets/about/mobile/image-team-members.jpg";

export const TeamMembers = () => {
  const matchesMobile = useMediaQuery(breakpoints.sm);
  const matchesTablet = useMediaQuery(breakpoints.md);

  return (
    <section className={styles.main}>
      <img
        src={
          matchesMobile
            ? teamImgMobile
            : matchesTablet
            ? teamImgTablet
            : teamImgDesktop
        }
        alt="PayApi Team working together at a cafe"
        width="100%"
      />
      <BackgroundPattern className={styles.backgoundPatternImg} />
    </section>
  );
};
