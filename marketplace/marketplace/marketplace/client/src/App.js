import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Marketplace</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
