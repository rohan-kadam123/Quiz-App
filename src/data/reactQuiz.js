const reactQuiz = [
  {
    question: "What is React primarily used for?",
    options: [
      "Styling web pages",
      "Database management",
      "Building user interfaces",
      "Server-side scripting"
    ],
    correct: "Building user interfaces"
  },
  {
    question: "What is a React component?",
    options: ["HTML element", "Reusable UI block", "CSS class", "API"],
    correct: "Reusable UI block"
  },
  {
    question: "How do you create a functional component?",
    options: ["class MyComp {}", "function MyComp() {}", "new Component()", "React.create()"],
    correct: "function MyComp() {}"
  },
  {
    question: "What hook is used for state in React?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    correct: "useState"
  },
  {
    question: "Which hook runs code after render?",
    options: ["useRef", "useState", "useEffect", "useMemo"],
    correct: "useEffect"
  },
  {
    question: "What is JSX?",
    options: [
      "JavaScript Extension Syntax",
      "HTML file",
      "Template engine",
      "A syntax extension for JavaScript"
    ],
    correct: "A syntax extension for JavaScript"
  },
  {
    question: "Props are:",
    options: ["Mutable", "Immutable", "Optional", "None"],
    correct: "Immutable"
  },
  {
    question: "How do you pass data to a child component?",
    options: ["with hooks", "using props", "using state", "via Redux"],
    correct: "using props"
  },
  {
    question: "What is returned by `useState()`?",
    options: ["value only", "function only", "array", "object"],
    correct: "array"
  },
  {
    question: "What is the default method for React routing?",
    options: ["ReactPath", "BrowserRouter", "ReactNav", "PageRouter"],
    correct: "BrowserRouter"
  },
  {
    question: "How do you handle events in React?",
    options: ["With HTML handlers", "With jQuery", "With React handlers", "With AJAX"],
    correct: "With React handlers"
  },
  {
    question: "What is a key prop used for?",
    options: ["Identifying list items", "Styling", "Routing", "Debugging"],
    correct: "Identifying list items"
  },
  {
    question: "Which tool is used for debugging React?",
    options: ["Redux DevTools", "React Developer Tools", "JS Linter", "Chrome Tools"],
    correct: "React Developer Tools"
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "Browser API",
      "Copy of the real DOM in memory",
      "React compiler",
      "Backend database"
    ],
    correct: "Copy of the real DOM in memory"
  },
  {
    question: "What hook is used for referencing DOM elements?",
    options: ["useRef", "useEffect", "useMemo", "useCallback"],
    correct: "useRef"
  }
];
export default reactQuiz;
