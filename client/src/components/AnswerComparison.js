import React from "react";

const AnswerComparison = ({ correctAnswer, answer }) => {
   return (
      <p className="score__questions-item-content-answer">
         The correct answer is <span className={correctAnswer === "True" ? "positive correct-answer " : "negative correct-answer"}>{correctAnswer}</span>. You answered <span className={answer === "True" ? "positive" : "negative"}>{answer}</span>
      </p>
   );
};

export default AnswerComparison;
