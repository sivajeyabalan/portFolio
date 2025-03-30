import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-gray-600">
              Get in touch with me for any questions or opportunities
            </p>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:sivajeyabalan15@gmail.com"
                  className="text-primary hover:text-secondary"
                >
                  sivajeyabalan15@gmail.com
                </a>
              </div>

              <div className="text-center">
                <h3 className="font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+918248727062"
                  className="text-primary hover:text-secondary"
                >
                  +91 8248727062
                </a>
              </div>

              <div className="text-center">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Madurai, Tamil Nadu, India</p>
              </div>

              <div className="text-center">
                <h3 className="font-semibold mb-2">Social Links</h3>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/siva-jeya-balan-a31b10261/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/sivajeyabalan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
