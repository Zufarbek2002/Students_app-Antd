import { useState } from "react";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReadOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import Contents from "./Contents";
import { useAuth } from "./Auth";
const { Header, Sider } = Layout;

const Sidebar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  if (user) {
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
                icon: <HomeOutlined />,
                label: "Home",
              },
              {
                key: "/teachers",
                icon: <ReadOutlined />,
                label: "Teachers",
              },
              {
                key: "/students",
                icon: <TeamOutlined />,
                label: "Students",
              },
              {
                key: "/profile",
                icon: <UserOutlined />,
                label: "Profile",
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
  }
};
export default Sidebar;
