import React from 'react';

const Resume = () => {
  const education = [
    {
      degree: "B.E Computer Science & Engg",
      institution: "Velammal College of Engg. & Tech.",
      year: "2020-2024",
      cgpa: "7.81/10"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Anjuham Matric High Sec School",
      year: "2019-2020",
      cgpa: "9.58/10"
    }
  ];

  const experience = [
    {
      company: "Nandri Technologies",
      position: "Full Stack Developer Intern",
      duration: "June 2023 - July 2023",
      description: [
        "Gained practical experience in MERN stack development by building a Memories Project",
        "Improved backend integration, database management, and frontend development while working on a real-world project"
      ]
    }
  ];

  const skills = {
    programming: ["Java", "JavaScript", "HTML", "CSS", "Python", "Node.js", "Express.js", "MongoDB"],
    tools: ["Git", "VS Code", "Postman"],
    other: ["Agile", "Project Management", "Problem Solving"]
  };

  return (
    <section className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Resume</h2>
          
          {/* Education Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-500 dark:text-gray-400">{edu.year}</span>
                    <span className="text-blue-600 dark:text-blue-400">CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.position}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">{exp.duration}</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white capitalize mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
