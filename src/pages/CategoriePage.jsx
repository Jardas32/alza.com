import "../css/categorypage.css";
import { categoryData } from "../data/data";
import { useParams, Link } from "react-router-dom";
import bannerImg from "/bannerpage-2.webp";
import BannerPage from "../components/BannerPage";
import VykupMobilu from "../components/VykupMobilu";

function CategoriePage() {
  const { categories } = useParams();

  const selectCategories = categoryData.find(
    (c) => c.name === categories.toLowerCase()
  );

  return (
    <div className="wrapper-categorypage">
      <div className="wrapper-top-page">
        <h2>{categories}</h2>
      </div>

      <div className="wrapper-categorypage-grids">
        {selectCategories?.categories?.map((category) => (
          <Link
            key={category.categoryname}
            to={`/${encodeURIComponent(categories)}/${encodeURIComponent(
              category.categoryname
            )}`}
            className="card-category"
          >
            <img
              className="icon-category"
              src={category.img}
              alt={category.categoryname}
            />
            <span className="category-name">{category.categoryname}</span>
          </Link>
        ))}
      </div>

      <BannerPage bannerImg={bannerImg} />

      <VykupMobilu />
    </div>
  );
}

export default CategoriePage;
