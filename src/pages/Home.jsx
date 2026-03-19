import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/pexels-cottonbro-4427642.jpg';
import { getFeaturedProducts } from '../data/products';
import { galleryImages } from '../data/galleryImages';
import WhatsAppButton from '../components/WhatsAppButton';
import { openWhatsApp } from '../utils/whatsapp';

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
  const allGalleryImages = galleryImages;
  const [selectedImage, setSelectedImage] = useState(null);

  const PAGE_SIZE = 24;
  const [page, setPage] = useState(1);

  const totalPages = useMemo(() => {
    if (!allGalleryImages.length) return 0;
    return Math.ceil(allGalleryImages.length / PAGE_SIZE);
  }, [allGalleryImages.length]);

  const pageImages = useMemo(() => {
    if (!allGalleryImages.length) return [];
    const start = (page - 1) * PAGE_SIZE;
    return allGalleryImages.slice(start, start + PAGE_SIZE);
  }, [allGalleryImages, page]);

  useEffect(() => {
    setPage(1);
  }, [allGalleryImages.length]);

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
              Luxury Wears, Tailored Just for You
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-600 leading-relaxed">
              BeautyJay Luxe showcases elegant designs you can shop ready-made or sew to your exact measurements, with simple guidance or manual measurement options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#gallery" className="btn-primary text-base md:text-lg px-8 py-4 text-center">
                View Styles Gallery
              </a>
              <Link to="/services/custom-sewing" className="btn-secondary text-base md:text-lg text-center">
                Sew a Custom Style
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

      {/* How it works */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">Simple process</p>
            <h2 className="text-4xl font-bold mb-4">How BeautyJay Luxe Works</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Browse styles, choose ready-made or sewing, then send your measurements for a confident fit.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: 1,
                heading: 'Browse designs',
                text: 'Scroll through the gallery to see designs and styles.',
              },
              {
                number: 2,
                heading: 'Ready-made or sew',
                text: 'Choose ready-made pieces or request sewing of any design you love.',
              },
              {
                number: 3,
                heading: 'Send measurements',
                text: 'Send your measurements so we can sew the perfect fit.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 border border-gray-200 bg-white/80"
              >
                <div className="flex items-start gap-4 mb-3">
                  <span className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center font-bold text-xl">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1">{item.heading}</h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section id="gallery" className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">Gallery</p>
            <h2 className="text-4xl font-bold mb-3">Designs & Styles</h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Explore BeautyJay Luxe pieces. Every image is a style you can shop or sew.
            </p>
          </motion.div>

          {allGalleryImages.length === 0 ? (
            <div className="text-center text-gray-500 text-base">
              Add your image details to <code>galleryImages</code> so they appear here.
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
              >
                {pageImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index * 0.03, 0.25) }}
                    className="group relative overflow-hidden rounded-xl bg-gray-200 cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.title || 'BeautyJay Luxe design'}
                      className="w-full h-72 md:h-80 lg:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {(image.title || image.category) && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white">
                        {image.title && <p className="font-semibold text-base">{image.title}</p>}
                        {image.category && (
                          <p className="text-sm text-gray-200 mt-1">{image.category}</p>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Don't see your style CTA */}
              <div className="mt-10 max-w-2xl mx-auto text-center bg-white border border-dashed border-primary-200 rounded-2xl px-6 py-6">
                <p className="text-base md:text-lg text-gray-700 mb-3">
                  Don&apos;t see your exact style here? You can still sew <span className="font-semibold">any</span> design you have saved from Instagram, Pinterest or your phone.
                </p>
                <Link
                  to="/services/custom-sewing"
                  className="inline-flex btn-secondary mt-1"
                >
                  Sew my own style
                </Link>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
                  <button
                    type="button"
                    className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPage(p)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                        p === page
                          ? 'bg-primary-600 border-primary-600 text-white'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-primary-200 hover:text-primary-600'
                      }`}
                    >
                      {p}
                    </button>
                  ))}

                  <button
                    type="button"
                    className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Gallery action modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 md:px-10 py-10 md:py-16">
          <div className="bg-white rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 min-h-[620px]">
              <div className="relative h-96 md:h-full bg-gray-100">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title || 'Selected style'}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedImage.title || 'BeautyJay Luxe Style'}
                </h3>
                {selectedImage.category && (
                  <p className="text-sm text-gray-500 mb-4">{selectedImage.category}</p>
                )}
                <p className="text-gray-600 mb-6">
                  How would you like to get this look?
                </p>
                <div className="space-y-3">
                  <button
                    type="button"
                    className="w-full btn-primary py-3"
                    onClick={() => {
                      openWhatsApp(
                        `Hi BeautyJay Luxe, I would like to SHOP this look from your gallery: "${selectedImage.title ||
                          'Unnamed style'}".`
                      );
                      setSelectedImage(null);
                    }}
                  >
                    Shop this look
                  </button>
                  <button
                    type="button"
                    className="w-full btn-secondary py-3"
                    onClick={() => {
                      openWhatsApp(
                        `Hi BeautyJay Luxe, I would like to SEW this style from your gallery: "${selectedImage.title ||
                          'Unnamed style'}".`
                      );
                      setSelectedImage(null);
                    }}
                  >
                    Sew this style
                  </button>
                  <button
                    type="button"
                    className="w-full text-sm text-gray-500 mt-2"
                    onClick={() => setSelectedImage(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
