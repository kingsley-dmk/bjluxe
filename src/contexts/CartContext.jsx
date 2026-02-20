import { createContext, useContext, useState, useEffect } from 'react';
import { getCart, addToCart as addItem, removeFromCart as removeItem, updateCartItemQuantity as updateQuantity, clearCart as clear, getCartTotal, getCartItemCount } from '../utils/cart';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const addToCart = (product, quantity = 1) => {
    const updatedCart = addItem(product, quantity);
    setCart(updatedCart);
    setIsOpen(true);
  };

  const removeFromCart = (productId) => {
    const updatedCart = removeItem(productId);
    setCart(updatedCart);
  };

  const updateCartItemQuantity = (productId, quantity) => {
    const updatedCart = updateQuantity(productId, quantity);
    setCart(updatedCart);
  };

  const clearCart = () => {
    clear();
    setCart([]);
  };

  const total = getCartTotal();
  const itemCount = getCartItemCount();

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        total,
        itemCount,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
