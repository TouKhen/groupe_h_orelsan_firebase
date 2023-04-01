import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import "./Shop.css";
import whiteLogo from "../../img/logo/logo_white_small.svg";
import wtshirt from "../../img/merch/tshirt_blanc.png";
import ntshirt from "../../img/merch/tshirt_noir.png";
import duomug from "../../img/merch/duo_mug.png";
import mugn from "../../img/merch/mug_noir.png";
import bob from "../../img/merch/bob.png";

const Shop = () => {
  return (
    <>
      <Nav />
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
          <div className="page-shop-carousel-btns">
            <button>
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button>
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          <div className="carousel-item-container">
            <figure className="carousel-item">
              <img src="" />
            </figure>
            <figure className="carousel-item">
              <img src="" />
            </figure>
            <figure className="carousel-item">
              <img src="" />
            </figure>
            <figure className="carousel-item">
              <img src="" />
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
                <img
                  src={ntshirt}
                  alt="t-shirt noir avec le logo d'Orelsan dessus"
                />
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
                <img
                  src={wtshirt}
                  alt="t-shirt blanc avec le logo d'Orelsan dessus"
                />
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
                    alt="t-shirt noir avec le logo d'Orelsan dessus"
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
                    alt="t-shirt blanc avec le logo d'Orelsan dessus"
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
                    alt="t-shirt blanc avec le logo d'Orelsan dessus"
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
