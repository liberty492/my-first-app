import React, { useState, useEffect } from 'react';

export default function SearchData() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('phone');

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const result = await response.json();
      console.log(result);
      setProducts(result.products);
    };
    fetchRecords(query);
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {products.length > 0 ? (
        <ul>
          {products?.map((product) => {
            return (
              <li>
                <h2>{product.title}</h2>
                <h2>{product.description}</h2>
                {/* image inside the image */}
                {product.images.map((image) => (
                  <img src={image} />
                ))}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Data is not availabe</p>
      )}
    </div>
  );
}
