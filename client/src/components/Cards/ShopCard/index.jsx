import React from "react";
import "./shopcard.scss";
import Button from "../../Button"; 

// eslint-disable-next-line react/prop-types
export const ShopCard = ({ image, title}) => {
  return (
    <div className="shopcard_container">
      <div className="shopcard_img">
        <img src={image}/>
      </div>
      <div className="shopcard_info">
        <div className="shopcard_title">{title}</div>
        <Button label="Explore Items" className="shopcard_button"/>
      </div>
    </div>
  );
};

export default ShopCard;