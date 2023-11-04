import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./home.scss";
import "../../assets/fonts/fonts.css";
import { concrete, growth, logo1, logo2, logo3, logo4, logo5, logo6, wins } from "../../assets/icons";
import { fetchProducts } from '../../store/reducer/products/productThunk';
import ProductCard from "../../components/Cards/ProductCard";
import Button from "../../components/Button";
import { BlogCard, ShopCard } from "../../components/Cards";
import { cupcake, feapro1, feapro2, shopcard_d1, shopcard_d2, shopcard_d3, shopcard_m1, shopcard_m2, shopcard_m3 } from "../../assets/images/";

const Home = () => {
  const { products: { data }, status } = useSelector(state => state.product);
  const dispatch = useDispatch();
  
  const [numProducts, setNumProducts] = useState(5); 


  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  React.useEffect(() => {
    const updateNumProducts = () => {
      if (window.innerWidth >= 768) {
        setNumProducts(10);
      } else {
        setNumProducts(5);
      }
    };

    updateNumProducts();

    window.addEventListener('resize', updateNumProducts);

    return () => {
      window.removeEventListener('resize', updateNumProducts);
    };
  }, []);
  if (!data) {
    return <p>No data available.</p>;
  }


  const loadMoreProducts = () => {
    setNumProducts(numProducts + 3);
  };

  return (
    <div className="home_container">
      <div className="home_slider">
        <div className="home_slider_info">
          <div className="home_slider_heading">Summer 2020</div>
          <div className="home_slider_title">Special Bread</div>
          <div className="home_slider_subtitle">
            We know how large objects will act, but things on a small scale.
          </div>

          <Button label="Shop now" className="home_slider_button" />
        </div>
        <div className="home_slider_img">
          <img src={cupcake} />
        </div>
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

<div className="home_shop_cards">
  <ShopCard image={shopcard_m1} title="Top Product Of 
the Week"/>

  <ShopCard className="shopcard_2" image={shopcard_m2} title="Top Product Of 
the Week"/>
  <ShopCard image={shopcard_m3} title="Top Product Of 
the Week"/>
</div>

<div className="home_shop_cards_desktop">
  <div className="home_shop_cards_desktop_left">
  <ShopCard image={shopcard_d1} title="Top Product Of 
the Week"/>

  </div>
  <div className="home_shop_cards_desktop_right">
 <ShopCard className="shopcard_2" image={shopcard_d2} title="Top Product Of 
the Week"/>
  <ShopCard image={shopcard_d3} title="Top Product Of 
the Week"/>
  </div>

</div>

      <div className="home_product_cards">
        <div className="home_product_cards_title">Bestseller products</div>
        <div className="home_product_cards_title">
          Problems trying to resolve the conflict between{" "}
        </div>
        <div className="home_product_cards_mobiledesktop">
        <div className="home_product_container">
      {status === 'success' &&
      data.slice(0, numProducts).map(({ id, attributes  }) => (
          <ProductCard className="home_product_inner_container"
            key={id}
            image={attributes.images?.data[0].attributes.url}
            title={attributes.title}
            category={attributes.categories?.data[0]?.attributes?.title}
            price={attributes.price}
            newprice={attributes.newprice}
            
          />
          
        ))}
    </div>
        </div>

        {numProducts < data.length && (
          <Button
            label="Load More Products"
            className="home_product_cards_button"
            onClick={loadMoreProducts}
          />
        )}
       
      </div>

      <div className="home_featured_products">
        <div className="featured_products_info">
          <div className="featured_products_heading">Featured Products</div>
          <div className="featured_products_title">We love what we do</div>
          <div className="featured_products_subtitle">
          Problems trying to resolve the conflict between the two major realms of Classical physics: 
Newtonian mechanics <br/>
<br/>
Problems trying to resolve the conflict between the two major realms of Classical physics: 
Newtonian mechanics 
          </div>
        </div>
        
        <div className="featured_products_images">
          <div className="featured_products_img1">
            <img src={feapro1}/>
          </div>
          <div className="featured_products_img2">
          <img src={feapro2}/>
          </div>
        </div>

      </div>

      <div className="home_features">
        <div className="home_features_top">
        <div className="features_heading">Featured Products</div>
          <div className="features_title">The Best Services</div>
          <div className="features_subtitle">Problems trying to resolve the conflict between  </div>

        </div>
        
        <div className="home_features_bottom">
          <div className="easywins">
            <img src={wins}/>
            <div className="home_features_title">Easy Wins</div>
            <div className="home_features_subtitle">Get your best looking smile now!</div>
          </div>
          <div className="concrete">
          <img src={concrete}/>
            <div className="home_features_title">Concrete</div>
            <div className="home_features_subtitle">Defalcate is most focused in helping you discover your most beautiful smile</div>
          </div>
          <div className="growth">
          <img src={growth}/>
            <div className="home_features_title">Hack Growth</div>
            <div className="home_features_subtitle">Overcame any hurdle or any other problem.</div>
          </div>


        </div>
      </div>
<div className="home_featured_posts">
  <div className="featured_posts_title">Featured Posts</div>

  <div className="featured_posts_card">
    
      <BlogCard/>
      <BlogCard/>
  </div>
</div>
      
    </div>
  );
};

export default Home;
