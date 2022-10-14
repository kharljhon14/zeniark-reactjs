import React from "react";
import logo from "../assets/logo.png"

const Question = () =>{
    return(
        <div className="question">
            <div className="question__header">
                <img src={logo} alt="logo" className="question__header-logo" />
                <h3 className="question__header-category">Category: Geography</h3>
                <p className="question__header-number">1 of 10</p>
            </div>

            <div className="question__content">
                <h1 className="question__content-title">Greenland is almost as big as Africa</h1>
            </div>

            <div className="question__buttons">
                <button className="btn btn-positive">True</button>
                <button className="btn btn-negative">False</button>
            </div>
        </div>
    )
}

export default Question;