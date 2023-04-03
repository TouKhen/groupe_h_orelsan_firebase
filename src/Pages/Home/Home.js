import { useEffect, useState } from "react";
import databaseService from "../../utils/database";
import Nav from "../../Components/Nav";
import Overlay from "../../Components/Overlay";
import "./Home.css";
import logo from "../../assets/img/logo/logo_orelsan.svg";
import logoblanc from "../../assets/img/logo/logo_orelsan_tour_blanc.png";
import video from "../../assets/video/video.mp4";
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
        <article className="tournees">
          <h1>
            <img src={logoblanc} alt="Logo blanc de la tournée d'Orelsan" />
          </h1>

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
