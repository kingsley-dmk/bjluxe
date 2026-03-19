import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { config } from '../config';
import { openWhatsAppCourse } from '../utils/whatsapp';

const CourseCard = ({ course }) => {
  return (
    <motion.div
      className="group h-full min-h-[520px] flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link to={`/services/training/${course.id}`} className="block flex-shrink-0">
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-primary-600 font-medium">{course.category}</span>
          <span className="text-sm text-gray-500">{course.duration}</span>
        </div>
        
        <Link to={`/services/training/${course.id}`} className="flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
            {course.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-base mb-6 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-primary-600">
            {config.currencySymbol}{course.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">{course.format}</span>
        </div>
        
        <div className="mt-auto space-y-3">
          <Link
            to={`/services/training/${course.id}`}
            className="block w-full text-center btn-primary py-3 rounded-xl text-base font-medium"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
