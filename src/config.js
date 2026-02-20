// Configuration file for BeautyJay Luxe

export const config = {
  siteName: 'BeautyJay Luxe',
  siteUrl: 'https://www.beautyjayluxe.com',
  whatsappNumber: '234XXXXXXXXXX', // Replace with actual WhatsApp number
  whatsappMessage: 'Hi, I have a question about BeautyJay Luxe',
  paystackPublicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '',
  emailService: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
  currency: 'NGN',
  currencySymbol: '₦',
};

// WhatsApp helper function
export const getWhatsAppLink = (message = '') => {
  const encodedMessage = encodeURIComponent(message || config.whatsappMessage);
  return `https://wa.me/${config.whatsappNumber}?text=${encodedMessage}`;
};

// Prefilled WhatsApp messages
export const whatsappMessages = {
  product: (productName) => `Hi, I'm interested in ${productName}. Can you tell me more?`,
  service: (serviceName) => `Hi, I'd like to book ${serviceName}`,
  course: (courseName) => `Hi, I'm interested in enrolling in ${courseName}`,
  customSewing: 'Hi, I would like to request a custom dress sewing service.',
  styling: 'Hi, I would like to book a styling consultation.',
  courseInquiry: 'Hi, I have questions about your training courses.',
  general: 'Hi, I have a question about BeautyJay Luxe.',
};
