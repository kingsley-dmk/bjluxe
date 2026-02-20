import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCourseById } from '../data/courses';
import { config } from '../config';
import { initializePaystack, generatePaymentReference, loadPaystackScript } from '../utils/paystack';
import { openWhatsAppCourse } from '../utils/whatsapp';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = getCourseById(id);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceLevel: 'Beginner',
  });

  useEffect(() => {
    if (course) {
      loadPaystackScript();
    }
  }, [course]);

  if (!course) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link to="/services/training" className="btn-primary">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEnroll = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const reference = generatePaymentReference();
      
      initializePaystack(
        formData.email,
        course.price,
        reference,
        async (response) => {
          // Payment successful
          navigate('/payment-success', {
            state: {
              orderData: {
                reference: response.reference,
                customer: formData,
                course: course,
                total: course.price,
                date: new Date().toISOString(),
              },
            },
          });
        }
      );
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section-padding">
      <div className="container-custom max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Course Info */}
          <div className="lg:col-span-2">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                {course.category}
              </span>
              <span className="text-gray-600">{course.duration}</span>
              <span className="text-gray-600">{course.format}</span>
            </div>

            <p className="text-lg text-gray-600 mb-8">{course.description}</p>

            {/* What You'll Learn */}
            {course.whatYoullLearn && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <ul className="space-y-2">
                  {course.whatYoullLearn.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Curriculum */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
              <div className="space-y-3">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who This Course Is For */}
            {course.whoIsThisFor && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Who This Course Is For</h2>
                <p className="text-gray-600">{course.whoIsThisFor}</p>
              </div>
            )}
          </div>

          {/* Enrollment Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6 sticky top-24"
            >
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {config.currencySymbol}{course.price.toLocaleString()}
                </div>
                <p className="text-gray-600">{course.duration} • {course.format}</p>
              </div>

              <form onSubmit={handleEnroll} className="space-y-4">
                <div>
                  <label className="block font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">Phone/WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">Experience Level</label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Enroll Now'}
                </button>

                <button
                  type="button"
                  onClick={() => openWhatsAppCourse(course.title)}
                  className="btn-secondary w-full"
                >
                  Ask Questions
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
