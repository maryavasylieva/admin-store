import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";


import Authentification from "../Components/Authentification/Authentification";

const SIGNIN_SCHEMA = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
    username: Yup.string()
    .min(4, 'Too Short!')
    .max(24, 'Too Long!')
    .required('Required'),
});

const AuthPage = () => {
  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const { username, password } = values;
            alert(JSON.stringify(username, password));
            setSubmitting(false);
          }, 100);
        }}
        validationSchema={SIGNIN_SCHEMA}
      >
        {props => <Authentification {...props} />}
      </Formik>
    </div>
  );
};

export default AuthPage;
