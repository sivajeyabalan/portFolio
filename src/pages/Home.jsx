import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg"
            >
              <img
                src="../../public/resume_img.jpg"
                alt="Sivajeyabalan"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm Sivajeyabalan
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Computer Science Engineering Student
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link
                  to="/resume"
                  className="btn bg-white text-primary hover:bg-gray-100"
                >
                  View Resume
                </Link>
                <Link
                  to="/projects"
                  className="btn border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-8">
              I'm a Computer Science undergraduate with a solid grasp of data
              structures and algorithms, adept at tackling complex problems. I'm
              enthusiastic about software development, building scalable
              solutions, and exploring cutting-edge technologies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-primary">Frontend</h3>
                <p className="text-sm text-gray-600">React.js, Tailwind</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-primary">Backend</h3>
                <p className="text-sm text-gray-600">Node.js, Express</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-primary">Database</h3>
                <p className="text-sm text-gray-600">MongoDB, PostgreSQL</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-primary">Tools</h3>
                <p className="text-sm text-gray-600">Git, VS Code</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Projects Preview */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Latest Projects</h2>
            <p className="text-gray-600">Check out some of my recent work</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">BlogAPI</h3>
                <p className="text-gray-600 mb-4">
                  A RESTful API for a blogging platform with JWT authentication
                  and role-based access control.
                </p>
                <Link
                  to="/projects"
                  className="text-primary hover:text-secondary"
                >
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Weather App</h3>
                <p className="text-gray-600 mb-4">
                  A weather application using OpenWeather API with real-time
                  data and responsive design.
                </p>
                <Link
                  to="/projects"
                  className="text-primary hover:text-secondary"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
