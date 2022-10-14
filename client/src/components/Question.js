import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextQuestion } from "../store/reducers/questions";
import logo from "../assets/logo.png";

const Question = () => {
   const questions = useSelector((state) => state.questions);
   const dispatch = useDispatch();
   return (
      <div className="question">
         <div className="question__header">
            <img src={logo} alt="logo" className="question__header-logo" />
            <h3 className="question__header-category">{`Category: ${questions.tenQuestions[questions.questionIndex].category}`}</h3>
            <p className="question__header-number">{`${questions.questionIndex + 1} of 10`}</p>
         </div>

         <div className="question__content">
            <h1 dangerouslySetInnerHTML={{ __html: `<span>${questions.tenQuestions[questions.questionIndex].question}</span>` }} className="question__content-title"></h1>
         </div>

         <div className="question__buttons">
            <button onClick={() => dispatch(nextQuestion("True"))} className="btn btn-positive">
               <svg className="question__buttons-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
                  <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
               </svg>
               True
            </button>
            <button onClick={() => dispatch(nextQuestion("False"))} className="btn btn-negative">
               <svg className="question__buttons-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                  <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
               </svg>
               False
            </button>
         </div>
      </div>
   );
};

export default Question;
