import React from "react";
import { useDispatch } from "react-redux";
import logo from "../assets/zeniark-logo.png";
import { startQuiz } from "../store/reducers/questions";

const Start = () => {
   const dispatch = useDispatch();

   return (
      <div className="start">
         <img src={logo} alt="logo" className="start__logo" />
         <div className="start__header">
            <h3 className="start__header-title">Welcome to the Trivia Challage!</h3>
            <p className="start__header-subtitle">You will be presented with 10 True of False questions.</p>
         </div>
         <div className="start__content">
            <h3 className="start__content-title">Can you score 10/10</h3>
            <a onClick={() => dispatch(startQuiz())} className="start__content-link" href="#">
               Lets Start!
            </a>
         </div>
      </div>
   );
};

export default Start;
