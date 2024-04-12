import React, { useState } from "react";
import { withFormik } from "formik";

const FormComponent = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="firstName" onChange={handleChange} />
      {errors.firstName && touched.firstName && (
        <div style={{ color: "red" }}>{errors.firstName}</div>
      )}
      <br />
      <label htmlFor="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lastName" onChange={handleChange} />
      <br></br>
      <label htmlFor="email">Email id: </label>
      <br />
      <input type="text" id="email" name="email" onChange={handleChange} />
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues: () => ({ firstName: "" }),

  // Custom sync validation
  validate: (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(FormComponent);

export default FormikApp;
