import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sewing', path: '/services/custom-sewing' },
    { name: 'Shop', path: '/shop' },
    { name: 'Services', path: '/services' },
    { name: 'Rentals', path: '/shop/rentals' },
    { name: 'Trainings', path: '/services/training' },
    { name: 'About', path: '/about' },
  ];

  const isShopActive = location.pathname.startsWith('/shop') && location.pathname !== '/shop/rentals';
  const isServicesActive =
    location.pathname.startsWith('/services') && 
    location.pathname !== '/services/custom-sewing' && 
    location.pathname !== '/services/training';
  const isSewingActive = location.pathname === '/services/custom-sewing';
  const isRentalsActive = location.pathname === '/shop/rentals';
  const isTrainingsActive = location.pathname.startsWith('/services/training');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="relative">
        <div className="flex items-center justify-between min-h-20 py-2">
          <Link to="/" className="flex items-center pl-4 sm:pl-6 lg:pl-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <img src={logo} alt="BeautyJay Luxe" className="h-[72px] sm:h-20 md:h-24 lg:h-28 w-auto object-contain" style={{ maxHeight: 'none' }} />
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-1 justify-center">
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/shop'
                    ? isShopActive
                    : link.path === '/services'
                      ? isServicesActive
                      : link.path === '/services/custom-sewing'
                        ? isSewingActive
                        : link.path === '/shop/rentals'
                          ? isRentalsActive
                          : link.path === '/services/training'
                            ? isTrainingsActive
                            : location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`inline-flex font-medium transition-all duration-200 px-4 py-2.5 ${
                      isActive
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

          <div className="flex items-center space-x-4 pr-4 sm:pr-6 lg:pr-8">
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </motion.button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4 container-custom"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.path === '/shop'
                      ? isShopActive
                      : link.path === '/services'
                        ? isServicesActive
                        : link.path === '/services/custom-sewing'
                          ? isSewingActive
                          : link.path === '/shop/rentals'
                            ? isRentalsActive
                            : link.path === '/services/training'
                              ? isTrainingsActive
                              : location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 font-medium transition-colors ${
                        isActive ? 'bg-primary-100 text-primary-700' : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <motion.button
                  onClick={() => {
                    setIsOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="relative py-3 text-left font-medium text-gray-700 flex items-center gap-2"
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Cart
                  {itemCount > 0 && (
                    <span className="bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
