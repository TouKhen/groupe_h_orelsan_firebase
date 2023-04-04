import { useEffect, useState } from "react";
import databaseService from "../../utils/database";
import Nav from "../../Components/Nav";
import Overlay from "../../Components/Overlay";
import "./Home.css";
import logo from "../../assets/img/logo/logo_orelsan.svg";
import logoblanc from "../../assets/img/logo/logo_orelsan_tour_blanc.png";
import video from "../../assets/video/video.mp4";
import coveretcd from "../../assets/img/merch/coveretcd.png";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

const Home = () => {
  let dates = [],
    tracks_array = [];
  const [getDates, setDates] = useState(dates);

  useEffect(() => {
    databaseService.readData("dates/", (data) => {
      if (data === null) {
        setDates([]);
      } else {
        const dateArray = [];
        // loop over to get object keys and values then push object with id, ville, date and lieu to dateArray
        for (let i = 0; i < Object.keys(data).length; i++) {
          dateArray.push({
            id: Object.keys(data)[i],
            ville: Object.values(data)[i].ville,
            date: Object.values(data)[i].date,
            pays: Object.values(data)[i].pays,
            lieu: Object.values(data)[i].lieu,
            complet: Object.values(data)[i].complet,
          });
        }

        dateArray.sort(function (a, b) {
          return new Date(a.date) - new Date(b.date);
        });

        setDates(Object.values(dateArray));
      }
    });
  }, []);

  return (
    <div>
      <Nav />
      <Overlay />

      <section className="video-container">
        <div className="filter">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
            blanditiis nesciunt fugit reiciendis quam voluptatum beatae placeat
            debitis, ab autem enim harum quo esse odit officia ratione? Culpa,
            nihil natus.
          </p>
        </div>
        <video src={video} muted autoPlay loop></video>
      </section>

      <main>
        <article className="album">
          <h1>
            Nouvel Album <span>Civilisation Edition Ultime</span>
          </h1>
          <div>
            <img
              src={coveretcd}
              alt="Disque du nouvel album Civilisation Edition Ultime"
            />
            <ul>
              <li>CP_001_ Intro Civilisation Perdue</li>
              <li>CP_002_ Les aventures de MiniSan</li>
              <li>CP_003_ Toujours perdu quand même</li>
              <li>CP_004_ Juste un dernier</li>
              <li>CP_005_ Ok... Super...</li>
              <li>CP_006_ Ah la France</li>
              <li>CP_007_ Point de rupture</li>
              <li>CP_008_ Nous contre le monde</li>
              <li>CP_009_ Évidemment</li>
              <li>CP_010_ On a gagné</li>
              <li>Shonen</li>
              <li>La Quête</li>
              <li>Du propre</li>
              <li>Bébéboa</li>
              <li>Rêve mieux</li>
              <li>Seul avec du monde autour</li>
              <li>Manifeste</li>
              <li>L'odeur de l'essence</li>
              <li>Jour meilleur</li>
              <li>Baise le monde</li>
              <li>Casseurs Flowters Infinity</li>
              <li>Dernier verre</li>
              <li>Ensemble</li>
              <li>Athéna</li>
              <li>Civilisation</li>
            </ul>
          </div>
          <Link className="btn btn-buy" to="/shop">
            Acheter
          </Link>
        </article>
        <article className="tournees">
          <h2>
            <img src={logoblanc} alt="Logo blanc de la tournée d'Orelsan" />
          </h2>

          <ul className="date-list">
            {getDates.map((date) => (
              <li key={date.id}>
                <span className="date">{date.date}</span>{" "}
                <span className="ville">{date.ville}</span>
                <span className="pays">{date.pays}</span>
                <span className="img">
                  <img src={logo} alt="Logo Orelsan jaune" />
                </span>
                <span className="lieu">{date.lieu}</span>
                <span className={!date.complet ? "lien" : "lien complet"}>
                  <Link to="#">{!date.complet ? "Réserver" : "Sold out!"}</Link>
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="actus">
          <h2>Dernières actualités</h2>

          <section className="articles-list">
            <article>
              <Link to=""></Link>
            </article>
            <article>
              <Link to=""></Link>
            </article>
            <article>
              <Link to=""></Link>
            </article>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
