import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
  grade: Yup.string().required("Grade is required"),
  gender: Yup.string().required("Gender is required"),
  isVerified: Yup.boolean().oneOf([true], "You must verify the student")
});

const StudentForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    grade: "",
    gender: "",
    isVerified: false
  };

  const handleSubmit = (values) => {
    console.log("Student Data:", values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form style={{ maxWidth: "400px", margin: "auto" }}>
          <h2>Student Information Form</h2>

          <div>
            <label>Full Name:</label>
            <Field type="text" name="fullName" />
            <ErrorMessage name="fullName" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Grade:</label>
            <Field as="select" name="grade">
              <option value="">-- Select Grade --</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </Field>
            <ErrorMessage name="grade" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Gender:</label>
            <label>
              <Field type="radio" name="gender" value="Male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="Female" />
              Female
            </label>
            <label>
              <Field type="radio" name="gender" value="Other" />
              Other
            </label>
            <ErrorMessage name="gender" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>
              <Field type="checkbox" name="isVerified" />
              {" "}Is Verified
            </label>
            <ErrorMessage name="isVerified" component="div" style={{ color: "red" }} />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default StudentForm;