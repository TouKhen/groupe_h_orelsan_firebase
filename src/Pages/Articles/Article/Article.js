import "./Article.css";
import Footer from "../../../Components/Footer";
import Nav from "../../../Components/Nav";
import Overlay from "../../../Components/Overlay";
import img1 from "../../../assets/img/article/Rectangle 26.png";
import img2 from "../../../assets/img/article/Rectangle 27.png";
import img3 from "../../../assets/img/article/Rectangle 29.png";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <>
      <Nav />
      <Overlay />
      <main className="page-article">
        <figure>
          <div>
            <img src={img1} alt="" />
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
                civilisation, mais avant de vous dévoiler les dates, revenons
                sur cet album.
              </strong>
              <br />
              <strong>L'album " Civilisation"</strong> d'Orelsan, a connu un
              grand succès auprès du public et de la critique. Avec cet album,
              l'<strong>artiste</strong> normand livre une vision sombre et
              introspective de notre société, à travers des textes ciselés et
              une production soignée.
              <br />
              <strong>Civilisation</strong> est le cinquième{" "}
              <strong>album studio</strong> du <strong>rappeur français</strong>{" "}
              Orelsan.
              <br />
              Cet album est très attendu par les fans du{" "}
              <strong>rappeur</strong> qui ont suivi son évolution musicale
              depuis ses débuts en 2008.
              <br />
              <strong>Civilisation</strong> représente un tournant important
              dans la carrière d'Orelsan qui y aborde des thèmes variés tels que
              la <strong>société</strong>, la <strong>technologie</strong> et l'
              <strong>environnement</strong>.
            </p>
            <p>
              L’artiste a toujours été connu pour ses{" "}
              <strong>textes introspectifs</strong> et
              <strong>réalistes</strong>. Dans ce dernier album, il aborde
              plusieurs thèmes tels que la <strong>société</strong>, la{" "}
              <strong>technologie</strong>, la <strong>politique</strong>
              et l'<strong>environnement</strong>. Il critique la{" "}
              <strong>société de consommation</strong> et l'obsession pour les
              <strong>réseaux sociaux</strong> dans le titre "Futurisme". Dans
              "Boussole", il évoque les difficultés de trouver sa place dans un
              monde en constante évolution.
              <br />
              Dans "Culture", il aborde la question de la diversité culturelle
              et de l'importance de préserver les <strong>traditions</strong>.
              Orelsan n'hésite pas non plus à s'engager politiquement, en
              critiquant le <strong>gouvernement</strong> dans "Maître du monde"
              et en défendant les <strong>droits des femmes</strong> dans
              "Pouvoir aux femmes". <strong>Enfin</strong>, il évoque la{" "}
              <strong>crise écologique</strong> dans "Terre", en rappelant
              l'urgence de protéger notre <strong>planète</strong>.
            </p>
          </figcaption>
        </figure>
        <figure>
          <figcaption>
            <p>
              Après avoir conquis le cœur de nombreux fans en{" "}
              <strong>France</strong> et dans le monde entier. Et maintenant, il
              est prêt à partir en <strong>tournée</strong> pour partager sa
              musique avec encore plus de gens !
              <br />
              La <strong>tournée</strong> d'Orelsan débutera le 18 juin 2023 à
              LYON et se poursuivra jusqu'au 6 juillet 2023 à ALBI. Cette
              <strong>tournée</strong> sera une occasion pour les fans de
              découvrir en live les chansons de son dernier album
              "Civilisation", ainsi que ses anciens tubes qui ont marqué les
              esprits.
              <br />
              Les fans qui assisteront aux concerts d'Orelsan peuvent s'attendre
              à un <strong>spectacle</strong> incroyable car l’
              <strong>artiste</strong> est connu pour ses performances
              énergiques et passionnées, et il ne fait aucun doute que sa
              <strong>tournée</strong> sera à la hauteur des attentes. Les
              <strong>concerts</strong> comprendront non seulement ses chansons
              à succès, mais aussi de nouveaux arrangements et surprises qui
              plairont aux fans. Les billets pour la <strong>tournée</strong>{" "}
              d'Orelsan sont déjà en vente sur plusieurs{" "}
              <strong>sites web</strong> de billetterie en ligne.
            </p>

            <Link to="/">Acheter un billet</Link>
            <p>
              Cependant, il est recommandé de se dépêcher car les places partent
              très vite ! Les fans peuvent également suivre Orelsan sur les
              <strong>réseaux sociaux</strong> pour être tenus au courant des
              dernières nouvelles concernant sa <strong>tournée</strong>.
              <br />
              En conclusion, la <strong>tournée</strong> d'Orelsan est un
              événement très attendu par ses fans. Avec ses performances
              passionnantes et ses chansons à succès, il ne fait aucun doute que
              cette <strong>tournée</strong> sera un véritable succès. Alors, si
              vous êtes un fan d'Orelsan ou que vous souhaitez simplement
              <strong>découvrir</strong> son <strong>univers musical</strong>,
              assurez-vous de réserver vos places pour l'un de ses{" "}
              <strong>concerts</strong> dès maintenant !
            </p>
          </figcaption>
          <div className="img-group">
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
          </div>
        </figure>
      </main>
      <Footer />
    </>
  );
};

export default Article;
