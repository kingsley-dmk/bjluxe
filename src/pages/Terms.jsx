import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="pt-28 section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using BeautyJay Luxe's website, you accept and agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Products and Services</h2>
            <p className="text-gray-600 mb-4">
              We offer fashion products, custom sewing services, training courses, and styling services. All products are subject to availability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Pricing and Payment</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All prices are in Nigerian Naira (₦)</li>
              <li>Payment is processed securely through Paystack</li>
              <li>Prices are subject to change without notice</li>
              <li>Custom orders may require a deposit before work begins</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Custom Orders</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Custom orders require accurate measurements</li>
              <li>Alterations may be needed and are included in the price</li>
              <li>Production time varies based on complexity</li>
              <li>Refunds are not available for custom-made items unless there's a defect</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Returns and Refunds</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Ready-to-wear items can be returned within 7 days of delivery</li>
              <li>Items must be unworn and in original condition</li>
              <li>Custom-made items are non-refundable</li>
              <li>Refunds will be processed within 14 business days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Training Courses</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Course fees are non-refundable once enrollment is confirmed</li>
              <li>Course materials are provided as part of enrollment</li>
              <li>Certificates are issued upon completion</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              BeautyJay Luxe shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms, contact us at:
            </p>
            <p className="text-gray-600">
              Email: info@beautyjayluxe.com<br />
              WhatsApp: [Your WhatsApp Number]
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
