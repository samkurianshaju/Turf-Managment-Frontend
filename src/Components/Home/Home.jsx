import React from 'react'
import { Button,TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate,Link } from "react-router-dom";
import Header from '../Header';
import "./Home.css" ;

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className='frmhome'>
        <form>
          <Box>
            <TextField margin="normal" fullWidth variant='outlined' name='email' id="email" label="Email"/>
            <TextField margin="normal" fullWidth variant='outlined' name='password' id="password" label="Password"/>
            <Button variant='contained' type='Submit'>Login</Button>
            <Button variant='contained' onClick={() => navigate("/createaccount")}>Sign Up</Button>
            <Link className="btn1" to={{ pathname: "/forgotpassword" }}>Forgot Password</Link>
          </Box>
        </form>
      </div>
    </div> 
  )
};
export default Home