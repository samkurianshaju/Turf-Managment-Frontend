import { Button } from '@mui/material';
import React from 'react'

const User = (props) => {
const {_id,name,age,gender,phone,password} = props.user;   
  return (
    <div className='prevbook'>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h3>{gender}</h3>      
      <h3>{phone}</h3>
      <h3>{password}</h3>
      <Button>Update</Button>
      <Button>Delete</Button>
    </div>
  );
};

export default User