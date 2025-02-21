import PropTypes from "prop-types";
import bgPatternCircleImg from "../../../assets/shared/desktop/bg-pattern-circle.svg";

export const BackgroundPattern = ({ className, style }) => {
  return (
    <img
      className={className}
      src={bgPatternCircleImg}
      alt="Decorative background pattern"
      style={{ pointerEvents: "none", ...style }}
    />
  );
};

// PropTypes
BackgroundPattern.propTypes = {
  className: PropTypes.string,
};
