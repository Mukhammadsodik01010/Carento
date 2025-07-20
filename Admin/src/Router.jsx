import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./Pages/Home";
import SingInComponent from "./Pages/Auth/SingIn";

function Router() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SingInComponent/> } />
      <Route path="/home" element={<HomeComponent />} />
  </Routes>
  </BrowserRouter>;
}

export default Router;
