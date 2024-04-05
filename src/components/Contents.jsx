import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Teachers from "../pages/Teachers";
import Students from "../pages/Students";
import Profile from "../pages/Profile";

const Contents = () => {
  return (
    <div>
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
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Routes>
    </div>
  );
};

export default Contents;
