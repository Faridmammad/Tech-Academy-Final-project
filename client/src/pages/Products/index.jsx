import React from "react";
import "./Products.scss";
import "../../assets/fonts/fonts.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/reducer/products/productThunk";
import ProductCard from "../../components/Cards/ProductCard";
/* import { Filter, Sort } from "../../components"; */
import {shopcart_img1, shopcart_img2} from "../../assets/images"
import { arrow_right } from "../../assets/icons";

import {logo1,logo2,logo3,logo4,logo5,logo6} from "../../assets/icons";

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
          <div className="productpage_shopcards_img"><img src={shopcart_img1}/></div>
        </div>
        <div className="productpage_shopcards_second">
          <div className="productpage_shopcards_info">
            <p className="shopcards_info_message">Your Space</p>
            <p className="shopcards_info_category">Sourdough</p>
            <a href="">Explore Items</a>
          </div>
          <div className="productpage_shopcards_img"><img src={shopcart_img2}/></div>
        </div>



    </div>

    <div className="name_breadcrump">
      <h2 className="page_name">Shop</h2>
      
      <h4 className="page_breadcrump">
        <a href="/">Home</a>
        <img src={arrow_right} alt="" />
         <p>Shop</p>
      </h4>
    </div>

 {/*    <Filter/>
Need to write logic
    <Sort/> */}


      <div className="product_container">
        {status === "success" &&
          data.map(({ id, attributes }) => (
            <ProductCard
              key={id}
              image={attributes.images?.data[0].attributes.url}
              title={attributes.title}
              price={attributes.price}
              newprice={attributes.newprice}

            />

          ))}
      </div>

      <div className="about_companies">
        <div className="about_companies_logos">
          <ul>
            <li>
              <a href="/">
                <img src={logo1} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={logo2} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={logo3} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={logo4} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={logo5} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={logo6} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
