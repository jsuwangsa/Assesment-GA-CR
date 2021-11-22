import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import DetailPage from "../pages/detailpage/DetailPage";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default Routers;
