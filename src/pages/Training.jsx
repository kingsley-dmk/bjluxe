import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const Training = () => {

  return (
    <div>
      <section className="border-b border-gray-200 bg-hero py-10 md:py-14">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Fashion Training Courses</h1>
            <p className="text-gray-200 text-lg">Learn from industry experts and master the art of fashion - including Nigerian attires, bridal wear, and all fashion styles</p>
          </motion.div>
        </div>
      </section>
      <div className="section-padding">
      <div className="container-custom">
        {/* Category Filter - All Courses Only */}
        <div className="flex justify-center mb-12">
          <button className="px-6 py-2 rounded-lg bg-primary-600 text-white font-medium transition-colors">
            All Courses
          </button>
        </div>

        {/* Courses Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Training;
