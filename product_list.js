import React, { useState } from 'react';
import Product from './Product';

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2' },
    // Add more products as needed
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            isInCart={cart.some(item => item.id === product.id)}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
