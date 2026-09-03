import "../css/categoryproduct.css";
import { useParams, Link } from "react-router-dom";
import { categoryData } from "../data/data";
import BackeLink from "../components/BackeLink";
import CaruselSwiper from "../components/CaruselSwiper";
import bannerImg from "/bannerpage-2.webp";
import BannerPage from "../components/BannerPage";
import VykupMobilu from "../components/VykupMobilu";
import { allProducts } from "../data/data";

function CategoryProduct() {
  const { category, categories } = useParams();

  const parentCategory = categoryData.find((c) =>
    c.categories.some(
      (item) => item.categoryname.toLowerCase() === category.toLowerCase()
    )
  );

  const selectCategory = parentCategory?.categories.find(
    (item) => item.categoryname === category
  );

  const getMobileProducts = allProducts.products.filter(
    (p) => p.categories?.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="wrapper-category-brand">
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
            },
          ]}
        />

        <BannerPage bannerImg={bannerImg} />

        <h2>{category}</h2>

        <p className="description-mobily">
          Mobilní telefon patří mezi nenahraditelné pomocníky, bez kterých mnoho
          z nás neopustí domov. Umožňují nám zůstat v kontaktu s kolegy či
          blízkými, dostat se ideální cestou do cíle, poslouchat hudbu, surfovat
          po internetu, sledovat zvířecí videa nebo třeba reagovat na
          elektronickou poštu. Chytré mobily (smartphony) toho zvládnou mnohem
          více a jejich nabídka je více než bohatá. Jak si tedy vybrat? Čtěte
          dále.
        </p>
      </div>

      <VykupMobilu />

      <CaruselSwiper mobily={getMobileProducts} />

      <div className="wrapper-brand-grids">
        {selectCategory?.znacky?.map((brand) => (
          <Link
            to={`/${categories}/${category}/${brand.name}`}
            key={brand.id}
            className="card-brand"
          >
            <img className="icon-category" src={brand.img} alt={brand.name} />
            <span className="category-name">{brand.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryProduct;
