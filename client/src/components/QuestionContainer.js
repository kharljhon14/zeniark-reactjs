import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../store/utils/thunks";
import { getTenQuestions } from "../store/reducers/questions";

import Question from "./question";
import Start from "./Start";
import Score from "./Score";

const QuestionContainer = () => {
   const questions = useSelector((state) => state.questions);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchQuestions()).then(() => {
         dispatch(getTenQuestions());
      });
   }, []);

   return (
      <div className="question-container">
         {/* {!questions.start ? <Start /> : <Question />} */}
         <Score />
      </div>
   );
};

export default QuestionContainer;
