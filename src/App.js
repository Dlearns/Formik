import React from "react";
import { withFormik, Field } from "formik";
import * as Yup from "yup";
import "./App.css";

const FormComponent = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="fname">First name:</label>
          <br />
          <Field id="fname" name="firstName" />
          {/* <input type="text" id="fname" name="firstName" onChange={handleChange} /> */}
          {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <Field id="lname" name="lastName" />
          {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
          <br></br>
          <label htmlFor="email">Email id: </label>
          <br />
          <Field id="email" name="email" />
          {errors.email && touched.email && <p>{errors.email}</p>}
          <br></br>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const FormikApp = withFormik({
  mapPropsToValues: () => ({ firstName: "", lastName: "", email: "" }),
  //validationSchema: ValidationSchema,
  // Custom sync validation
  validate: (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    return errors;
  },
  //validateOnChange: false,
  //validateOnBlur: false,
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(FormComponent);

export default FormikApp;
