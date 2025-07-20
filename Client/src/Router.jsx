import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
