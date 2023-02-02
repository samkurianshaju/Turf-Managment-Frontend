import { Button, inputClasses, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [inputs, setinputs] = useState({
    name:"",
    age:"",
    phone:"",
    email:"",
    password:"",
  })
  const [isSignUp, setisSignUp] = useState(false)
  const handleChange = (e) =>{//reads inputs based on the selected field
    setinputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async ()=>{
    const res = await axios.post("http://localhost:5000/api/user/login",{
      email:inputs.email,
      password:inputs.password
    }).catch(err=>console.log(err));

    const data = res.data;
    return data;
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(inputs);
    sendRequest();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
          maxWidth={400}
          display="flex"
          flexDirection={'column'}
          alignItems="center" 
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin='auto'
          marginTop={10}
          borderRadius={55}
        >
          <Typography variant='h3'>{isSignUp ? "SignUp" : "Login"}</Typography>
      {isSignUp && <>
           <TextField name='name' onChange={handleChange}
             value={inputs.name} placeholder='Name' margin='normal'/>
           <TextField name='age' onChange={handleChange}
             value={inputs.age}  placeholder='Age' margin='normal'/>
           <TextField name='phone' onChange={handleChange}
             value={inputs.phone}  placeholder='Phone' margin='normal'/></>
      }
          <TextField name="email" onChange={handleChange}
            value={inputs.email} type={'email'} placeholder='Email' margin='normal'/>
          <TextField name="password" onChange={handleChange}
            value={inputs.password} type={'password'} placeholder='Password' margin='normal'/>
          <Button type='submit'
            variant='contained' sx={{borderRadius:3,marginTop:2}} color="warning">
            Submit
          </Button>
          <Button onClick={()=>setisSignUp(!isSignUp)}
            sx={{borderRadius:3,marginTop:2}}>
             Switch to {isSignUp ? "Login" : "SignUp"}
            </Button>
        </Box>
      </form>
    </div>
  )
}
export default Login
