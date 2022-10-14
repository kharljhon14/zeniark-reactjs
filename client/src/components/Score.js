import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/logo.png";
import { playAgain } from "../store/reducers/questions";
import AnswerComparison from "./AnswerComparison";

const Score = () => {
   const questions = useSelector((state) => state.questions);
   const dispatch = useDispatch();
   const renderedResults = questions.tenQuestions.map((question, index) => {
      return (
         <li key={question.question} className="score__questions-item">
            <div className="score__questions-item-container">
               <div className="score__questions-item-content">
                  <h4 dangerouslySetInnerHTML={{ __html: `<span>${question.question}</span>` }} className="score__questions-item-content-title"></h4>
                  <AnswerComparison classNameclassName="score__questions-item-content-answer" correctAnswer={question.correct_answer} answer={questions.answers[index]} />
               </div>
               <div className="score__questions-item-symbol">
                  {question.correct_answer === questions.answers[index] ? (
                     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32" fill="#83DB14">
                        <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
                     </svg>
                  ) : (
                     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="#E33131">
                        <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
                     </svg>
                  )}
               </div>
            </div>
         </li>
      );
   });

   return (
      <div className="score">
         <div className="score__header">
            <img src={logo} alt="logo" className="score__header-logo" />
            <h3 className="score__header-title">Final Results</h3>
         </div>
         <div className="score__final">
            <h1 className="score__final-title">{`${questions.score}/10`}</h1>
            <p className="score__final-subtitle">Your Score</p>
         </div>
         <div className="score__questions">
            <ol className="score__questions-container">{renderedResults}</ol>
         </div>
         <div className="score__play-again">
            <p onClick={() => dispatch(playAgain())} className="start__content-link link">
               play Again
            </p>
         </div>
      </div>
   );
};

export default Score;
