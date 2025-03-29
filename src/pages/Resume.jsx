import { motion } from "framer-motion";
import React from "react";

const Resume = () => {
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
            <h1 className="text-4xl font-bold mb-4">Resume</h1>
            <p className="text-gray-600">
              Download my full resume or view it online
            </p>
            <a
              href="/Sivajeyabalan_Resume_original@sjb.pdf"
              className="btn btn-primary mt-4 inline-block"
              download="Sivajeyabalan_Resume.pdf"
            >
              Download Resume
            </a>
          </div>

          {/* Resume Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Personal Info */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Sivajeyabalan S</h2>
              <div className="text-gray-600">
                <p>Velammal College of Engineering and Technology</p>
                <p>Madurai-625009, Tamil Nadu, India</p>
                <p>📧 sivajeyabalan15@gmail.com | 📞 +91 8248727062</p>
                <div className="mt-2">
                  <a
                    href="https://www.linkedin.com/in/siva-jeya-balan-a31b10261/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary mr-4"
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

            {/* Career Objective */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Career Objective</h3>
              <p className="text-gray-600">
                Computer Science undergraduate with a solid grasp of data
                structures and algorithms, adept at tackling complex problems.
                Enthusiastic about software development, building scalable
                solutions, and exploring cutting-edge technologies.
              </p>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">
                    B.E. Computer Science & Engineering
                  </h4>
                  <p className="text-gray-600">
                    Velammal College of Engineering & Technology, Madurai
                  </p>
                  <p className="text-gray-600">
                    2022 - Present | CGPA: 7.61/10
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Higher Secondary Certificate</h4>
                  <p className="text-gray-600">
                    Alagumalar Matric High Sec School, Sivagangai
                  </p>
                  <p className="text-gray-600">2021 - 2022 | CGPA: 9.35/10</p>
                </div>
                <div>
                  <h4 className="font-medium">
                    Secondary School Leaving Certificate
                  </h4>
                  <p className="text-gray-600">
                    Alagumalar Matric High Sec School, Sivagangai
                  </p>
                  <p className="text-gray-600">2019 - 2020 | CGPA: 8.32/10</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div>
                <h4 className="font-medium">Full Stack Developer Intern</h4>
                <p className="text-gray-600">Futurik Technologies, Madurai</p>
                <p className="text-gray-600">June 2024 - July 2024</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>
                    Gained practical experience in MERN stack development by
                    building a Memories Project
                  </li>
                  <li>
                    Improved backend integration, database management, and
                    frontend development
                  </li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">BlogAPI - Backend Service</h4>
                  <p className="text-gray-600">Nov 2024 - Dec 2024</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>
                      Developed a RESTful API for a blogging platform using
                      Node.js, Express.js, and MongoDB
                    </li>
                    <li>
                      Implemented JWT authentication, role-based access control,
                      and CRUD operations
                    </li>
                    <li>
                      Deployed the backend using Render with API documentation
                      on Postman
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Weather App - Website</h4>
                  <p className="text-gray-600">Sept 2023 - Oct 2023</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>
                      Developed a weather application using HTML, CSS, and
                      JavaScript
                    </li>
                    <li>
                      Integrated OpenWeather API to fetch real-time weather data
                    </li>
                    <li>
                      Improved skills in API handling, asynchronous JavaScript,
                      and responsive UI design
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium">Programming Languages</h4>
                  <p className="text-gray-600">Java, JavaScript (ES6+)</p>
                </div>
                <div>
                  <h4 className="font-medium">Frontend</h4>
                  <p className="text-gray-600">React.js, Tailwind, HTML, CSS</p>
                </div>
                <div>
                  <h4 className="font-medium">Backend</h4>
                  <p className="text-gray-600">Node.js, Express.js</p>
                </div>
                <div>
                  <h4 className="font-medium">Databases</h4>
                  <p className="text-gray-600">MongoDB, PostgreSQL</p>
                </div>
                <div>
                  <h4 className="font-medium">Dev Tools</h4>
                  <p className="text-gray-600">Git, Postman, VS Code</p>
                </div>
                <div>
                  <h4 className="font-medium">AI & Cloud</h4>
                  <p className="text-gray-600">
                    OpenAI API, Gemini API, Vercel, Render
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>GraphQL with NodeJS Bootcamp - CDW (Dec 2024)</li>
                <li>Deep Learning - NPTEL (Nov 2024)</li>
                <li>Social Network - NPTEL (Nov 2023)</li>
                <li>Python Crash Course - Google (Coursera) (Aug 2023)</li>
              </ul>
            </div>

            {/* Personal Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p>
                    <span className="font-medium">Date of Birth:</span>{" "}
                    15-10-2004
                  </p>
                  <p>
                    <span className="font-medium">Languages:</span> English
                    (LSRW), Tamil (LSRW)
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-medium">Location:</span> Madurai,
                    Tamil Nadu, India
                  </p>
                  <p>
                    <span className="font-medium">Hobbies:</span> Listening to
                    music, playing games, solving coding problems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
