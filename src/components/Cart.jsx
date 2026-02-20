import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { config } from '../config';
import { openWhatsAppProduct } from '../utils/whatsapp';

const Cart = () => {
  const { cart, isOpen, setIsOpen, removeFromCart, updateCartItemQuantity, total, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25 }}
          className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <svg
                  className="w-24 h-24 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary inline-block"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-4 p-4 border border-gray-200 rounded-lg"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{config.currencySymbol}{item.price.toLocaleString()}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Summary */}
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-bold text-xl">{config.currencySymbol}{total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Link
                    to="/checkout"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center block"
                  >
                    Proceed to Checkout
                  </Link>
                  <button
                    onClick={clearCart}
                    className="text-gray-500 hover:text-gray-700 text-sm w-full"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Cart;
