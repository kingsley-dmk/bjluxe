import { motion } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';

const Rentals = () => {
  const categories = [
    {
      id: 'ankara',
      name: 'Ankara & Traditional',
      description: 'Nigerian attires, traditional sets, and Aso Ebi styles.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    },
    {
      id: 'bridal',
      name: 'Bridal',
      description: 'Bridal gowns and wedding wear for your special day.',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
    },
    {
      id: 'evening',
      name: 'Evening & Formal',
      description: 'Evening gowns and formal wear for events and parties.',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
    },
  ];

  return (
    <div className="pt-28">
      <section className="border-b border-gray-200 bg-hero py-10 md:py-14">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Dress Rentals</h1>
            <p className="text-gray-200 text-xl">
              Rent stunning dresses for your special occasions — Nigerian attires, evening gowns, bridal wear and more. Tell us what you need and we&apos;ll match you with available pieces.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-custom">
          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-6 mb-16 md:mb-20 bg-primary-50 border border-primary-100"
          >
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '1', title: 'Tell us what you need', description: 'Share the occasion, style, size and any preferences.' },
                { step: '2', title: 'We match you', description: 'We’ll show you available options and confirm pricing.' },
                { step: '3', title: 'Book & enjoy', description: 'Pay deposit, collect your outfit, wear and return after your event.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* We have many more options + main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              We have a wide range of styles and sizes. Our inventory changes often — describe the occasion and look you want, and we&apos;ll find the right piece for you.
            </p>
            <WhatsAppButton
              message="Hi, I'm interested in renting a dress. I'd like to tell you about the occasion and style I'm looking for."
              className="inline-flex"
              label="Get in touch"
            />
          </motion.div>

          {/* Category examples - "Examples of what we offer" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-2 text-center">Types of outfits we rent</h2>
            <p className="text-gray-600 text-lg text-center mb-10 max-w-xl mx-auto">
              Examples of styles we offer — many more options available when you get in touch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat, index) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card overflow-hidden"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-80 md:h-96 lg:h-[28rem] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                    <p className="text-gray-600 text-base mb-4">{cat.description}</p>
                    <p className="text-primary-600 text-base font-medium">
                      Interested? Tell us what you need using the button above.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
