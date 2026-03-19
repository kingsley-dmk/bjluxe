// Services data for BeautyJay Luxe – kept very simple and direct

export const services = [
  {
    id: 'custom-sewing',
    name: 'Sew My Own Style',
    category: 'Core Service',
    description: 'Send us any dress style you have saved and we sew it to your measurements.',
    icon: 'scissors',
    features: [
      'Works with screenshots, Instagram or Pinterest styles',
      'Nigerian attires, bridal, evening and casual wears',
      'Made to your body measurements',
    ],
    pricing: 'From ₦35,000',
  },
  {
    id: 'virtual-styling',
    name: 'Style Consultancy',
    category: 'Support Service',
    description: 'Chat with us for style ideas. Share your event, budget and photos, and we will guide you on the best look.',
    icon: 'styling',
    features: [
      'Chat via WhatsApp or Zoom',
      'Share your photos and inspiration',
      'We recommend the best style direction',
      'Help you decide what to sew (or what to buy)',
    ],
    pricing: 'From ₦10,000',
  },
  {
    id: 'bridal-consultation',
    name: 'Wedding Gown Sewing & Bridal Wears',
    category: 'Core Service',
    description:
      'Planning your wedding look? Send your style and timeline and we will sew your wedding gown and bridal wears to your measurements.',
    icon: 'bridal',
    features: [
      'Wedding gown & bridal wears sewing',
      'Style & silhouette selection guidance',
      'Fabric & lace selection support',
      'Timeline and fitting plan',
    ],
    pricing: 'From ₦15,000',
  },
];

export const serviceCategories = ['All Services', 'Core Service', 'Support Service'];

export const getServiceById = (id) => services.find((s) => s.id === id);
export const getServicesByCategory = (category) =>
  category === 'All Services' ? services : services.filter((s) => s.category === category);
