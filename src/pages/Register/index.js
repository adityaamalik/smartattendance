import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Button, message } from "antd";
import { Link } from "react-router-dom";

const Register = (props) => {
  useEffect(() => {
    if (
      props?.location?.state?.role === null ||
      props?.location?.state?.role === undefined
    ) {
      window.location.pathname = "/";
    }
  }, [props?.location?.state?.role]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    if (email === "") {
      message.error("Please enter email !");
    } else if (password === "") {
      message.error("Please enter password !");
    } else {
      const role = props?.location?.state?.role?.toLowerCase();

      props.history.push(`/${role}dashboard`);
    }
  };

  return (
    <>
      <S.Container>
        <h1>Welcome {props?.location?.state?.role}</h1>
        <br />
        <h3>Register</h3>
        <br />
        <br />
        <S.AuthInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <S.AuthInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <Button onClick={register}>Register</Button>

        <br />
        <br />
        <Link
          to={{
            pathname: "/login",
            state: { role: props?.location?.state?.role },
          }}
        >
          Already Registered ?
        </Link>
      </S.Container>
    </>
  );
};

export default Register;
