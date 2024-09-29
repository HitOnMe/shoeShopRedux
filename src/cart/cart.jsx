import React, { useState } from 'react';
import CartList from './CartList';
import Modal from './modal';
import RenderList from './renderList';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);  // Sản phẩm được chọn trong modal
  const [cart, setCart] = useState([]);  // Danh sách sản phẩm trong giỏ hàng

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: product.quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  return (
    <div>
      <CartList setSelectedProduct={setSelectedProduct} />
      <RenderList cart={cart} removeFromCart={removeFromCart} />
      <Modal state={selectedProduct} addToCart={addToCart} />
    </div>
  );
}
 