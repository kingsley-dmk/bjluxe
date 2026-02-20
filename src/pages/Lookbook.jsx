import { useState } from 'react';
import { motion } from 'framer-motion';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const Lookbook = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800', category: 'Custom Dresses' },
    { id: 2, src: 'https://images.unsplash.com/photo-1566479179817-2788388c9a88?w=800', category: 'Custom Dresses' },
    { id: 3, src: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800', category: 'Styling Projects' },
    { id: 4, src: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800', category: 'Student Work' },
    { id: 5, src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800', category: 'Events' },
    { id: 6, src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800', category: 'Custom Dresses' },
    { id: 7, src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800', category: 'Styling Projects' },
    { id: 8, src: 'https://images.unsplash.com/photo-1566479179817-2788388c9a88?w=800', category: 'Student Work' },
  ];

  const categories = ['All', 'Custom Dresses', 'Student Work', 'Styling Projects', 'Events'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div>
      <section className="border-b border-gray-200 bg-hero py-10 md:py-14">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Fashion Lookbook</h1>
            <p className="text-gray-200 text-lg">Explore our portfolio of stunning fashion creations including Nigerian attires, bridal wear, and elegant designs</p>
          </motion.div>
        </div>
      </section>
      <div className="section-padding">
      <div className="container-custom">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.category}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to view
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Love what you see? Request a similar style!</p>
          <button
            onClick={() => openWhatsAppGeneral()}
            className="btn-primary"
          >
            Chat on WhatsApp
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage.src}
            alt={selectedImage.category}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
          >
            ×
          </button>
        </motion.div>
      )}
      </div>
    </div>
  );
};

export default Lookbook;
