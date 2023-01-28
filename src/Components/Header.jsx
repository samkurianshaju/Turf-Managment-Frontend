import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'; //Used to bring soccer Icon
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {NavLink} from 'react-router-dom'; //used to include navigation links

const Header = () => {
  const [value,setValue] = useState();
  return( //Displays soccer icon | T
    <div>
      <AppBar sx={{backgroundColor:"#000c69"}} position="sticky">  
        <Toolbar>
         <Typography>
          <SportsSoccerIcon /> 
         </Typography>
          <Tabs 
            sx={{ml:'auto'}}
            textColor='inherit' 
            indicatorColor='secondary' 
            value={value} 
            onChange={(e,val)=>setValue(val)/*To change underline on tabs*/}>
             <Tab LinkComponent={NavLink} to="/createaccount" label="Create Account"/>
             <Tab LinkComponent={NavLink} to="/booknow" label="Book Now"/>  
             <Tab LinkComponent={NavLink} to="/users" label="Users"/>
             <Tab LinkComponent={NavLink} to="/mybookings" label="My Bookings"/>
             <Tab LinkComponent={NavLink} to="/support" label="Support"/>                       
          </Tabs>
          <Typography>
          <FitnessCenterIcon/> 
         </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
  };
export default Header