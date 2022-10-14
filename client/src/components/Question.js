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
               <span>&#10003; True</span>
            </button>
            <button onClick={() => dispatch(nextQuestion("False"))} className="btn btn-negative">
               X False
            </button>
         </div>
      </div>
   );
};

export default Question;
