import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import Contents from "./Contents";
const { Header, Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={['/']}
          onClick={({ key }) => {
            if (key == "logout") {
              navigate('/login')
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "/",
              icon: <UserOutlined />,
              label: "Home",
            },
            {
              key: "/teachers",
              icon: <VideoCameraOutlined />,
              label: "Teachers",
            },
            {
              key: "/students",
              icon: <UploadOutlined />,
              label: "Students",
            },
            {
              key: "/profile",
              icon: <UploadOutlined />,
              label: "Profile",
            },
            {
              key: "logout",
              icon: <UploadOutlined />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            height: "100vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Contents />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
