import { HashRouter as Router, Routes, Route } from "react-router-dom";
import QrGenerator from "./components/QrGenerator";
import PlaySound from "./components/PlaySound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QrGenerator />} />
        <Route path="/play" element={<PlaySound />} />
      </Routes>
    </Router>
  );
}