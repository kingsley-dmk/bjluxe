import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceIcon from './ServiceIcon';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="group h-full min-h-[520px] flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-10 sm:p-12 flex flex-col flex-1 relative">
        {/* Top row: icon + pricing */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center">
            <ServiceIcon name={service.icon} className="w-7 h-7" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-primary-700 bg-primary-50 border border-primary-100 px-3 py-1 rounded-full whitespace-nowrap">
            {service.pricing}
          </span>
        </div>

        {/* Title & description */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-1 mb-11">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-12">
          {service.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <svg
                className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-auto">
          <Link
            to={`/services/${service.id}`}
            className="block w-full text-center btn-primary py-4 rounded-xl text-base font-medium hover:shadow-md"
          >
            Learn more
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
