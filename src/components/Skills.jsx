import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', logo: '/logos/javascript.svg', category: 'Programming Language' },
  { name: 'Java', logo: '/logos/java.svg', category: 'Programming Language' },
  { name: 'TypeScript', logo: '/logos/typescript.svg', category: 'Programming Language' },
  { name: 'HTML', logo: '/logos/html.svg', category: 'Web Technology' },
  { name: 'CSS', logo: '/logos/css.svg', category: 'Web Technology' },
  { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg', category: 'CSS Framework' },
  { name: 'Bootstrap', logo: '/logos/bootstrap.svg', category: 'CSS Framework' },
  { name: 'MongoDB', logo: '/logos/mongodb.svg', category: 'Database' },
  { name: 'PostgreSQL', logo: '/logos/postgresql.svg', category: 'Database' },
  { name: 'Windows', logo: '/logos/windows.svg', category: 'Operating System' },
  { name: 'Linux', logo: '/logos/linux.svg', category: 'Operating System' },
  { name: 'React.js', logo: '/logos/react.svg', category: 'Framework & Library' },
  { name: 'Express.js', logo: '/logos/express.svg', category: 'Framework & Library' },
  { name: 'Node.js', logo: '/logos/nodejs.svg', category: 'Runtime' },
  { name: 'Git', logo: '/logos/git.svg', category: 'Development Tool' },
  { name: 'Postman', logo: '/logos/postman.svg', category: 'Development Tool' },
  { name: 'VS Code', logo: '/logos/vscode.svg', category: 'Development Tool' },
  { name: 'Google API', logo: '/logos/googleapi.svg', category: 'Development Tool' },
  { name: 'ChatGPT', logo: '/logos/chatgpt.svg', category: 'AI-Assisted Tool' },
  { name: 'Claude', logo: '/logos/claude.svg', category: 'AI-Assisted Tool' },
  { name: 'Cursor', logo: '/logos/cursor.svg', category: 'AI-Assisted Tool' },
  { name: 'OpenAI API', logo: '/logos/openai.svg', category: 'AI-Assisted Tool' },
  { name: 'Gemini API', logo: '/logos/gemini.svg', category: 'AI-Assisted Tool' },
  { name: 'Figma', logo: '/logos/figma.svg', category: 'UI/UX & Design Tool' },
  { name: 'Canva', logo: '/logos/canva.svg', category: 'UI/UX & Design Tool' },
  { name: 'Vercel', logo: '/logos/vercel.svg', category: 'Cloud & Deployment' },
  { name: 'Render', logo: '/logos/render.svg', category: 'Cloud & Deployment' },
  { name: 'Firebase', logo: '/logos/firebase.svg', category: 'Cloud & Deployment' },
  { name: 'Word', logo: '/logos/word.svg', category: 'Managing Tool' },
  { name: 'Excel', logo: '/logos/excel.svg', category: 'Managing Tool' },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
              >
                <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 