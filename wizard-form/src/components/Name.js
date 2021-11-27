import React, { useState } from "react";
import * as Yup from "yup";
import "yup-phone";
import { Formik, Form } from "formik";
import TextField from "./TextField";

const validate = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters of less")
    .required("Required"),
  lastName: Yup.string()
    .max(15, "Must be 15 characters of less")
    .required("Required"),
  email: Yup.string().email("Email is not valid").required("Required"),
  phone: Yup.string().phone("Phone is not valid").required("Required"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters long")
    .required("Required"),
  confirmPass: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match")
    .required("Required"),
});

function Name(props) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (values) => {
    console.log(values);
    props.save({ ...values });
    setIsSaved(true);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <h1>Signup</h1>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
                confirmPass: "",
              }}
              validationSchema={validate}
              onSubmit={handleSave}
            >
              {(_) => (
                <Form>
                  <TextField type="text" name="firstName" label="First Name" />
                  <TextField type="text" name="lastName" label="Last Name" />
                  <TextField type="email" name="email" label="Email" />
                  <TextField type="phone" name="phone" label="Phone" />
                  <TextField type="password" name="password" label="Password" />
                  <TextField
                    type="password"
                    name="confirmPass"
                    label="Confirm Password"
                  />
                  <button className="btn btn-primary" type="submit">
                    Save
                  </button>
                  <button
                    className="btn btn-default"
                    disabled={!isSaved}
                    onClick={props.next}
                  >
                    Next
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Name;
