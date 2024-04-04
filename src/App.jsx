import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Router>
        <Sidebar />
      </Router>
    </div>
  );
};

export default App;
