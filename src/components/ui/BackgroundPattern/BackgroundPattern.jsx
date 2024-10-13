import PropTypes from "prop-types";
import bgPatternCircleImg from "../../../assets/shared/desktop/bg-pattern-circle.svg";

export const BackgroundPattern = ({ className }) => {
  return (
    <img
      className={className}
      src={bgPatternCircleImg}
      alt="Decorative background pattern"
    />
  );
};

BackgroundPattern.propTypes ={
  className: PropTypes.string
}