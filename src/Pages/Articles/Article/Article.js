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
            <h3>TITRE XXXXXX</h3>
            <p>
              Sed purus massa, mattis sed eros ac, luctus tincidunt mi. Cras
              eget augue tristique, molestie nibh nec, posuere sapien.
              Suspendisse congue libero quis ligula convallis aliquam. Mauris id
              sem gravida, tristique nunc eget, lobortis turpis. Nullam vitae
              arcu luctus justo tempor mattis a sit amet est. Phasellus
              tincidunt dignissim dui sed fringilla.
            </p>
            <p>
              Sed purus massa, mattis sed eros ac, luctus tincidunt mi. Cras
              eget augue tristique, molestie nibh nec, posuere sapien.
              Suspendisse congue libero quis ligula convallis aliquam. Mauris id
              sem gravida, tristique nunc eget, lobortis turpis. Nullam vitae
              arcu luctus justo tempor mattis a sit amet est. Phasellus
              tincidunt dignissim dui sed fringilla. Cras vel lectus ut sem
              commodo pharetra et sit amet libero.
            </p>
          </figcaption>
        </figure>
        <figure>
          <figcaption>
            <p>
              Sed purus massa, mattis sed eros ac, luctus tincidunt mi. Cras
              eget augue tristique, molestie nibh nec, posuere sapien.
              Suspendisse congue libero quis ligula convallis aliquam. Mauris id
              sem gravida, tristique nunc eget, lobortis turpis. Nullam vitae
              arcu luctus justo tempor mattis a sit amet est. Phasellus
              tincidunt dignissim dui sed fringilla. Cras vel lectus ut sem
              commodo pharetra et sit amet libero.
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
