import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Checkbox, Form, Input, Space } from "antd";
import { useAuth } from "../components/Auth";
import { Navigate, useNavigate } from "react-router-dom";
import { Typography } from "antd";
const { Title } = Typography;
const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const onFinish = (values) => {
    if (values.username.length >= 4 && values.password.length >= 4) {
      localStorage.setItem("data", JSON.stringify(values));
      login(values);
      navigate("/");
    } else return alert("Username or password length to short! (more 4)");
  };
  if (!user) {
    return (
      <div style={{}}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          style={{ width: "50%", margin: "auto", marginTop: 100 }}
        >
          <Space
            style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: 10 }}
          >
            <Avatar size={60} icon={<UserOutlined size="large" />} />
          </Space>

          <Title style={{ textAlign: "center" }}>Login</Title>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="#">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
              size="large"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  } else return <Navigate to="/profile" />;
};

export default Login;
