import logo from "./logo.svg";
import "./App.css";
import _ from "./utils/init.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignOut from "./Pages/SignOut";
import BackOffice from "./Pages/BackOffice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signout" element={<SignOut />} />
      <Route path="/backoffice" element={<BackOffice />} />
    </Routes>
  );
}

export default App;
