import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Resume from "./pages/ResumePage";
import Projects from "./pages/ProjectsPage";
import Current from "./pages/CurrentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/current" element={<Current />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
