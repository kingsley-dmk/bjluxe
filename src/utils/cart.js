// Shopping cart utility functions using localStorage

const CART_STORAGE_KEY = 'beautyjay_cart';

export const getCart = () => {
  if (typeof window === 'undefined') return [];
  const cart = localStorage.getItem(CART_STORAGE_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product, quantity = 1) => {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity,
    });
  }
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  return cart;
};

export const removeFromCart = (productId) => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== productId);
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
  return updatedCart;
};

export const updateCartItemQuantity = (productId, quantity) => {
  const cart = getCart();
  const updatedCart = cart.map(item => 
    item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
  );
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
  return updatedCart;
};

export const clearCart = () => {
  localStorage.removeItem(CART_STORAGE_KEY);
  return [];
};

export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getCartItemCount = () => {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
};
