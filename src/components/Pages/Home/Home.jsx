
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import ErrorMessage from '../../ErrorMessage/ErrorMessage'
import Categories from '../../category/Category'
import "./Home.css";


const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };
  return (
    <div className='content'>
        <div className='settings'>
        <span style={{fontSize:"4vw",fontWeight:"600",color:"white"}}>Quiz Setting</span>
        
        <div className='details'>
{error&&<ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField 
          InputProps={{style:{border:"3px solid white",borderRadius:"15px",color:"white",disableUnderline:true}}}
          InputLabelProps={{style:{color:"white"}}}
          variant='outlined'
          label="Enter Your Name"
          onChange={(e)=>setName(e.target.value)}
          />
            <TextField
            InputLabelProps={{style:{color:"white"}}}
            style={{marginTop:"3rem"}}
            select
            label="Select Category"
            InputProps={{style:{border:"3px solid white",borderRadius:"15px",color:"white",disableUnderline:true}}}
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            variant="outlined"
            
          >
            {
              Categories.map((cat)=>(
             <MenuItem key={cat.category} value={cat.value}>
            {cat.category}
             </MenuItem>
              ))
            }
            
            </TextField>
            <TextField
            InputProps={{style:{border:"3px solid white",borderRadius:"15px",color:"white",disableUnderline:true}}}
            InputLabelProps={{style:{color:"white"}}}
            style={{marginTop:"3rem"}}
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            
          >
            <MenuItem key="Easy" value="Easy">Easy</MenuItem>
            <MenuItem key="Medium" value="Medium">Medium</MenuItem>
            <MenuItem key="Difficult" value="Difficult">Difficult</MenuItem>
             </TextField>
           <Button
          
            style={{marginTop:"3rem"}}
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
          </div>
        </div>

        <img src="/home__img.svg" alt="home_img" className='banner' />
       
    </div>
  )
}

export default Home
