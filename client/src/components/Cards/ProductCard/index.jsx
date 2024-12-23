
import "../../../assets/fonts/fonts.css";
import "./productcard.scss";
import { add2fav, add2cart, fastview} from "../../../assets/icons";

const index = ({ title, category, price, newprice, image, description, className  }) => {

  
  return (
    <div className={`product_card ${className}`}>
      <img  src={`${import.meta.env.VITE_UPLOAD_IMG}${image}`} alt={title} />
      <div className="product_card_icons">
        <img src={add2fav}/>
        <img src={add2cart}/>
        <img src={fastview}/>
      </div>
      <h1 className="product_title">{title}</h1>
      <p className="product_category">{category}</p>
      <div className="prices">
        <p className="product_price"> ${price}</p>
        <p className="product_newprice"> ${newprice}</p>
      </div>
     
      <p className="product_description">{description}</p>
    </div>
  );
};

export default index;

