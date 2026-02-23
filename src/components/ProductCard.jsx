import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { config } from '../config';
import { openWhatsAppProduct } from '../utils/whatsapp';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="group h-full flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-300 overflow-hidden"
    >
      <Link to={`/shop/${product.id}`} className="block flex-shrink-0">
        <div className="relative overflow-hidden aspect-[3/4] bg-gray-50">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white font-semibold text-sm uppercase tracking-wide">Out of Stock</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/shop/${product.id}`} className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{product.category}</p>
        <p className="text-xl font-bold text-primary-600 mb-4">
          {config.currencySymbol}{product.price.toLocaleString()}
        </p>

        <div className="mt-auto space-y-2">
          <motion.button
            onClick={() => product.inStock && addToCart(product)}
            disabled={!product.inStock}
            className="w-full btn-primary py-3 rounded-lg text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: product.inStock ? 1.01 : 1 }}
            whileTap={{ scale: product.inStock ? 0.99 : 1 }}
          >
            Add to Cart
          </motion.button>
          <p className="text-center">
            <button
              type="button"
              onClick={() => openWhatsAppProduct(product.name)}
              className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
            >
              Or message us
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
