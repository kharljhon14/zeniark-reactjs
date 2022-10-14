import React from "react";
import logo from "../assets/zeniark-logo.png";

const Start = () => {
   return (
      <div className="start">
         <img src={logo} alt="logo" className="start__logo" />
         <div className="start__header">
            <h3 className="start__header-title">Welcome to the Trivia Challage!</h3>
            <p className="start__header-subtitle">You will be presented with 10 True of False questions.</p>
         </div>
         <div className="start__content">
            <h3 className="start__content-title">Can you score 10/10</h3>
            <a className="start__content-link" href="/api/questions/allquestions">Lets Start!</a>
         </div>
      </div>
   );
};

export default Start;
