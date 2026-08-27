import "../css/allproducts.css";
import { useState, useEffect } from "react";
import { sorted } from "../data/data";
import CardProduct from "./CardProduct";

function AllProducts({ products }) {
  const [selectSort, setSelectSort] = useState(sorted[0].name);

  const sortProducts = (value) => {};

  console.log(selectSort);

  return (
    <div className="wrapper-allproducts">
      <div className="wrapper-polozky">
        <span className="polozky">{products.length} položek</span>
      </div>

      <div className="wrapper-sort">
        {sorted.map((s) => (
          <span
            onClick={() => setSelectSort(s.name)}
            key={s.id}
            className={`sort-text ${selectSort === s.name ? "active" : ""}`}
          >
            {s.name}
          </span>
        ))}
      </div>

      <div className="wrapper-allproducts-grids">
        {products.map((product, index) => (
          <CardProduct key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
