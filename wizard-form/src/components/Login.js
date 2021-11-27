import React from "react";
import "yup-phone";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import { Link } from "react-router-dom";

function Name() {

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <h1>Login</h1>
            <Formik
              initialValues={{
                state: "",
                city: "",
                zip: "",
              }}
            >
              {(_) => (
                <Form>
                  <TextField type="text" name="state" label="Username" />
                  <TextField type="text" name="city" label="Password" />
                  <TextField type="text" name="zip" label="Zip" />
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </Form>
              )}
            </Formik>
            <Link to="/signup">adsf</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Name;
