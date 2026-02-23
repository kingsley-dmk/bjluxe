import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/pexels-cottonbro-4427642.jpg';
import { getFeaturedProducts } from '../data/products';
import { getFeaturedCourses } from '../data/courses';
import { services } from '../data/services';
import ProductCard from '../components/ProductCard';
import CourseCard from '../components/CourseCard';
import ServiceCard from '../components/ServiceCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const ScissorsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="16" r="4.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="32" r="4.5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M21 12L36 4M21 36L36 44"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M18 20L28 24L18 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  const featuredCourses = getFeaturedCourses();
  const featuredServices = services.slice(0, 4);

  const testimonials = [
    {
      name: 'Amina Okafor',
      context: 'Bridal gown · Lagos',
      text: 'BeautyJay Luxe created the most beautiful bridal gown for my wedding. The attention to detail was incredible!',
      rating: 5,
    },
    {
      name: 'Chioma Adeleke',
      context: 'Fashion training · Abuja',
      text: 'The training courses are amazing! I learned so much and now I can make my own clothes - both Nigerian attires and modern styles.',
      rating: 5,
    },
    {
      name: 'Fatima Ibrahim',
      context: 'Aso Ebi styling · Lagos',
      text: 'The styling service helped me find my perfect style. They styled me beautifully for my Aso Ebi event and other occasions!',
      rating: 5,
    },
  ];

  return (
    <div className="pt-28">
      {/* Hero Section — image left, text right */}
      <section className="relative min-h-[80vh] md:min-h-[85vh] flex flex-col md:flex-row overflow-hidden bg-gray-50">
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-0 flex-shrink-0">
          <img
            src={heroImage}
            alt="Custom dress sewing - craftsmanship and tailoring"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Right: Text & CTAs — subtle divider and depth */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start bg-white px-6 py-16 md:py-24 md:pl-12 lg:pl-16 xl:pl-24 md:border-l md:border-gray-100 md:shadow-[-4px_0_24px_rgba(0,0,0,0.04)]">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Custom Dresses, Rentals & Fashion Training
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-600 leading-relaxed">
              BeautyJay Luxe crafts Nigerian attires, bridal gowns and occasion wear with couture-level finishing — plus expert training to help you create your own looks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services/custom-sewing" className="btn-primary text-base md:text-lg px-8 py-4 text-center">
                Book a Custom Dress
              </Link>
              <Link to="/shop" className="btn-secondary text-base md:text-lg text-center">
                Shop Ready-to-Wear
              </Link>
              <Link to="/services/training" className="btn-secondary text-base md:text-lg text-center">
                Explore Trainings
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Custom Sewing — Our Specialty */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-primary-600 font-medium text-base uppercase tracking-wider mb-2">Our specialty</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <ScissorsIcon className="w-12 h-12 md:w-16 md:h-16 text-primary-600" />
              <h2 className="text-4xl font-bold">Custom Dress Sewing</h2>
            </div>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Your dream dress, made to your measurements. We specialize in Nigerian attires, bridal wear, evening gowns, and all fashion styles.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="card p-6 md:p-8">
              <p className="text-gray-700 text-lg mb-4">
                From Ankara sets and Aso Ebi to bridal gowns and evening wear — custom measurements, fabric guidance, and professional finishing. Starting from ₦35,000.
              </p>
              <p className="text-center">
                <Link to="/services/custom-sewing" className="text-primary-600 font-medium hover:text-primary-700 no-underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">
                  What's included →
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">What we offer</p>
            <h2 className="text-4xl font-bold mb-4">More Services</h2>
            <p className="text-gray-600 text-xl">Styling, alterations, rentals & more</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.filter((s) => s.id !== 'custom-sewing').map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">Collection</p>
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">Shop our latest collection of fashion products including Nigerian attires, bridal wear, and elegant designs.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/shop" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Fashion Training */}
      <section className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">Learn with us</p>
            <h2 className="text-4xl font-bold mb-4">Fashion Training</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">Learn from the best in the industry — Nigerian attires, bridal wear, and modern fashion.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services/training" className="btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50/30 border-t border-gray-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">Testimonials</p>
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-xl font-sans">Real stories from BeautyJay Luxe clients.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-lg mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
                {testimonial.context && (
                  <p className="text-sm text-gray-500 mt-1">{testimonial.context}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Have Questions? CTA */}
      <section className="section-padding bg-primary-600 text-white border-t-4 border-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Have Questions?</h2>
            <p className="text-lg md:text-xl text-primary-100 mb-2">
              Chat with us on WhatsApp — we&apos;re here to help.
            </p>
            <p className="text-sm text-primary-200 mb-8">We typically reply within 24 hours.</p>
            <div className="flex justify-center">
              <WhatsAppButton message="Hi, I have a question about BeautyJay Luxe" label="Get in touch" variant="outline-light" className="inline-flex min-w-[280px] sm:min-w-[320px] px-10 py-4 text-lg justify-center" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
