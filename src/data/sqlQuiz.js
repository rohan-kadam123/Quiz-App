const sqlQuiz = [
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Sequential Query Logic",
      "Simple Query List",
      "None of these"
    ],
    correct: "Structured Query Language"
  },
  {
    question: "Which command is used to retrieve data?",
    options: ["SELECT", "GET", "READ", "FETCH"],
    correct: "SELECT"
  },
  {
    question: "Which SQL clause is used to filter rows?",
    options: ["WHERE", "FROM", "ORDER", "GROUP"],
    correct: "WHERE"
  },
  {
    question: "What keyword is used to remove duplicates?",
    options: ["UNIQUE", "DISTINCT", "ONLY", "FILTER"],
    correct: "DISTINCT"
  },
  {
    question: "Which function gives the total number of rows?",
    options: ["SUM()", "COUNT()", "TOTAL()", "ADD()"],
    correct: "COUNT()"
  },
  {
    question: "Which SQL statement updates data?",
    options: ["MODIFY", "CHANGE", "UPDATE", "SET"],
    correct: "UPDATE"
  },
  {
    question: "What is used to sort query results?",
    options: ["FILTER BY", "SORT BY", "ORDER BY", "GROUP BY"],
    correct: "ORDER BY"
  },
  {
    question: "Which operator is used for pattern matching?",
    options: ["LIKE", "MATCHES", "REGEX", "FIND"],
    correct: "LIKE"
  },
  {
    question: "What is a primary key?",
    options: [
      "Unique identifier for a row",
      "Foreign key",
      "Duplicate column",
      "Null field"
    ],
    correct: "Unique identifier for a row"
  },
  {
    question: "Which command removes a table?",
    options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
    correct: "DROP"
  },
  {
    question: "Which SQL join returns only matched rows?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    correct: "INNER JOIN"
  },
  {
    question: "Which clause groups rows with the same values?",
    options: ["GROUP BY", "ORDER BY", "SORT", "MERGE"],
    correct: "GROUP BY"
  },
  {
    question: "What does the HAVING clause do?",
    options: [
      "Filter after grouping",
      "Filter columns",
      "Rename table",
      "Join tables"
    ],
    correct: "Filter after grouping"
  },
  {
    question: "Which type of JOIN returns all rows from both tables?",
    options: ["CROSS JOIN", "FULL JOIN", "LEFT JOIN", "RIGHT JOIN"],
    correct: "FULL JOIN"
  },
  {
    question: "Which keyword adds a new row?",
    options: ["INSERT INTO", "ADD", "APPEND", "CREATE ROW"],
    correct: "INSERT INTO"
  }
];
export default sqlQuiz;
