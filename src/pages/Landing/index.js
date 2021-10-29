import React from "react";
import { Row, Col } from "antd";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <S.Container>
        <h1>Smart Attendance System</h1>
        <br />
        <br />
        <h3>Please select your role in the institution from below</h3>

        <Row justify="center" align="middle">
          <Col span={12}>
            <Link
              to={{
                pathname: "/login",
                state: { role: "Student" },
              }}
            >
              <S.RoleButton size="large">Student</S.RoleButton>
            </Link>
          </Col>
          <Col span={12}>
            <Link
              to={{
                pathname: "/login",
                state: { role: "Teacher" },
              }}
            >
              <S.RoleButton size="large">Teacher</S.RoleButton>
            </Link>
          </Col>
        </Row>
      </S.Container>
    </>
  );
};

export default Landing;
