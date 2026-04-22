export const WHATSAPP_NUMBER = "5513981404884";
export const INSTAGRAM_URL = "https://www.instagram.com/filippi.agenda/";
export const SITE_URL = "https://filippisantos.vercel.app";

export const buildWhatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
