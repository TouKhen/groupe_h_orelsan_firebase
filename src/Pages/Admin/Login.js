import databaseService from "../../utils/database";
import authService from "../../utils/auth";
import { useState } from "react";

const Login = () => {
  const [formObject, setFormObject] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
  });

  const valueChanged = (event) => {
    const { name, value } = event.target;
    const formObject_ = { ...formObject };
    formObject_[name] = value;
    setFormObject(formObject_);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let loginEmail = event.target.children.email.value,
      loginPassword = event.target.children.password.value;

    authService.login(loginEmail, loginPassword).then((result) => {
      if (result.error) {
        console.log("error");
      } else {
        const toStore = {
          accessToken: result.data.accessToken,
          uid: result.data.uid,
        };

        localStorage.setItem("UserCreds", JSON.stringify(toStore));
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="login-form">
        <label htmlFor="email">Email :</label>
        <input
          onChange={valueChanged}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />

        <label htmlFor="password">Email :</label>
        <input
          onChange={valueChanged}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
