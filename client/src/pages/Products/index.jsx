import React from "react";
import "./Products.scss";
import "../../assets/fonts/fonts.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/reducer/products/productThunk";
import ProductCard from "../../components/Cards/ProductCard";
import { Filter } from "../../components";

const Products = () => {
  const {
    products: { data },
    status,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="productpage_container">
      <div className="productpage_shopcards">
        <div className="productpage_shopcards_first">
          <div className="productpage_shopcards_info">
            <p className="shopcards_info_message">Ends Today</p>
            <p className="shopcards_info_category">Brioche</p>
            <a href="">Explore Items</a>
          </div>
          <div className="productpage_shopcards_img"></div>
        </div>
        <div className="productpage_shopcards_second">
          <div className="productpage_shopcards_info">
            <p className="shopcards_info_message">Your Space</p>
            <p className="shopcards_info_category">Sourdough</p>
            <a href="">Explore Items</a>
          </div>
          <div className="productpage_shopcards_img"></div>
        </div>


<Filter/>


      <div className="product_container">
        {status === "success" &&
          data.map(({ id, attributes }) => (
            <ProductCard
              key={id}
              image={attributes.images?.data[0].attributes.url}
              title={attributes.title}
              price={attributes.price}
              newprice={attributes.newprice}
              description={attributes.description}
            />
          ))}
      </div>
    </div>
    </div>
  );
};

export default Products;
