import React, {useState,useContext} from "react";
import {Questions} from '../Helpers/QuestionBank'
import { QuizContext } from "../Helpers/Contexts";
import '../App.css';


export default function EndScreen(){
    const {score,setScore,setGameState} = useContext(QuizContext)
    const restartQuiz =() =>{

        setScore(0);
        setGameState("menu")
    }

    return(
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h3>{score}/{Questions.length}</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}