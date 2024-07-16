import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <ProductList cart={cart} setCart={setCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
