import "./utils/global.css";
import _ from "./utils/init.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Login from "./Pages/Admin/Login";
import SignOut from "./Pages/Admin/SignOut";
import BackOffice from "./Pages/Admin/BackOffice";
import Page404 from "./Pages/Page404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/signout" element={<SignOut />} />
      <Route path="/admin/backoffice" element={<BackOffice />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
