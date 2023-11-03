import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Landing } from "./components/Landing/Landing";
import { Layout } from "./components/Layout";
import CommunityDetail from './components/Communities/CommunityDetail';
import ArtworkDetail from './components/Communities/ArtworkDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/community/:id" element={<CommunityDetail />} /> {/* route */}
          <Route path="/artwork/:id" element={<ArtworkDetail />} /> {/* Route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;