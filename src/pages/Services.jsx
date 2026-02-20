import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const displayServices = [...services].sort((a, b) => (a.id === 'custom-sewing' ? -1 : b.id === 'custom-sewing' ? 1 : 0));

  return (
    <div>
      <section className="border-b border-gray-200 bg-hero py-10 md:py-14">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Fashion Services</h1>
          <p className="text-gray-200 text-lg">Custom dress sewing is our priority — then styling, alterations, and more. Nigerian attires and all fashion styles.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-200 mb-10 text-lg"
        >
          From custom sewing to styling — choose the service that fits you.
        </motion.p>
        </div>
      </section>
      <div className="section-padding container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default Services;
