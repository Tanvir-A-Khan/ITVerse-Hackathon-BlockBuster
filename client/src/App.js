import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BuyABX from "./components/BuyABX/BuyABX";
import ArtworkDetail from "./components/Communities/ArtworkDetail";
import CommunityDetail from "./components/Communities/CommunityDetail";
import ExchangeTokens from "./components/Communities/ExchangeTokens";
import CreateCommunity from "./components/CreateCommunity/CreateCommunity";
import { Landing } from "./components/Landing/Landing";
import { Layout } from "./components/Layout";
import PendingApprovalArts from "./components/PendingApprovalArts/PendingApprovalArts";
import UploadArtWork from "./components/UploadArtWork/UploadArtWork";
import Myart from "./components/Communities/Myart";
import Sell from "./components/Communities/Sell";
import Auction from "./components/Communities/Auction";

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
          <Route path="/community/uploadArt/:id" element={<UploadArtWork />} />{" "}
          {/* route */}
          <Route path="/community/:id" element={<CommunityDetail />} />{" "}
          <Route path="/community/exchange/:id" element={<ExchangeTokens />} />{" "}
          <Route path="/myart/:id" element={<Myart/>} />{" "}
          {/* route */}
          <Route path="/artwork/:id" element={<ArtworkDetail />} />{" "}
          {/* Route */}
          <Route path="/sell/:id" element={<Sell />} />{" "}
          {/* Route */}
          <Route path="/auction/:id" element={<Auction />} />{" "}
          {/* Route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
