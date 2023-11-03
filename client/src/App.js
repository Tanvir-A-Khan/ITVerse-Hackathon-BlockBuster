import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Landing } from "./components/Landing/Landing";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
