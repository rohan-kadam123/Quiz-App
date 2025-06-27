const javascriptQuiz = [
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Oracle"],
    correct: "Netscape"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    correct: "//"
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correct: "All of the above"
  },
  {
    question: "Which method converts a JSON string into an object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.toObject()"],
    correct: "JSON.parse()"
  },
  {
    question: "What is the output of `typeof null`?",
    options: ["'null'", "'object'", "'undefined'", "'number'"],
    correct: "'object'"
  },
  {
    question: "What does `===` mean in JavaScript?",
    options: ["Equal value", "Equal type", "Equal value and type", "Assignment"],
    correct: "Equal value and type"
  },
  {
    question: "What will `NaN === NaN` return?",
    options: ["true", "false", "undefined", "error"],
    correct: "false"
  },
  {
    question: "Which function is used to delay execution?",
    options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
    correct: "setTimeout()"
  },
  {
    question: "Which keyword is used to define a function?",
    options: ["function", "func", "def", "method"],
    correct: "function"
  },
  {
    question: "What will `console.log(0.1 + 0.2 === 0.3)` print?",
    options: ["true", "false", "undefined", "NaN"],
    correct: "false"
  },
  {
    question: "What does `Array.isArray([])` return?",
    options: ["false", "true", "undefined", "error"],
    correct: "true"
  },
  {
    question: "How do you write an arrow function?",
    options: [
      "function() => {}",
      "() => {}",
      "() -> {}",
      "() => []"
    ],
    correct: "() => {}"
  },
  {
    question: "Which built-in method adds one or more elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "concat()"],
    correct: "push()"
  },
  {
    question: "Which loop will always run at least once?",
    options: ["for", "while", "forEach", "do...while"],
    correct: "do...while"
  },
  {
    question: "How do you check if a variable is `undefined`?",
    options: [
      "typeof x === 'undefined'",
      "x == null",
      "x === undefined",
      "Both 1 and 3"
    ],
    correct: "Both 1 and 3"
  }
];

export default javascriptQuiz;
