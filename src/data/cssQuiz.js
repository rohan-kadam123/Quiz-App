const cssQuiz = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    correct: "Cascading Style Sheets"
  },
  {
    question: "Which property is used to change the text color?",
    options: ["font-color", "text-color", "color", "text-style"],
    correct: "color"
  },
  {
    question: "How do you select an element with id 'main'?",
    options: ["#main", ".main", "main", "*main"],
    correct: "#main"
  },
  {
    question: "Which property controls the size of text?",
    options: ["font-size", "text-size", "font-style", "text-style"],
    correct: "font-size"
  },
  {
    question: "Which is the correct syntax for a comment in CSS?",
    options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
    correct: "/* comment */"
  },
  {
    question: "What does the 'z-index' property control?",
    options: ["font order", "stacking order", "flex direction", "hover state"],
    correct: "stacking order"
  },
  {
    question: "Which CSS property makes text italic?",
    options: ["font-style", "text-decoration", "font-weight", "font-variant"],
    correct: "font-style"
  },
  {
    question: "How do you center a block element horizontally?",
    options: [
      "text-align: center;",
      "margin: auto;",
      "padding: center;",
      "display: center;"
    ],
    correct: "margin: auto;"
  },
  {
    question: "Which unit is relative to the parent font size?",
    options: ["px", "em", "vh", "cm"],
    correct: "em"
  },
  {
    question: "Which property is used for background color?",
    options: ["bg-color", "color", "background", "background-color"],
    correct: "background-color"
  },
  {
    question: "How to select all `<p>` elements inside a `<div>`?",
    options: ["div p", "div.p", "div+p", "div > p"],
    correct: "div p"
  },
  {
    question: "What is the default position value of an element?",
    options: ["absolute", "relative", "static", "fixed"],
    correct: "static"
  },
  {
    question: "Which property is used for spacing inside an element?",
    options: ["margin", "border", "padding", "spacing"],
    correct: "padding"
  },
  {
    question: "How do you make a class in CSS?",
    options: [".class", "#class", "class()", "@class"],
    correct: ".class"
  },
  {
    question: "Which pseudo-class selects the first element?",
    options: [":hover", ":focus", ":first-child", ":nth-child(1)"],
    correct: ":first-child"
  }
];
export default cssQuiz;
