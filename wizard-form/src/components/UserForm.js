import React, { useState } from "react";
import { saveUser } from "../utils/firebase";
import Address from "./Address";
import Name from "./Name";
import Success from "./Success";
import Login from "./Login";

function UserForm() {
  const [step, setStep] = useState(0);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    state: "",
    city: "",
    zip: "",
  });

  const handleConfirm = () => {
    saveUser(user);
    next();
  };
  const next = (val) => setStep(val || step + 1);
  const prev = (val) => setStep(val || step - 1);
  const handleSave = (userData) => setUser({ ...user, ...userData });

  switch (step) {
    case 0:
      return <Name next={next} values={user} save={handleSave} />;

    case 1:
      return (
        <Address
          prev={prev}
          next={handleConfirm}
          values={user}
          save={handleSave}
        />
      );

    case 2:
      return <Success />;

    default:
      return <Login />;
  }
}

export default UserForm;
