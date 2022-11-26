import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadPage from "./page/ReadPage";
import CreatePage from "./page/CreatePage";
import Updatepage from "./page/Updatepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReadPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update" element={<Updatepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
