
import "../../../assets/fonts/fonts.css";
import "./productcard.scss";

const index = ({ title, category, price, newprice, image, description, className  }) => {

  
  return (
    <div className={`product-card ${className}`}>
      <img src={`${import.meta.env.VITE_UPLOAD_IMG}${image}`} alt={title} />
      
      <h1 className="product-title">{title}</h1>
      <p className="product_category">{category}</p>
      <p className="product-price"> ${price}, ${newprice}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default index;

