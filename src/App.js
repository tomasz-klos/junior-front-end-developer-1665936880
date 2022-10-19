import { Routes, Route } from "react-router";

import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./hocs/ProtectedRoute";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route
        path="/tasks/:title"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
