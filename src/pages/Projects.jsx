import { motion } from "framer-motion";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "BlogAPI - Backend Service",
      description:
        "A RESTful API for a blogging platform with JWT authentication and role-based access control.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Postman"],
      image: "/projects/placeholder.svg",
      github: "https://github.com/sivajeyabalan/blogapi",
      demo: "https://blogapi-sadl.onrender.com",
      date: "Nov 2024 - Dec 2024",
      features: [
        "JWT-based authentication system",
        "Role-based access control (Admin, Author, User)",
        "CRUD operations for posts and comments",
        "Input validation and error handling",
        "API documentation with Postman",
        "Deployed on Render with MongoDB Atlas",
      ],
    },
    {
      title: "Weather App - Website",
      description:
        "A weather application using OpenWeather API with real-time data and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      image: "/projects/placeholder.svg",
      github: "https://github.com/sivajeyabalan/weather-app",
      demo: "https://weather-app-demo.netlify.app",
      date: "Sept 2023 - Oct 2023",
      features: [
        "Real-time weather data fetching",
        "Location-based weather information",
        "Responsive design for all devices",
        "Temperature unit conversion",
        "Weather icons and animations",
        "Error handling for API failures",
      ],
    },
  ];

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-gray-600">
              Explore my engineering projects and technical work
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  {/* Project Image */}
                  <div className="md:w-1/2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Date */}
                    <p className="text-gray-500 text-sm mb-4">{project.date}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Key Features:</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        View Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
