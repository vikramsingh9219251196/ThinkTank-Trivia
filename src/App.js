import axios from "axios";
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Quiz from './components/Pages/Quiz/Quiz';
import Result from './components/Pages/Result/Result';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
function App() {
  const[name,setName]=useState();
  const[questions,setQuestions]=useState("");
  const[score,setScore]=useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}` }&type=multiple`
    );
    setQuestions(data.results);
  }
  return (
    <Router>
      <div className="App" style={{backgroundImage:"url(./background_3.jpg)"}}>
     <Header/>
     <Routes>
      <Route exact path='/' element={
       <Home
       name={name}
       setName={setName}
       fetchQuestions={fetchQuestions}
     />}/>
       
      <Route exact path='/quiz' element={<Quiz
        name={name}
        questions={questions}
        score={score}
        setScore={setScore}
        setQuestions={setQuestions}
      />}/>
      <Route exact path='/result' element={<Result
       name={name} score={score} />
      }/>
     </Routes>
    </div>
    <Footer/>

    </Router>
    
  );
}

export default App;
