import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { getServiceById } from '../data/services';
import { sendEmail } from '../utils/email';
import { openWhatsAppService } from '../utils/whatsapp';
import WhatsAppButton from '../components/WhatsAppButton';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(id);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  if (!service) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">
            Back to Services
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service_name: service.name,
        message: formData.message,
      });
      setSuccess(true);
      setTimeout(() => {
        openWhatsAppService(service.name);
      }, 1000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again or contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Service Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
              <div className="mb-4">
                <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {service.category}
                </span>
              </div>
              <p className="text-lg text-gray-600 mb-6">{service.description}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-6 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">What's Included</h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-6 bg-primary-50"
            >
              <h2 className="text-2xl font-bold mb-2">Pricing</h2>
              <p className="text-3xl font-bold text-primary-600">{service.pricing}</p>
              <p className="text-gray-600 mt-2">Contact us for a custom quote based on your specific needs</p>
            </motion.div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold mb-6">Book This Service</h2>
              
              {success && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Request sent successfully! Redirecting to WhatsApp...
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <label className="block font-medium mb-2">Message / Requirements</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Request'}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600 mb-4 text-center">Or contact us directly</p>
                <WhatsAppButton 
                  message={`Hi, I'm interested in ${service.name}`}
                  className="w-full justify-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
