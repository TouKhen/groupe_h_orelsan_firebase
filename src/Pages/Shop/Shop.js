import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import "./Shop.css";
import mugciv from "../../assets/img/merch/mugblancciv.png";
import casquettenoire from "../../assets/img/merch/casquettenoire.png";
import casquetteblanche from "../../assets/img/merch/casquetteblanche.png";
import muglogo from "../../assets/img/merch/muglogo.png";
import whiteLogo from "../../assets/img/logo/logo_white_small.svg";
import wtshirt from "../../assets/img/merch/tshirt_blanc.png";
import ntshirt from "../../assets/img/merch/tshirt_noir.png";
import duomug from "../../assets/img/merch/duo_mug.png";
import mugn from "../../assets/img/merch/mug_noir.png";
import bob from "../../assets/img/merch/bob.png";
import Overlay from "../../Components/Overlay";

const Shop = () => {
  return (
    <>
      <Nav />
      <Overlay />
      <main className="page-shop">
        <section className="page-shop-tips">
          <p>
            Livraison et retours gratuits <br />
            Membres : Livraison et retours gratuits sous 30 jours.
            <Link to="#">En savoir plus Rejoignez nous.</Link>
          </p>
        </section>

        <section className="page-shop-new">
          <p>Nouveauté</p>
          <h1>La gamme civilisation</h1>
          <p>Inspiré du dernier album</p>
          <Link className="btn" to="#">
            acheter
          </Link>
        </section>

        <section className="page-shop-sections">
          <ul>
            <li>
              <Link to="#">Vêtements</Link>
            </li>
            <li>-</li>
            <li>
              <Link to="#">Accessoires</Link>
            </li>
          </ul>
        </section>

        <section className="page-shop-carousel">
          <div className="carousel-item-container">
            <figure className="carousel-item">
              <Link to="#">
                <img src={mugciv} alt="Mug avec civilsation écrit dessus" />
              </Link>
            </figure>
            <figure className="carousel-item">
              <Link to="#">
                <img
                  src={casquettenoire}
                  alt="Casquette noire avec logo d'Orelsan"
                />
              </Link>
            </figure>
            <figure className="carousel-item">
              <Link to="#">
                <img
                  src={casquetteblanche}
                  alt="Casquette blanche avec logo d'Orelsan"
                />
              </Link>
            </figure>
            <figure className="carousel-item">
              <Link to="#">
                <img src={muglogo} alt="Mug avec logo d'Orelsan" />
              </Link>
            </figure>
          </div>
        </section>

        <section className="page-shop-exclus">
          <h2 className="section-title">
            <img src={whiteLogo} alt="Logo blanc d'Orelsan" />
            Exclus web
          </h2>

          <section className="item-list">
            <figure className="item">
              <Link to="#">
                <div>
                  <img
                    src={ntshirt}
                    alt="t-shirt noir avec le logo d'Orelsan dessus"
                  />
                </div>
                <figcaption>
                  <p>
                    T-shirtXXX
                    <br />
                    XXXXXXXXXXX
                  </p>
                  <p>30.00€</p>
                </figcaption>
              </Link>
            </figure>

            <figure className="item">
              <Link to="#">
                <div>
                  <img
                    src={wtshirt}
                    alt="t-shirt blanc avec le logo d'Orelsan dessus"
                  />
                </div>
                <figcaption>
                  <p>
                    T-shirtXXX
                    <br />
                    XXXXXXXXXXX
                  </p>
                  <p>30.00€</p>
                </figcaption>
              </Link>
            </figure>
          </section>
        </section>

        <section className="page-shop-collection">
          <h2 className="section-title">
            <img src={whiteLogo} alt="Logo blanc d'Orelsan" />
            Nouvelle Collection
          </h2>

          <section className="item-list">
            <figure className="item">
              <Link to="#">
                <div>
                  <img
                    src={bob}
                    alt="Femme qui porte un bob avec le logo d'Orelsan dessus'"
                  />
                </div>
                <figcaption>
                  <p>
                    bobXXX
                    <br />
                    XXXXXXXXXXX
                  </p>
                  <p>30.00€</p>
                </figcaption>
              </Link>
            </figure>

            <figure className="item">
              <Link to="#">
                <div>
                  <img
                    src={duomug}
                    alt="Deux mug avec le logo d'Orelsan dessus qui se collent"
                  />
                </div>
                <figcaption>
                  <p>
                    Duo mugXXX
                    <br />
                    XXXXXXXXXXX
                  </p>
                  <p>30.00€</p>
                </figcaption>
              </Link>
            </figure>

            <figure className="item">
              <Link to="#">
                <div>
                  <img
                    src={mugn}
                    alt="Mug noir avec le logo en blanc d'Orelsan dessus"
                  />
                </div>
                <figcaption>
                  <p>
                    mugXXX
                    <br />
                    XXXXXXXXXXX
                  </p>
                  <p>30.00€</p>
                </figcaption>
              </Link>
            </figure>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
