import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const displayServices = [...services].sort((a, b) =>
    a.id === 'custom-sewing' ? -1 : b.id === 'custom-sewing' ? 1 : 0
  );

  return (
    <div className="pt-28">
      <section className="border-b border-gray-200 bg-hero py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h1>
            <p className="text-gray-200 text-xl leading-relaxed">
              Choose the option that fits your needs. Sew a saved style, get style guidance, or sew your wedding gown and bridal wears.
            </p>
            <p className="text-gray-300 text-base mt-4">
              Start with <span className="font-semibold text-white">Sew My Own Style</span> if you already have a design you want to sew.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="section-padding bg-gray-50/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
