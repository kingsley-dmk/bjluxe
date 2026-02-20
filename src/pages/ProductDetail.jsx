import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductById, products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { config } from '../config';
import { openWhatsAppProduct } from '../utils/whatsapp';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary-600' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-primary-600 text-2xl font-bold mb-6">
              {config.currencySymbol}{product.price.toLocaleString()}
            </p>
            
            <div className="mb-6">
              <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm mb-4 font-medium">
                {product.category}
              </span>
            </div>

            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block font-medium mb-2">Size</label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded ${
                        selectedSize === size
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-gray-300 hover:border-primary-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Materials */}
            {product.materials && (
              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  <strong>Materials:</strong> {product.materials.join(', ')}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <motion.button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: product.inStock ? 1.02 : 1 }}
                whileTap={{ scale: product.inStock ? 0.98 : 1 }}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </motion.button>
              <motion.button
                onClick={() => openWhatsAppProduct(product.name)}
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ask on WhatsApp
              </motion.button>
            </div>

            {/* Stock Status */}
            <p className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <ProductCard product={relatedProduct} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
