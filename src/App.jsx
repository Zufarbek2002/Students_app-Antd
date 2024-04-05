import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import { AuthProvider } from "./components/Auth";

const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Sidebar />
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
