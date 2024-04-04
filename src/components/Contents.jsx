import Home from "../pages/Home";
import { AuthProvider } from "./Auth";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Teachers from "../pages/Teachers";
import Students from "../pages/Students";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const Contents = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/teachers"
            element={
              <RequireAuth>
                <Teachers />
              </RequireAuth>
            }
          />
          <Route
            path="/students"
            element={
              <RequireAuth>
                <Students />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default Contents;
