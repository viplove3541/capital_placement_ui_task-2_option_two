import { useState } from "react"; // Import the useState hook to manage state
import { Layout, theme } from "antd"; // Import necessary components and styles
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components
import Sidebar from "./components/Sidebar"; // Import the Sidebar component
import ContentBox from "./components/ContentBox"; // Import the ContentBox component
import HeaderTab from "./components/HeaderTab"; // Import the HeaderTab component
import Info from "./pages/Info"; // Import the Info page component
import Home from "./pages/Home"; // Import the Home page component

const { Header, Content } = Layout; // Destructure the Header and Content components from Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true); // Define a state variable 'collapsed' and its setter function 'setCollapsed' with an initial value of 'true'

  return (
    <Router>
      <Layout className="fixed-height min-h-screen h-screen">
        {/* Render the sidebar with the 'collapsed' state and the 'setCollapsed' setter */}
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <Routes>
            {/* Define routing for the 'Info' page */}
            <Route path="/info/:firm" Component={Info} />
            {/* Define routing for the 'Home' page */}
            <Route path="/" Component={Home} />
          </Routes>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;

