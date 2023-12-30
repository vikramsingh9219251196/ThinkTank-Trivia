import React, { useEffect,useState } from 'react'
import './Quiz.css'
import { CircularProgress } from '@material-ui/core';
import Question from '../../Questions/Question';

const Quiz = ({name,score,questions,setScore,setQuestions}) => {
  const[options,setOptions]=useState("");
  const[currQues,setCurrQues]=useState(0);
  useEffect(()=>{
   setOptions(
    questions && handleshuffle([questions[currQues]?.correct_answer,
    ...questions[currQues]?.incorrect_answers,
    ])
   );
    },[questions,currQues])
    console.log(questions);

    const handleshuffle=(array)=>{
      return array.sort(() => Math.random() - 0.5);
    }
    return (
      <div className='quiz'>
        <span  className='subtitle'>Welcome,{name}</span>
  
       {questions ? (
        <>
          <div className="quizInfo">
            <span style={{color:"white"}}>{questions[currQues].category}</span>
            <span style={{color:"white"}} >Score : {score}</span>
          </div>
          <Question
            
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
          </>
          ) : (
        <CircularProgress
          style={{ margin: 100 ,color:"white"}}
          size={150}
          thickness={1}
        />
      )}
      </div>
    )
}
export default Quiz


 
 
 