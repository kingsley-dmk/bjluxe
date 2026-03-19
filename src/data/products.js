// Sample products data for BeautyJay Luxe - using local gallery images

import look1 from '../assets/look1.jpg';
import look2 from '../assets/look2.jpg';
import look3 from '../assets/look3.jpg';
import look4 from '../assets/look4.jpg';
import look5 from '../assets/look5.jpg';
import look6 from '../assets/look6.jpg';
import look7 from '../assets/look7.jpg';
import look8 from '../assets/look8.jpg';
import look9 from '../assets/look9.jpg';
import look10 from '../assets/look10.jpg';
import look11 from '../assets/look11.jpg';
import look12 from '../assets/look12.jpg';
import look13 from '../assets/look13.jpg';
import look14 from '../assets/look14.jpg';
import look15 from '../assets/look15.jpg';
import look16 from '../assets/look16.jpg';
import look17 from '../assets/look17.jpg';
import look19 from '../assets/look19.jpg';

export const products = [
  {
    id: '1',
    name: 'Ankara Shirt and Trouser Set',
    description:
      'Elegant Nigerian Ankara fabric shirt and trouser set. Perfect for traditional events, weddings, and cultural celebrations. Made with premium quality Ankara fabric.',
    price: 35000,
    category: 'Ready-to-Wear Dresses',
    images: [look1, look2],
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
    images: [look3, look4],
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
    images: [look5, look6],
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
    images: [look7, look8],
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
    images: [look9, look10],
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
    images: [look11],
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
    images: [look12],
    sizes: ['5 Yards', '10 Yards'],
    materials: ['100% Silk'],
    inStock: true,
    featured: false,
  },
  {
    id: '8',
    name: 'Midi Wrap Dress',
    description: 'Versatile wrap dress in a flattering midi length. Perfect for brunch, meetings, or date night. Easy to dress up or down.',
    price: 22000,
    category: 'Ready-to-Wear Dresses',
    images: [look13],
    sizes: ['S', 'M', 'L', 'XL'],
    materials: ['Cotton Blend', 'Viscose'],
    inStock: true,
    featured: false,
  },
  {
    id: '9',
    name: 'Off-Shoulder Party Dress',
    description: 'Statement off-shoulder dress for parties and events. Bold yet elegant, with a fitted silhouette and flowing skirt.',
    price: 38000,
    category: 'Ready-to-Wear Dresses',
    images: [look14],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    materials: ['Crepe', 'Lace'],
    inStock: true,
    featured: false,
  },
  {
    id: '10',
    name: 'Traditional Gele Style Headwrap',
    description: 'Elegant headwrap piece to complete your Nigerian or African-inspired look. Perfect for weddings, parties, and cultural events.',
    price: 8500,
    category: 'Ready-to-Wear Dresses',
    images: [look15],
    sizes: ['One Size'],
    materials: ['Ankara', 'Stiffened Fabric'],
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
