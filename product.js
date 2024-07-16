import React from 'react';

const Product = ({ product, isInCart, addToCart, removeFromCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
