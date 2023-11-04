
import "../../../assets/fonts/fonts.css";
import "./productcard.scss";

const index = ({ title, categories, price, newprice, image, description, className  }) => {

  
  return (
    <div className={`product-card ${className}`}>
      <img src={`${import.meta.env.VITE_UPLOAD_IMG}${image}`} alt={title} />
      
      <h1 className="product-title">{title}</h1>
      
      <p className="product_category">{categories}</p>
      <p className="product-price">Price: ${price}, ${newprice}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default index;

