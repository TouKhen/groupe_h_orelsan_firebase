import { Link } from "react-router-dom";
import logo from "./logo_orelsan.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="main-header">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="">Albums</Link>
          </li>
          <li>
            <Link to="">Vidéos</Link>
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
    </header>
  );
};

export default Nav;
