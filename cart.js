import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items: {cart.length}</p>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
