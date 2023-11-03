import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateCommunity from "./components/CreateCommunity/CreateCommunity";
import { Landing } from "./components/Landing/Landing";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/newCommunity" element={<CreateCommunity />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
