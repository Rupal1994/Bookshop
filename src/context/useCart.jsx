import { useContext } from 'react';
import { CartContext } from './CartContext';

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQty) } : item
      )
    );
  };

  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.discountPrice * item.quantity,
      0
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalAmount,
    clearCart,
  };
};
