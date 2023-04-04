import { Link } from "react-router-dom";
import logo from "./logo_orelsan.svg";
import "./Nav.css";
import { useState } from "react";

const Nav = () => {
  const [navClassesBool, editNavClassesBool] = useState(false);
  const [navClasses, editNavClasses] = useState("navbar close");
  const [btnNavClasses, editBtnNavClasses] = useState("fa-solid fa-bars");
  const openNav = () => {
    if (!navClassesBool) {
      editNavClassesBool(true);
      editNavClasses("navbar open");
      editBtnNavClasses("fa-solid fa-xmark");
    } else {
      editNavClassesBool(false);
      editNavClasses("navbar close");
      editBtnNavClasses("fa-solid fa-bars");
    }
  };

  return (
    <header className="main-header">
      <nav className={navClasses}>
        <ul>
          <li>
            <Link to="">Albums</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/">
              <img src={logo} />
            </Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="">Tournées 2023</Link>
          </li>
        </ul>
      </nav>

      <button className="btn btn-open-nav" onClick={openNav}>
        <i className={btnNavClasses}></i>
      </button>
    </header>
  );
};

export default Nav;
