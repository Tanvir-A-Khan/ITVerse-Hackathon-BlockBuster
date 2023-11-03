import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BuyABX from "./components/BuyABX/BuyABX";
import CreateCommunity from "./components/CreateCommunity/CreateCommunity";
import { Landing } from "./components/Landing/Landing";
import { Layout } from "./components/Layout";
import PendingApprovalArts from "./components/PendingApprovalArts/PendingApprovalArts";
import CommunityDetail from './components/Communities/CommunityDetail';
import ArtworkDetail from './components/Communities/ArtworkDetail';

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
          <Route path="/community/:id" element={<CommunityDetail />} /> {/* route */}
          <Route path="/artwork/:id" element={<ArtworkDetail />} /> {/* Route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
