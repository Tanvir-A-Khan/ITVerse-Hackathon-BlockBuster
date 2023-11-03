import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BuyABX from "./components/BuyABX/BuyABX";
import CreateCommunity from "./components/CreateCommunity/CreateCommunity";
import { Landing } from "./components/Landing/Landing";
import { Layout } from "./components/Layout";
import PendingApprovalArts from "./components/PendingApprovalArts/PendingApprovalArts";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/buyABX" element={<BuyABX />} />
          <Route path="/newCommunity" element={<CreateCommunity />} />
          <Route
            path="/pendingApprovalArts/:id"
            element={<PendingApprovalArts />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
