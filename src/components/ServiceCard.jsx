import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceIcon from './ServiceIcon';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="group h-full flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="p-8 flex flex-col flex-1">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-6">
          <ServiceIcon name={service.icon} className="w-7 h-7" />
        </div>

        {/* Title & description */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
        <p className="text-gray-600 text-base leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        {/* Features - compact list with checkmarks */}
        <ul className="space-y-2 mb-5">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <p className="text-primary-600 font-semibold text-sm mb-6">{service.pricing}</p>

        {/* Actions */}
        <div className="mt-auto">
          <Link
            to={`/services/${service.id}`}
            className="block w-full text-center btn-primary py-3 rounded-lg text-base font-medium"
          >
            Learn more
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
