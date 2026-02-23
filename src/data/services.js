// Services data for BeautyJay Luxe

export const services = [
  {
    id: 'custom-sewing',
    name: 'Custom Dress Sewing',
    category: 'Customization & Alteration',
    description: 'Get your dream dress custom-made to your exact measurements. We specialize in Nigerian attires (Ankara sets, Aso Ebi, native styles), bridal wear, evening gowns, and all fashion styles.',
    icon: 'scissors',
    features: [
      'Nigerian attires (Ankara, Aso Ebi, native styles)',
      'Bridal wedding gowns (traditional & modern)',
      'Evening gowns and formal wear',
      'Casual and office wear',
      'Custom measurements',
      'Fabric selection assistance',
      'Multiple fitting sessions',
      'Professional finishing',
    ],
    pricing: 'Starting from ₦35,000',
  },
  {
    id: 'alterations',
    name: 'Online Alteration Service',
    category: 'Customization & Alteration',
    description: 'Professional alterations for dresses you already own. Send measurements and get perfect fit.',
    icon: 'ruler',
    features: [
      'Measurement guide',
      'Photo consultation',
      'Express service available',
      'Professional alterations',
      'Quality guarantee',
    ],
    pricing: 'Starting from ₦8,000',
  },
  {
    id: 'bridal-consultation',
    name: 'Bridal Consultation',
    category: 'Customization & Alteration',
    description: 'One-on-one consultation to plan your bridal look — style, fabric, timeline, and how we bring your dream gown to life.',
    icon: 'bridal',
    features: [
      'Style and silhouette discussion',
      'Fabric and lace options',
      'Timeline and fittings plan',
      'Budget-friendly options',
      'Link to custom sewing',
    ],
    pricing: 'Starting from ₦15,000',
  },
  {
    id: 'express-tailoring',
    name: 'Express / Rush Tailoring',
    category: 'Customization & Alteration',
    description: 'Need it fast? We offer rush alterations and quick-turn custom pieces for urgent events and deadlines.',
    icon: 'express',
    features: [
      'Rush alteration service',
      'Quick-turn custom pieces',
      'Clear deadline communication',
      'Quality maintained',
      'Premium rush fee applies',
    ],
    pricing: 'Custom quote (rush fee)',
  },
  {
    id: 'design-consultation',
    name: 'Design Consultation',
    category: 'Fashion & Styling Services',
    description: 'Sit down with us (in person or online) to design your dress before we sew — style, silhouette, and details.',
    icon: 'design',
    features: [
      'Style and silhouette ideas',
      'Fabric and colour guidance',
      'Sketch or mood board',
      'Step before custom sewing',
      'No obligation to book',
    ],
    pricing: 'Starting from ₦10,000',
  },
  {
    id: 'virtual-styling',
    name: 'Virtual Styling / Personal Shopper',
    category: 'Fashion & Styling Services',
    description: 'One-on-one online consultations for outfit recommendations based on your body type, event, or budget.',
    icon: 'styling',
    features: [
      'Zoom/WhatsApp consultations',
      'Body type analysis',
      'Outfit recommendations',
      'Budget-friendly options',
      'Shopping lists',
    ],
    pricing: 'Starting from ₦15,000',
  },
];

export const serviceCategories = [
  'All Services',
  'Customization & Alteration',
  'Fashion & Styling Services',
];

export const getServiceById = (id) => services.find(s => s.id === id);
export const getServicesByCategory = (category) =>
  category === 'All Services' ? services : services.filter(s => s.category === category);
