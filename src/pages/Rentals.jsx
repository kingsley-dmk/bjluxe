import { useState } from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const Rentals = () => {
  const [selectedRental, setSelectedRental] = useState(null);

  const rentalItems = [
    {
      id: 1,
      name: 'Ankara Shirt and Trouser Set',
      image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800',
      price: 15000,
      sizes: ['S', 'M', 'L', 'XL'],
      occasions: ['Wedding', 'Traditional Event', 'Aso Ebi'],
      description: 'Beautiful Nigerian Ankara shirt and trouser set perfect for traditional events.',
    },
    {
      id: 2,
      name: 'Bridal Wedding Gown',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
      price: 25000,
      sizes: ['Custom Made'],
      occasions: ['Wedding', 'Formal Event'],
      description: 'Stunning bridal wedding gown available in traditional or modern styles.',
    },
    {
      id: 3,
      name: 'Elegant Evening Gown',
      image: 'https://images.unsplash.com/photo-1566479179817-2788388c9a88?w=800',
      price: 12000,
      sizes: ['S', 'M', 'L', 'XL'],
      occasions: ['Formal Event', 'Party', 'Graduation'],
      description: 'Perfect evening gown for formal events and special occasions.',
    },
  ];

  return (
    <div>
      <section className="border-b border-gray-200 bg-hero py-10 md:py-14">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Dress Rentals</h1>
            <p className="text-gray-200 text-lg">Rent stunning dresses for your special occasions - including Nigerian attires, evening gowns, and formal wear</p>
          </motion.div>
        </div>
      </section>
      <div className="section-padding">
      <div className="container-custom">
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 mb-12 bg-primary-50 border border-primary-100"
        >
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { step: '1', title: 'Choose', description: 'Select your perfect dress' },
              { step: '2', title: 'Book', description: 'Select dates and pay deposit' },
              { step: '3', title: 'Enjoy', description: 'Wear and return after event' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Rental Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentalItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Sizes:</strong> {item.sizes.join(', ')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Occasions:</strong> {item.occasions.join(', ')}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    {config.currencySymbol}{item.price.toLocaleString()}/day
                  </span>
                </div>

                <button
                  onClick={() => setSelectedRental(item)}
                  className="btn-primary w-full"
                >
                  Book Rental
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking Modal */}
        {selectedRental && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedRental(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-lg p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">Book {selectedRental.name}</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-2">Select Size</label>
                  <select className="input-field">
                    {selectedRental.sizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-2">Rental Start Date</label>
                  <input type="date" className="input-field" />
                </div>
                <div>
                  <label className="block font-medium mb-2">Rental End Date</label>
                  <input type="date" className="input-field" />
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedRental(null)}
                    className="flex-1 btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      openWhatsAppGeneral();
                      setSelectedRental(null);
                    }}
                    className="flex-1 btn-whatsapp"
                  >
                    Continue on WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Rentals;
