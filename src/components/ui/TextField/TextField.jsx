import PropTypes from "prop-types";
import styles from "./TextField.module.css";
import classNames from "classnames";

export const TextField = ({
  label,
  type = "text",
  textarea,
  value = "",
  name = "",
  error = false,
  errorMessage = "",
  onChange,
  className,
  rows,
  ...props
}) => {
  const labelHidden = value.length > 0 ? styles.labelHidden : null;
  const fieldClasses = classNames(
    styles.field,
    { [styles.error]: error },
    className
  );

  return (
    <>
      <div className={fieldClasses}>
        <label className={labelHidden}>{label}</label>
        {textarea ? (
          <textarea name={name} value={value} onChange={onChange} rows={rows} />
        ) : (
          <input type={type} name={name} value={value} onChange={onChange} {...props} />
        )}
      </div>
      {error && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
    </>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  textarea: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
