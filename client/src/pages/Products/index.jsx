import React from 'react'
import "./Products.scss";
import "../../assets/fonts/fonts.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/reducer/products/productThunk";
import ProductCard from "../../components/Cards/ProductCard";

const Products = () => {
  const { products: { data },
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
    <> 
      <div className="product-container">
        {status === "success" &&
          data.map(({ id, attributes }) => (
            <ProductCard
              key={id}
              image={attributes.images?.data[0].attributes.url}
              category={attributes.categories?.data[0]?.attributes?.title}
              title={attributes.title}
              price={attributes.price}
              newprice={attributes.newprice}
              description={attributes.description}
            />
          ))}
      </div>
    </>
  );
};

export default Products;
