import React, { useState } from "react";
import { Layout, Card, Row, Col, Button } from "antd";
import * as S from "./styles";
import SideMenu from "../../components/SideMenu";

const { Content } = Layout;

const StudentClasses = () => {
    const [classes] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <>
            <Layout>
                <SideMenu />
                <Layout style={{ backgroundColor: "white" }}>
                    <Content
                        style={{
                            height: "100vh",
                            marginLeft: "250px",
                        }}
                    >
                        <S.Heading>Your Classes</S.Heading>
                        <Row>
                            {classes.map((classes) => (
                                <Col lg={8} md={12} sm={12} key={classes}>
                                    <Card
                                        hoverable
                                        title="Class name"
                                        style={{
                                            width: 300,
                                            marginTop: "10px",
                                        }}
                                    >
                                        <Row>
                                            <Col
                                                span={12}
                                                style={{ color: "gray" }}
                                            >
                                                Taught By
                                            </Col>
                                            <Col
                                                span={12}
                                                style={{ textAlign: "right" }}
                                            >
                                                Mr. Ajay Kumar
                                            </Col>
                                        </Row>

                                        <Row style={{ marginTop: "10px" }}>
                                            <Col
                                                span={20}
                                                style={{ color: "gray" }}
                                            >
                                                Total Lectures
                                            </Col>
                                            <Col
                                                span={4}
                                                style={{ textAlign: "right" }}
                                            >
                                                50
                                            </Col>
                                        </Row>

                                        <Row style={{ marginTop: "10px" }}>
                                            <Col
                                                span={20}
                                                style={{ color: "gray" }}
                                            >
                                                Total Attended
                                            </Col>
                                            <Col
                                                span={4}
                                                style={{ textAlign: "right" }}
                                            >
                                                30
                                            </Col>
                                        </Row>

                                        <Row style={{ marginTop: "10px" }}>
                                            <Col
                                                span={20}
                                                style={{ color: "gray" }}
                                            >
                                                Total Absent
                                            </Col>
                                            <Col
                                                span={4}
                                                style={{ textAlign: "right" }}
                                            >
                                                20
                                            </Col>
                                        </Row>

                                        <Row style={{ marginTop: "10px" }}>
                                            <Col
                                                span={20}
                                                style={{ color: "gray" }}
                                            >
                                                Physical Attendance %
                                            </Col>
                                            <Col
                                                span={4}
                                                style={{ textAlign: "right" }}
                                            >
                                                60 %
                                            </Col>
                                        </Row>

                                        <Row style={{ marginTop: "10px" }}>
                                            <Col
                                                span={20}
                                                style={{ color: "gray" }}
                                            >
                                                Your Attentive %
                                            </Col>
                                            <Col
                                                span={4}
                                                style={{ textAlign: "right" }}
                                            >
                                                50 %
                                            </Col>
                                        </Row>

                                        <Row
                                            style={{
                                                marginTop: "10px",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Col span={24}>
                                                <Button danger>Unenrol</Button>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default StudentClasses;
