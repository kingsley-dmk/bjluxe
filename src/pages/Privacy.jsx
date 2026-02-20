import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="pt-28 section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              BeautyJay Luxe ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect information about you in a variety of ways:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Personal information (name, email, phone number) when you make a purchase or contact us</li>
              <li>Payment information processed through Paystack</li>
              <li>Usage data and analytics when you visit our website</li>
              <li>Information you provide when booking services or enrolling in courses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To process your orders and payments</li>
              <li>To communicate with you about your orders and services</li>
              <li>To provide customer support</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              We use third-party services including Paystack for payments and EmailJS for form submissions. These services have their own privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy, please contact us at:
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

export default Privacy;
