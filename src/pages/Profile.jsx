import { Button, Typography } from "antd";
import { useAuth } from "../components/Auth";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    if (confirm("Are you sure!")) {
      logout();
      navigate("/login");
    }
  };
  return (
    <>
      <Title level={2} style={{ textAlign: "center" }}>
        Profile
      </Title>
      <div>
          <Title level={4}>Username: {user.username}</Title>
          <Title level={4}>Password: {user.password}</Title>
      </div>
      <Button onClick={handleLogout} danger>Logout</Button>
    </>
  );
};

export default Profile;
