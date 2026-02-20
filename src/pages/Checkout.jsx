import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { config } from '../config';
import { initializePaystack, generatePaymentReference, loadPaystackScript } from '../utils/paystack';
import { sendEmail } from '../utils/email';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    notes: '',
  });

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/shop');
    }
    loadPaystackScript();
  }, [cart, navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const reference = generatePaymentReference();
      
      // Initialize Paystack payment
      initializePaystack(
        formData.email,
        total,
        reference,
        async (response) => {
          // Payment successful
          const orderData = {
            reference: response.reference,
            customer: formData,
            items: cart,
            total: total,
            date: new Date().toISOString(),
          };

          // Send order confirmation email
          await sendEmail({
            to_email: formData.email,
            customer_name: formData.name,
            order_reference: reference,
            order_total: total,
            order_items: cart.map(item => `${item.name} x${item.quantity}`).join(', '),
          });

          // Clear cart
          clearCart();
          
          // Navigate to success page
          navigate('/payment-success', { state: { orderData } });
        }
      );
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="pt-28 section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Checkout - Complete Your Order</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer Information */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Customer Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">State *</label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium mb-2">Order Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="4"
                    className="input-field"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} x{item.quantity}</span>
                    <span>{config.currencySymbol}{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span>{config.currencySymbol}{total.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Pay with Paystack'}
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Secure payment powered by Paystack
              </p>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
