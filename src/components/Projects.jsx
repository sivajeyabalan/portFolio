import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "BlogIt",
      duration: "Dec 2024",
      description: "Developed a RESTful API for a blogging platform using Node.js, Express.js, and MongoDB",
      features: [
        "User authentication and authorization",
        "CRUD operations for blog posts",
        "API documentation on Postman"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "REST API"]
    },
    {
      title: "Weather App",
      duration: "Sept 2023 - Oct 2023",
      description: "Created a real-time weather application using HTML, CSS, and JavaScript, integrating the OpenWeather API",
      features: [
        "Real-time weather data",
        "Responsive UI design",
        "Asynchronous JavaScript for API handling"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"]
    }
  ];

  return (
    <section className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.duration}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
