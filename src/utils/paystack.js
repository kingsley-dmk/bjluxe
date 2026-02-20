// Paystack payment utility functions

import { config } from '../config';

// Initialize Paystack payment
export const initializePaystack = (email, amount, reference, callback) => {
  if (typeof window === 'undefined' || !window.PaystackPop) {
    console.error('Paystack script not loaded');
    return;
  }

  const handler = window.PaystackPop.setup({
    key: config.paystackPublicKey,
    email: email,
    amount: amount * 100, // Convert to kobo
    currency: 'NGN',
    ref: reference,
    metadata: {
      custom_fields: [
        {
          display_name: 'Payment For',
          variable_name: 'payment_for',
          value: 'BeautyJay Luxe',
        },
      ],
    },
    callback: function(response) {
      callback(response);
    },
    onClose: function() {
      console.log('Payment window closed');
    },
  });

  handler.openIframe();
};

// Generate payment reference
export const generatePaymentReference = () => {
  return `BJLX_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Load Paystack script
export const loadPaystackScript = () => {
  return new Promise((resolve, reject) => {
    if (window.PaystackPop) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Paystack script'));
    document.head.appendChild(script);
  });
};
