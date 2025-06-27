import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header />
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-md text-indigo-400">
          Welcome to the Quiz Game
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-xl">
          Test your knowledge in web development and beyond. Click below to begin your quiz journey!
        </p>
        <button
          onClick={handleStartQuiz}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          🚀 Start Quiz
        </button>
      </div>

      {/* About Section */}
      <div className="px-6 py-16 sm:px-10 lg:px-20 flex items-center justify-center">
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-indigo-400 drop-shadow">
            About Quiz-App
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 text-center mb-10 leading-relaxed">
            Quiz-App is your ultimate destination for mastering web development and technology concepts.
            Whether you're preparing for interviews, testing your skills, or just having fun learning — we've got you covered!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-3">🎯 Purpose</h3>
              <p className="text-gray-300">
                We aim to help learners practice and enhance their skills through carefully curated quizzes covering HTML, CSS, JavaScript, React, SQL, and more.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-3">🚀 Features</h3>
              <p className="text-gray-300">
                - Timed quizzes<br />
                - Instant results & feedback<br />
                - Multiple-choice questions<br />
                - Stylish UI with responsive design
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-3">👨‍💻 Who is it for?</h3>
              <p className="text-gray-300">
                This app is perfect for beginners, students, professionals, and interview candidates looking to stay sharp and confident.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-3">📈 Our Mission</h3>
              <p className="text-gray-300">
                Empower the next generation of developers by making learning interactive, accessible, and fun — one quiz at a time!
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Built with 💙 using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
