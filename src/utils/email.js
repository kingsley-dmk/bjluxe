// Email utility functions using EmailJS

import emailjs from '@emailjs/browser';
import { config } from '../config';

export const sendEmail = async (templateParams) => {
  try {
    if (!config.emailService.serviceId || !config.emailService.templateId) {
      console.warn('EmailJS not configured. Form submission simulated.');
      return { success: true, message: 'Form submitted successfully (simulated)' };
    }

    const response = await emailjs.send(
      config.emailService.serviceId,
      config.emailService.templateId,
      templateParams,
      config.emailService.publicKey
    );

    return { success: true, message: 'Email sent successfully', response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Failed to send email', error };
  }
};

// Initialize EmailJS
export const initEmailJS = () => {
  if (config.emailService.publicKey) {
    emailjs.init(config.emailService.publicKey);
  }
};
