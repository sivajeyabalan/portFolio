import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Computer Science Graduate
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Passionate about software development and problem-solving, with expertise in full-stack development
              and a strong foundation in data structures and algorithms. Eager to apply skills to meaningful projects.
            </p>
            <div className="flex space-x-4">
              <a 
                href="contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="projects" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-xl">
              <img 
                src="/profile.jpg" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
