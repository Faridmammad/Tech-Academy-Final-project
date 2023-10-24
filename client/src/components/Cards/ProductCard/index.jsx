import React from "react";
import "../../../assets/fonts/fonts.css";
import "./productcard.scss";
import { product_img } from "../../../assets/images/";

const index = () => {
  return (
    <div className="productcard_container">
      <img src={product_img} />
      <div className="product_name">Crunchy Crust</div>
      <div className="product_category">Sourdough</div>
      <div className="product_price">
        <div className="previous_price">$ 16.48</div>
        <div className="actual_price">$ 6.48</div>
      </div>
    </div>
  );
};

export default index;
