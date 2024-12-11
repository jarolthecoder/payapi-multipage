import { useState } from "react";
import { ButtonSecondary, TextField } from "@/components/ui";
import styles from "./HelpRequestForm.module.css";

export const HelpRequestForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const { name, emailAddress, companyName, title, message } = formState;

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error
    if (Object.keys(errors).length > 0) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateFields = (data) => {
    const scopeErrors = {};

    // Return Object
    // Object.keys(data).forEach((key) => {
    //   if (formState[key].length === 0)
    //     scopeErrors[key] = {
    //         errorMessage: `${key} field is required`,
    //     };
    // });
    Object.keys(data).forEach((key) => {
      if (formState[key].length === 0)
        scopeErrors[key] = {
          errorMessage: `This field can't be empty`,
        };
    });

    return scopeErrors;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields(formState);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) {
      return;
    }
  };

  return (
    <form onSubmit={onFormSubmit} className={styles.main}>
      <div className={styles.fieldContainer}>
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={onInputChange}
          error={!!errors?.name}
          errorMessage={errors?.name && errors?.name?.errorMessage}
        />
      </div>
      <div className={styles.fieldContainer}>
        <TextField
          label="Email Address"
          name="emailAddress"
          value={emailAddress}
          onChange={onInputChange}
          error={!!errors?.emailAddress}
          errorMessage={
            errors?.emailAddress && errors?.emailAddress?.errorMessage
          }
        />
      </div>
      <div className={styles.fieldContainer}>
        <TextField
          label="Company Name"
          name="companyName"
          value={companyName}
          onChange={onInputChange}
          error={!!errors?.companyName}
          errorMessage={
            errors?.companyName && errors?.companyName?.errorMessage
          }
        />
      </div>
      <div className={styles.fieldContainer}>
        <TextField
          label="Title"
          name="title"
          value={title}
          onChange={onInputChange}
          error={!!errors?.title}
          errorMessage={errors?.title && errors?.title?.errorMessage}
        />
      </div>
      <div className={styles.fieldContainer}>
        <TextField
          textarea
          label="Message"
          name="message"
          value={message}
          rows={4}
          onChange={onInputChange}
          error={!!errors?.message}
          errorMessage={errors?.message && errors?.message?.errorMessage}
        />
      </div>
      <div className={`${styles.fieldContainer} ${styles.checkboxContainer}`}>
        <label className={styles.container}>
          Stay up-to-date with company announcements and updates to our API
          Submit
          <input type="checkbox"  />
          <span className={styles.checkmark}></span>
        </label>
      </div>
      <div className={styles.fieldContainer}>
        <ButtonSecondary type="submit">Submit</ButtonSecondary>
      </div>
    </form>
  );
};

const initialFormState = {
  name: "",
  emailAddress: "",
  companyName: "",
  title: "",
  message: "",
};
