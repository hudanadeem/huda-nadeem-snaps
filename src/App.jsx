import "./App.scss";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotoPage from "./pages/Photo/PhotoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="photos/:id" element={<PhotoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
