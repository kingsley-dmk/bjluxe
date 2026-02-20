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

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  const featuredCourses = getFeaturedCourses();
  const featuredServices = services.slice(0, 4);

  const testimonials = [
    {
      name: 'Amina Okafor',
      text: 'BeautyJay Luxe created the most beautiful bridal gown for my wedding. The attention to detail was incredible!',
      rating: 5,
    },
    {
      name: 'Chioma Adeleke',
      text: 'The training courses are amazing! I learned so much and now I can make my own clothes - both Nigerian attires and modern styles.',
      rating: 5,
    },
    {
      name: 'Fatima Ibrahim',
      text: 'The styling service helped me find my perfect style. They styled me beautifully for my Aso Ebi event and other occasions!',
      rating: 5,
    },
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Custom dress sewing - craftsmanship and tailoring"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white container-custom"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Fashion Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium fashion, custom sewing, styling and more. Nigerian attires, bridal wear and timeless elegance — one stitch at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services/custom-sewing" className="btn-primary text-lg px-8 py-4">
              Get a Custom Dress
            </Link>
            <Link to="/shop" className="bg-white/90 backdrop-blur-sm text-primary-700 border-2 border-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
              Shop Ready-to-Wear
            </Link>
            <Link to="/services/training" className="bg-white/90 backdrop-blur-sm text-primary-700 border-2 border-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
              Join a Class
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
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
            <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">Our specialty</p>
            <h2 className="text-4xl font-bold mb-4">Custom Dress Sewing</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your dream dress, made to your measurements. We specialize in Nigerian attires, bridal wear, evening gowns, and all fashion styles.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className="flex-shrink-0 text-5xl md:text-6xl">✂️</div>
              <div className="flex-grow">
                <p className="text-gray-700 mb-4">
                  From Ankara sets and Aso Ebi to bridal gowns and evening wear — custom measurements, fabric guidance, and professional finishing. Starting from ₦35,000.
                </p>
                <Link to="/services/custom-sewing" className="btn-primary inline-flex">
                  Book custom sewing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">More Services</h2>
            <p className="text-gray-600 text-lg">Styling, alterations, rentals & more</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          
          <div className="text-center mt-8">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Shop our latest collection of fashion products including Nigerian attires, bridal wear, and elegant designs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/shop" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Training Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Fashion Training</h2>
            <p className="text-gray-600 text-lg">Learn from the best in the industry</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/services/training" className="btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Don't just take our word for it</p>
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
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Have Questions?</h2>
            <p className="text-xl mb-8">Chat with us on WhatsApp for instant assistance</p>
            <WhatsAppButton message="Hi, I have a question about BeautyJay Luxe" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
