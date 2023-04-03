import "./Article.css";
import Footer from "../../../Components/Footer";
import Nav from "../../../Components/Nav";
import Overlay from "../../../Components/Overlay";
import img1 from "../../../assets/img/article/Rectangle 26.png";
import img2 from "../../../assets/img/article/Rectangle 27.png";
import img3 from "../../../assets/img/article/Rectangle 29.png";

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
            <h3>7 dates tant attendues en France</h3>
            <p>
              C’est à la fin du printemps et aux prémices de l’été que se
              déroulera la tournée française d’Orelsan avec son album
              civilisation, mais avant de vous dévoiler les dates, revenons sur
              cet album.
              <br /> L'album "Civilisation" d'Orelsan, sorti en 2021, a connu un
              grand succès auprès du public et de la critique. Avec cet album,
              l'artiste normand livre une vision sombre et introspective de
              notre société, à travers des textes ciselés et une production
              soignée.
              <br /> Civilisation est le cinquième album studio du rappeur
              français Orelsan, sorti le 26 novembre 2021. Cet album est très
              attendu par les fans du rappeur qui ont suivi son évolution
              musicale depuis ses débuts en 2008. Civilisation représente un
              tournant important dans la carrière d'Orelsan qui y aborde des
              thèmes variés tels que la société, la technologie et
              l'environnement.
            </p>
            <p>
              Orelsan a toujours été connu pour ses textes introspectifs et
              réalistes. Dans Civilisation, il aborde plusieurs thèmes tels que
              la société, la technologie, la politique et l'environnement. Il
              critique la société de consommation et l'obsession pour les
              réseaux sociaux dans le titre "Futurisme". Dans "Boussole", il
              évoque les difficultés de trouver sa place dans un monde en
              constante évolution.
            </p>
          </figcaption>
        </figure>
        <figure>
          <figcaption>
            <p>
              Dans "Culture", il aborde la question de la diversité culturelle
              et de l'importance de préserver les traditions. Orelsan n'hésite
              pas non plus à s'engager politiquement, en critiquant le
              gouvernement dans "Maître du monde" et en défendant les droits des
              femmes dans "Pouvoir aux femmes". Enfin, il évoque la crise
              écologique dans "Terre", en rappelant l'urgence de protéger notre
              planète.
              <br /> Après avoir conquis le cœur de nombreux fans en France et
              dans le monde entier. Et maintenant, il est prêt à partir en
              tournée pour partager sa musique avec encore plus de gens !<br />
              La tournée d'Orelsan débutera le 15 avril 2023 à Brest et se
              poursuivra jusqu'au 25 mai 2023 à Marseille. Cette tournée sera
              une occasion pour les fans de découvrir en live les chansons de
              son dernier album "Civilisation", ainsi que ses anciens tubes qui
              ont marqué les esprits. <br /> Voici quelques-unes des dates et
              des villes où la tournée d'Orelsan aura lieu : 15 avril 2023 :
              Brest 20 avril 2023 : Rennes 25 avril 2023 : Nantes
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
