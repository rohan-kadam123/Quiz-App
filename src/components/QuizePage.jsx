import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import htmlQuiz from '../data/htmlQuiz'; 
import cssQuiz from '../data/cssQuiz';
import sqlQuiz from '../data/sqlQuiz';
import reactQuiz from '../data/reactQuiz'
import javascriptQuiz from '../data/javascriptQuiz'
import tailwindQuiz from '../data/tailwindQuiz'


function QuizePage() {
  const { topic } = useParams();
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
  console.log("Topic from URL:", topic);
  if (topic === 'html-mastery-quiz') {
    setQuestions(htmlQuiz);
  }
  else if (topic === 'css-styling-quiz') {
    setQuestions(cssQuiz);
  }
  else if (topic === 'javascript-fundamentals-quiz') {
    setQuestions(javascriptQuiz);
  }
  else if (topic === 'sql-query-challenge') {
    setQuestions(sqlQuiz);
  }
  else if (topic === 'reactjs-skill-test') {
    setQuestions(reactQuiz);
  }
  else if (topic === 'tailwind-css-challenge') {
    setQuestions(tailwindQuiz);
  }
  else  {
    setQuestions(null);
  }

}, [topic]);


  useEffect(() => {
    if (!showResult) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            handleNext(); // auto move to next
            return 15;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [index, showResult]);

  const handleNext = () => {
    if (selected === questions[index].correct) setScore(score + 1);
    setSelected(null);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setTimeLeft(30);
    } else {
      setShowResult(true);
    }
  };

  if (questions.length === 0) return <div className="p-10 text-white">Loading quiz...</div>;

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4">Quiz Completed</h1>
        <p className="text-xl mb-2">Score: {score} / {questions.length}</p>
        <button onClick={() => window.location.href = '/quiz'} className="mt-4 px-6 py-2 bg-green-600 rounded-full text-white hover:bg-green-700">
          Go to Quize Page
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <div className="max-w-2xl mx-auto bg-gray-700 rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Question {index + 1} of {questions.length}</h2>
          <div className="text-sm bg-black px-4 py-1 rounded-full">Time Left: {timeLeft}s</div>
        </div>
        <h3 className="text-xl font-bold mb-6">{questions[index].question}</h3>
        <div className="space-y-3">
          {questions[index].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(opt)}
              className={`w-full text-left px-4 py-2 rounded-lg border-2 ${
                selected === opt
                  ? opt === questions[index].correct
                    ? 'bg-green-500 border-green-600'
                    : 'bg-red-500 border-red-600'
                  : 'bg-white text-black hover:bg-blue-100'
              }`}
              disabled={selected !== null}
            >
              {opt}
            </button>
          ))}
        </div>
        {selected && (
          <button
            onClick={handleNext}
            className="mt-6 bg-blue-600 px-6 py-2 text-white rounded-full hover:bg-blue-700"
          >
            {index + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizePage;
