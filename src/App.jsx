// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* All routes handled inside Layout */}
//         <Route path="/*" element={<Layout />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
// import About from '../pages/About';
import About from './pages/About';
import Contact from "./pages/Contact"
// import AllCards from '../components/AllCards';
// import QuizePage from '../components/QuizePage';
// import Header from '../components/Header';
// import Home from '../pages/Home';
// import SignIn from '../pages/SignIn';

import AllCards from "./components/AllCards"
import QuizePage from "./components/QuizePage"
import Header from "./components/Header"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<AllCards />} />
        <Route path="/quiz/:topic" element={<QuizePage />} />
      </Routes>
    </div>
  )
}

export default App
