import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Analyze from "./pages/Analyze";
import Info from "./pages/Info";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Navigate to="/analyze" />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/info" element={<Info />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
