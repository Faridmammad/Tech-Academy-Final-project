import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  fetch('http://localhost:1337/api/products')
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Log the data received
    setProducts(data);
  })
  .catch((error) => console.error(error));
}, []);

  // Filter products based on the query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <li>No matching products found.</li>
        )}
      </ul>
    </div>
  );
}

export default ProductList;
