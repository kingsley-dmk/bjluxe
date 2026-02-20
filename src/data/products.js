// Sample products data for BeautyJay Luxe - Mixed Fashion Styles

export const products = [
  {
    id: '1',
    name: 'Ankara Shirt and Trouser Set',
    description: 'Elegant Nigerian Ankara fabric shirt and trouser set. Perfect for traditional events, weddings, and cultural celebrations. Made with premium quality Ankara fabric.',
    price: 35000,
    category: 'Ready-to-Wear Dresses',
    images: [
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    materials: ['Premium Ankara Fabric'],
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Bridal Wedding Gown - Classic Style',
    description: 'Stunning bridal wedding gown with intricate beadwork and embroidery. Perfect for your special day. Available in traditional Nigerian style or classic Western design.',
    price: 150000,
    category: 'Ready-to-Wear Dresses',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
    ],
    sizes: ['Custom Made'],
    materials: ['Lace', 'Beads', 'Premium Fabric'],
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Elegant Evening Gown',
    description: 'A stunning floor-length evening gown perfect for special occasions, parties, and formal events. Made with premium fabric and exquisite detailing.',
    price: 45000,
    category: 'Ready-to-Wear Dresses',
    images: [
      'https://images.unsplash.com/photo-1518492102993-45ef6abf3b47?w=800',
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    materials: ['Silk', 'Lace'],
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Aso Ebi Set - Ankara',
    description: 'Beautiful Aso Ebi set perfect for weddings and special occasions. Includes top and wrapper. Available in various Ankara prints and colors.',
    price: 28000,
    category: 'Ready-to-Wear Dresses',
    images: [
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800',
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    materials: ['Ankara Fabric'],
    inStock: true,
    featured: false,
  },
  {
    id: '5',
    name: 'Classic A-Line Dress',
    description: 'A timeless A-line dress that flatters every body type. Perfect for office wear, casual outings, or semi-formal events.',
    price: 25000,
    category: 'Ready-to-Wear Dresses',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
      'https://images.unsplash.com/photo-1518492102993-45ef6abf3b47?w=800',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    materials: ['Cotton', 'Polyester'],
    inStock: true,
    featured: false,
  },
  {
    id: '6',
    name: 'Premium Ankara Fabric - 6 Yards',
    description: 'High-quality Ankara fabric perfect for making traditional Nigerian attires and modern African-inspired designs. Available in various beautiful prints.',
    price: 12000,
    category: 'Fashion Materials',
    images: [
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800',
    ],
    sizes: ['6 Yards', '12 Yards'],
    materials: ['100% Cotton Ankara'],
    inStock: true,
    featured: false,
  },
  {
    id: '7',
    name: 'Premium Silk Fabric - 5 Yards',
    description: 'High-quality silk fabric perfect for elegant dresses, formal wear, and special occasion outfits. Available in multiple colors.',
    price: 15000,
    category: 'Fashion Materials',
    images: [
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800',
    ],
    sizes: ['5 Yards', '10 Yards'],
    materials: ['100% Silk'],
    inStock: true,
    featured: false,
  },
];

export const categories = [
  'All Products',
  'Ready-to-Wear Dresses',
  'Fashion Materials',
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => 
  category === 'All Products' ? products : products.filter(p => p.category === category);
export const getFeaturedProducts = () => products.filter(p => p.featured);
