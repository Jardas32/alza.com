import "../css/selectcategorypage.css";
import { useParams } from "react-router-dom";
import BackeLink from "../components/BackeLink";
import BannerPage from "../components/BannerPage";
import VykupMobilu from "../components/VykupMobilu";
import AllProducts from "../components/AllProducts";
import { allProducts } from "../data/data";

function SelectCategoryPage() {
  const { categories, category, selectcategory } = useParams();

  const getMobileProducts = allProducts.products.filter(
    (p) =>
      p.categories?.toLowerCase() === category?.toLowerCase() &&
      p.category?.toLowerCase() === selectcategory?.toLowerCase()
  );

  return (
    <div className="wrapper-selectcategorypage">
      <div className="wrapper-top-page">
        <BackeLink
          items={[
            {
              path: "/",
            },
            {
              name: `${categories}`,
              path: `/${categories}`,
            },
            {
              name: `${category}`,
              path: `/${categories}/${category}`,
            },
            {
              name: `${selectcategory}`,
            },
          ]}
        />

        <h2>{selectcategory}</h2>
      </div>

      <BannerPage bannerImg={getMobileProducts[0]?.banner} />

      <div className="wrapper-description">
        <h2 className="title-desc">{getMobileProducts[0]?.titledescription}</h2>
        <p className="desc">{getMobileProducts[0]?.desc}</p>
      </div>

      <VykupMobilu />

      <AllProducts products={getMobileProducts} />
    </div>
  );
}

export default SelectCategoryPage;
