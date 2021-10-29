import React from "react";
import { Layout } from "antd";
import * as S from "./styles";
import { Link } from "react-router-dom";
import {
    HomeOutlined,
    BookOutlined,
    MailOutlined,
    LogoutOutlined,
    LineChartOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const SideMenu = () => {
    return (
        <Sider
            style={{
                height: "100vh",
                backgroundColor: "#4287f5",
                position: "fixed",
            }}
        >
            <Link to="/studentdashboard">
                <S.SideMenu>
                    <HomeOutlined
                        style={{ color: "white", fontSize: "40px" }}
                    />
                    <h1 style={{ color: "white", fontSize: "25px" }}>Home</h1>
                </S.SideMenu>
            </Link>
            <Link to="/studentclasses">
                <S.SideMenu>
                    <BookOutlined
                        style={{ color: "white", fontSize: "40px" }}
                    />
                    <h1 style={{ color: "white", fontSize: "25px" }}>
                        Classes
                    </h1>
                </S.SideMenu>
            </Link>
            <Link to="/studentinvitations">
                <S.SideMenu>
                    <MailOutlined
                        style={{ color: "white", fontSize: "40px" }}
                    />
                    <h1 style={{ color: "white", fontSize: "25px" }}>
                        Invitations
                    </h1>
                </S.SideMenu>
            </Link>
            <Link to="/studentstatistics">
                <S.SideMenu>
                    <LineChartOutlined
                        style={{ color: "white", fontSize: "40px" }}
                    />
                    <h1 style={{ color: "white", fontSize: "25px" }}>
                        Statistics
                    </h1>
                </S.SideMenu>
            </Link>
            <Link to="/studentlogout">
                <S.SideMenu>
                    <LogoutOutlined
                        style={{ color: "white", fontSize: "40px" }}
                    />
                    <h1 style={{ color: "white", fontSize: "25px" }}>Logout</h1>
                </S.SideMenu>
            </Link>
        </Sider>
    );
};

export default SideMenu;
