import React, { useState } from "react";
import * as Yup from "yup";
import "yup-phone";
import { Formik, Form } from "formik";
import TextField from "./TextField";

const validate = Yup.object({
  state: Yup.string()
    .max(30, "Must be 30 characters of less")
    .required("Required"),
  city: Yup.string()
    .max(30, "Must be 30 characters of less")
    .required("Required"),
  zip: Yup.number().required("Required"),
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
                state: "",
                city: "",
                zip: "",
              }}
              validationSchema={validate}
              onSubmit={handleSave}
            >
              {(_) => (
                <Form>
                  <TextField type="text" name="state" label="State" />
                  <TextField type="text" name="city" label="City" />
                  <TextField type="text" name="zip" label="Zip" />
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
