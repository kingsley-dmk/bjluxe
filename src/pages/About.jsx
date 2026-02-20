import { motion } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';

const About = () => {
  return (
    <div className="pt-28">
      <section className="border-b border-gray-200 bg-hero py-10 md:py-14">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About BeautyJay Luxe</h1>
          <p className="text-xl text-gray-200">
            Where fashion meets excellence, and style becomes art
          </p>
          </motion.div>
        </div>
      </section>
      <div className="section-padding">
      <div className="container-custom max-w-6xl">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              BeautyJay Luxe was born from a passion for creating timeless elegance and empowering individuals
              through fashion. Founded with a vision to blend African fashion excellence with modern digital convenience,
              we have become a trusted name in the fashion industry.
            </p>
            <p>
              What started as a small tailoring business has grown into a comprehensive fashion platform offering
              custom designs, professional training, styling services, and so much more. We believe that everyone
              deserves to look and feel their best, and we're here to make that possible.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide premium fashion products and services that empower individuals to express their unique style
              while maintaining the highest standards of quality and craftsmanship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the leading fashion brand in Africa, known for excellence, innovation, and empowering
              the next generation of fashion designers and stylists.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Excellence', description: 'We strive for perfection in every stitch and every service.' },
              { title: 'Innovation', description: 'We embrace new ideas and techniques to stay ahead.' },
              { title: 'Empowerment', description: 'We believe in empowering our customers and students.' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-primary-600 text-white p-12 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fashion Journey?</h2>
          <p className="text-xl mb-8">Get in touch with us today</p>
          <WhatsAppButton />
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default About;
