import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  // Filter out Fashion Materials and reverse order so newest items appear first
  const filteredProducts = products
    .filter((product) => product.category !== 'Fashion Materials')
    .reverse(); // Reverse to show newest items first

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Page header */}
      <section className="border-b border-gray-200 bg-hero">
        <div className="container-custom py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-primary-200 font-medium text-sm uppercase tracking-wider mb-2">
              Collection
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Shop Fashion
            </h1>
            <p className="text-gray-200 text-base md:text-lg">
              Discover our premium collection — Nigerian attires, bridal wear, evening gowns, and elegant ready-to-wear pieces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Results count */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <p className="text-sm text-gray-600">
              {filteredProducts.length === 0 ? (
                'No products found'
              ) : (
                <>
                  Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span>{' '}
                  {filteredProducts.length === 1 ? 'product' : 'products'}
                </>
              )}
            </p>
          </div>

          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.04, 0.3) }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-16 px-4 text-center max-w-md mx-auto"
            >
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No products found</h2>
              <p className="text-gray-600 text-sm">
                Check back soon for new arrivals.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
