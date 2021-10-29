import React from "react";
import { Layout } from "antd";

const { Sider, Content } = Layout;

const TeacherDashboard = () => {
  return (
    <>
      <Layout>
        <Sider
          style={{
            height: "100vh",
            backgroundColor: "gray",
            position: "fixed",
          }}
        >
          Side Menu
        </Sider>
        <Layout>
          <Content style={{ height: "100vh", marginLeft: "250px" }}>
            <h1>Welcome to Teacher Dashboard</h1>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default TeacherDashboard;
