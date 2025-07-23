import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./Pages/Home";
import LoginComponent from "./Pages/Components/Login";
import RegisterComponent from "./Pages/Components/register";
import NotFoundComponent from "./Pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/log-in" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
