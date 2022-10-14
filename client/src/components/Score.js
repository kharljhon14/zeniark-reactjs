import React from "react";
import logo from "../assets/logo.png";

const Score = () => {
   return (
      <div className="score">
         <div className="score__header">
            <img src={logo} alt="logo" className="score__header-logo" />
            <h3 className="score__header-title">Final Results</h3>
         </div>
         <div className="score__final">
            <h1 className="score__final-title">3/10</h1>
            <p className="score__final-subtitle">Your Score</p>
         </div>
         <div className="score__questions">
            <ol className="score__questions-container">
               <li className="score__questions-item">
                  <div className="score__questions-item-content">
                     <h4 className="score__questions-item-content-title">Payton Manning after winning Super Bowl XLIX.</h4>
                     <p className="score__questions-item-content-answer">The correct answer is False. You answered False</p>
                  </div>
                  <div className="score__questions-item-symbol">X</div>
               </li>
            </ol>
         </div>
      </div>
   );
};

export default Score;
