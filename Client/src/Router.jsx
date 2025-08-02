import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./Pages/Home";
import LoginComponent from "./Pages/Components/Login";
import RegisterComponent from "./Pages/Components/register";
import NotFoundComponent from "./Pages/NotFound";
import AllBrendsComp from "./Pages/Components/AllBrends";
import AllCarsComp from "./Pages/Components/AllCarsLidt";
import CarDetailsPageComp from "./Pages/Components/CarDetailsPage";
import DealerDetailsComp from "./Pages/Components/DealerDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/log-in" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/all-brends" element={<AllBrendsComp />} />
        <Route path="/car-details" element={<AllCarsComp />} />
        <Route path="/car=detailed-page" element={<CarDetailsPageComp />} />
        <Route path="/dealer-details" element={<DealerDetailsComp/> } />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
