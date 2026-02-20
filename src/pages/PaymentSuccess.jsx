import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { config } from '../config';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const PaymentSuccess = () => {
  const location = useLocation();
  const orderData = location.state?.orderData;

  if (!orderData) {
    return (
      <div className="pt-28 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Order Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 section-padding">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 text-lg mb-8">
            Thank you for your order. We've received your payment and will process your order shortly.
          </p>

          <div className="card p-6 mb-8 text-left">
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Reference:</span>
                <span className="font-medium">{orderData.reference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-bold text-xl">{config.currencySymbol}{orderData.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Items:</span>
                <span>{orderData.items.length} item(s)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              A confirmation email has been sent to <strong>{orderData.customer.email}</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop" className="btn-primary">
                Continue Shopping
              </Link>
              <motion.button
                onClick={() => openWhatsAppGeneral()}
                className="btn-whatsapp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Chat on WhatsApp
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
