import React, { useState } from "react";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    props.navigate(`/`);
  }

  function onChangeEmail(e) {
    setEmail(e.value.target);
  }
  function onChangePassword(e) {
    setPassword(e.value.target);
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          name="password"
          id="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
