import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // install lucide-react for icons

const users = [
  {
    quiz_game: 'HTML Mastery Quiz',
    description: 'Test your knowledge of HTML elements, attributes, forms, and semantic tags.',
    logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png'
  },
  {
    quiz_game: 'CSS Styling Quiz',
    description: 'Challenge yourself with questions on selectors, box model, flexbox, and grid layout.',
    logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png'
  },
  {
    quiz_game: 'JavaScript Fundamentals Quiz',
    description: 'Evaluate your understanding of JS syntax, functions, objects, DOM, and events.',
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
  },
  {
    quiz_game: 'SQL Query Challenge',
    description: 'Dive into SQL basics including SELECT, JOIN, GROUP BY, and constraints.',
    logo: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png'
  },
  {
    quiz_game: 'ReactJS Skill Test',
    description: 'Prove your skills in components, hooks, props, state, and JSX structure.',
    logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png'
  },
  {
    quiz_game: 'Tailwind CSS Challenge',
    description: 'Test your utility-first CSS knowledge using Tailwind classes and responsive design.',
    logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg'
  }
];

const Card = ({ logo, quiz_game, description }) => {
  const navigate = useNavigate();
  const topic = quiz_game.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="bg-gradient-to-tr from-violet-500 to-amber-500 text-black p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all w-full max-w-sm mx-auto mb-6">
      <img
        className="h-28 w-28 mx-auto rounded-full mb-4 border-4 border-white shadow"
        src={logo}
        alt={`${quiz_game} logo`}
      />
      <h1 className="text-xl sm:text-2xl font-bold mb-2">{quiz_game}</h1>
      <p className="text-sm sm:text-base text-gray-800 mb-4">{description}</p>
      <button
        className="bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded-full transition duration-200"
        onClick={() => navigate(`/quiz/${topic}`)}
      >
        Start Quiz
      </button>
    </div>
  );
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col bg-gray-900 text-white w-64 h-screen p-6 fixed top-0 left-0 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">QuizApp</h2>
        {['Home', 'About', 'Contact', 'Profile'].map((item, idx) => (
          <button
            key={idx}
            className="hover:bg-gray-700 p-3 rounded text-left transition"
          >
            {item}
          </button>
        ))}
        <Link to="/">
        <button className="mt-auto bg-red-600 hover:bg-red-700 p-3 rounded text-left transition">Logout</button>
        </Link>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden flex items-center justify-between bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold">QuizApp</h2>
        <button onClick={toggleSidebar}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed z-50 top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 shadow-lg">
          {['Home', 'About', 'Contact', 'Profile'].map((item, idx) => (
            <button
              key={idx}
              className="block w-full text-left hover:bg-gray-700 p-3 rounded transition"
            >
              {item}
            </button>
          ))}
          <Link to="/">
          <button  className="bg-red-600 hover:bg-red-700 p-3 w-full rounded mt-4 transition">Logout</button>
          </Link>
        </div>
      )}
    </>
  );
};

const AllCards = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`flex-1 md:ml-64 transition-all duration-300 ${sidebarOpen ? 'blur-sm pointer-events-none' : ''}`}>
        <div className="p-6 sm:p-10 bg-gray-600 min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {users.map((elem, idx) => (
              <Card
                key={idx}
                quiz_game={elem.quiz_game}
                description={elem.description}
                logo={elem.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
