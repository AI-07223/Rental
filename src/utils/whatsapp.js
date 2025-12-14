// src/utils/whatsapp.js
import { siteConfig } from '../config';

export const generateWhatsAppLink = (product, selectedOptions) => {
  const number = siteConfig.siteDetails.whatsappNumber;

  // Format selected options into a string
  const optionsString = Object.entries(selectedOptions)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');

  const message = `Hi, I am interested in buying:
*${product.name}*
Price: ${product.price}
${optionsString ? `Options: ${optionsString}` : ''}

Is this available?`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
};
