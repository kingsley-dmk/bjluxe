// WhatsApp utility functions
import { getWhatsAppLink, whatsappMessages } from '../config';

export const openWhatsApp = (message = '') => {
  const link = getWhatsAppLink(message);
  window.open(link, '_blank');
};

export const openWhatsAppProduct = (productName) => {
  openWhatsApp(whatsappMessages.product(productName));
};

export const openWhatsAppService = (serviceName) => {
  openWhatsApp(whatsappMessages.service(serviceName));
};

export const openWhatsAppCourse = (courseName) => {
  openWhatsApp(whatsappMessages.course(courseName));
};

export const openWhatsAppCustomSewing = () => {
  openWhatsApp(whatsappMessages.customSewing);
};

export const openWhatsAppStyling = () => {
  openWhatsApp(whatsappMessages.styling);
};

export const openWhatsAppGeneral = () => {
  openWhatsApp(whatsappMessages.general);
};
