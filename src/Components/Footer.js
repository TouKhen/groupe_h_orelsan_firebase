import { Link } from "react-router-dom";
import logo from "./logo_orelsan.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo Orelsan" />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="#">Albums</Link>
            </li>
            <li>
              <Link to="#">Vidéos</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="#">Tournées 2023</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">
                <i class="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i class="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i class="fa-brands fa-youtube"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i class="fa-brands fa-itunes"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i class="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i class="fa-brands fa-spotify"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="footer-copyright">
        ©2023 Copyright Orelsan.com. Réalisé par Thomas Castro.
      </p>
    </footer>
  );
};

export default Footer;
