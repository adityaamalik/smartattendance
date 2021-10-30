import React from "react";
import { Layout, Row, Col, Input } from "antd";
import * as S from "./styles";
import SideMenu from "../../components/SideMenu";

const { Content } = Layout;

const TeacherCreateClass = () => {
    return (
        <>
            <Layout>
                <SideMenu isTeacher={true} />
                <Layout style={{ backgroundColor: "white" }}>
                    <Content
                        style={{
                            height: "100vh",
                            marginLeft: "250px",
                        }}
                    >
                        <S.Heading>Create New Class</S.Heading>
                        <Row>
                            <Col span={10}>
                                <Input
                                    type="text"
                                    placeholder="Name of class"
                                />
                            </Col>
                            <Col span={1}></Col>
                            <Col span={10}>
                                <Input type="text" placeholder="Subject Code" />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "20px" }}>
                            <Col span={10}>
                                <Input
                                    type="text"
                                    placeholder="Default Meeting Link"
                                />
                            </Col>
                            <Col span={1}></Col>
                            <Col span={10}>
                                <Input
                                    type="text"
                                    placeholder="Number of Days/Week"
                                />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "20px" }}>
                            <Col span={10}>
                                <Input type="text" placeholder="Start Time" />
                            </Col>
                            <Col span={1}></Col>
                            <Col span={10}>
                                <Input type="text" placeholder="End Time" />
                            </Col>
                        </Row>
                        <br />
                        <h2>Add students</h2>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default TeacherCreateClass;
