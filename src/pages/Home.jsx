import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative">
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
                src="/resume_img.jpg"
                alt="Sivajeyabalan"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
              >
                Hi, I'm Sivajeyabalan
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl mb-8 text-gray-100"
              >
                Computer Science Engineering Student
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center md:justify-start space-x-4"
              >
                <Link
                  to="/resume"
                  className="btn bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  View Resume
                </Link>
                <Link
                  to="/projects"
                  className="btn border-2 border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  View Projects
                </Link>
              </motion.div>
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Latest Projects
            </h2>
            <p className="text-gray-600">Check out some of my recent work</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "BlogAPI",
                description:
                  "A RESTful API for a blogging platform with JWT authentication and role-based access control.",
              },
              {
                title: "Weather App",
                description:
                  "A weather application using OpenWeather API with real-time data and responsive design.",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to="/projects"
                    className="text-primary hover:text-secondary font-medium inline-flex items-center group"
                  >
                    Learn more
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
