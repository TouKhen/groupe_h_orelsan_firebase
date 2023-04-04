import "./Articles.css";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import img1 from "../../assets/img/thumbnails/Rectangle 23.png";
import img2 from "../../assets/img/thumbnails/Rectangle 25.png";
import img3 from "../../assets/img/thumbnails/Rectangle 26.png";
import img4 from "../../assets/img/thumbnails/Rectangle 27.png";
import img5 from "../../assets/img/thumbnails/Rectangle 28.png";
import Overlay from "../../Components/Overlay";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <>
      <Nav />
      <Overlay />
      <main className="page-articles">
        <section className="most-read">
          <article className="main-article">
            <Link to="#">
              <figure>
                <div>
                  <img src={img1} alt="Orelsan avec du feu derrière" />
                </div>
                <figcaption>
                  <div>
                    <p>PAR TESSA </p>
                    <p>00/00/1000</p>
                  </div>
                  <h1>ORELSAN MET LE FEU A LA DEFENSE ARENA !</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin tincidunt dolor uisque aliquam tellus et turpis
                    interdum, ut posuere sem egestas. Etiam nec viverra elit.
                    Nunc luctus in felis non imperdiet. Sed condimentum lobortis
                    tempor. In eu velit vitae lectus lobortis maximus.
                  </p>
                </figcaption>
              </figure>
            </Link>
          </article>
          <aside>
            <h2>Articles les plus lus</h2>
            <article>
              <Link to="#">
                <figure>
                  <div>
                    <img src={img1} alt="Orelsan avec du feu derrière" />
                  </div>
                  <figcaption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin tincidunt dolor{" "}
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </article>
            <article>
              <Link to="#">
                <figure>
                  <div>
                    <img src={img2} alt="Orelsan sur un pont" />
                  </div>
                  <figcaption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin tincidunt dolor{" "}
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </article>
          </aside>
        </section>

        <section className="big-article">
          <Link to="/articles/1">
            <figure>
              <div>
                <img src={img3} alt="" />
              </div>

              <figcaption>
                <div>
                  <p>PAR TESSA </p>
                  <p>00/00/1000</p>
                </div>
                <h3>Seul avec du monde autour</h3>
                <p>
                  <strong>
                    C’est à la fin du printemps et aux prémices de l’été que se
                    déroulera la tournée française d’Orelsan avec son album
                    civilisation, mais avant de vous dévoiler les dates,
                    revenons sur cet album.
                  </strong>
                  <br /> L'album "Civilisation" d'Orelsan, sorti en 2021, a
                  connu un grand succès auprès du public et de la critique. Avec
                  cet album, l'artiste normand livre une vision sombre et
                  introspective de notre société, à travers des textes ciselés
                  et une production soignée.
                </p>
                <p>
                  Civilisation est le cinquième album studio du rappeur français
                  Orelsan, sorti le 26 novembre 2021. Cet album est très attendu
                  par les fans du rappeur qui ont suivi son évolution musicale
                  depuis ses débuts en 2008. Civilisation représente un tournant
                  important dans la carrière d'Orelsan qui y aborde des thèmes
                  variés tels que la société, la technologie et l'environnement.
                </p>
              </figcaption>
            </figure>
          </Link>
        </section>

        <section className="other-articles">
          <article>
            <Link to="#">
              <figure>
                <div>
                  <img src={img4} alt="" />
                </div>

                <figcaption>
                  <div>
                    <p>PAR TESSA </p>
                    <p>00/00/1000</p>
                  </div>
                  <h3>TITRE XXXXXX</h3>
                  <p>
                    Sed purus massa, mattis sed eros ac, luctus tincidunt mi.
                    Cras eget augue tristique, molestie nibh nec, posuere
                    sapien. Suspendisse congue libero quis ligula convallis
                    aliquam. Mauris id sem gravida.
                  </p>
                </figcaption>
              </figure>
            </Link>
          </article>

          <article>
            <Link to="#">
              <figure>
                <div>
                  <img src={img5} alt="" />
                </div>

                <figcaption>
                  <div>
                    <p>PAR TESSA </p>
                    <p>00/00/1000</p>
                  </div>
                  <h3>TITRE XXXXXX</h3>
                  <p>
                    Sed purus massa, mattis sed eros ac, luctus tincidunt mi.
                    Cras eget augue tristique, molestie nibh nec, posuere
                    sapien. Suspendisse congue libero quis ligula convallis
                    aliquam. Mauris id sem gravida.
                  </p>
                </figcaption>
              </figure>
            </Link>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Articles;
