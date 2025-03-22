import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            Sivajeyabalan S
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/resume" className="nav-link">Resume</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
