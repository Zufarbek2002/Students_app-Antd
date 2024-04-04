import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Router>
        <Sidebar />
      {/* <AuthProvider>
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/teachers" element={<RequireAuth><Teachers /></RequireAuth>} />
          <Route path="/students" element={<RequireAuth><Students /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        </Routes>
      </AuthProvider> */}
    </Router>
    </div>
  )
}

export default App