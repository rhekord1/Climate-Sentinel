
import { BrowserRouter,Routes,Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import CameraPanel from "./pages/CameraPanel";

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/camera-panel" element={<CameraPanel/>} />
        </Routes>
      </BrowserRouter>
    );
}
