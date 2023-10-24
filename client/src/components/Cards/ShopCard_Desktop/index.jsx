import React from 'react'

import React from "react";
import "./ShopCard_Desktop.scss";
import Button from "../../Button"; 

// eslint-disable-next-line react/prop-types
export const ShopCard_Desktop = ({ image, title}) => {
  return (
    <div className="ShopCard_Desktop_container">
      <div className="ShopCard_Desktop_img">
        <img src={image}/>
      </div>
      <div className="ShopCard_Desktop_info">
        <div className="ShopCard_Desktop_title">{title}</div>
        <Button label="Explore Items" className="ShopCard_Desktop_button"/>
      </div>
    </div>
  );
};

export default ShopCard_Desktop;