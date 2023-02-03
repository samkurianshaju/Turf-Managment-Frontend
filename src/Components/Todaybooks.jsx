//Style for Todays Bookings
import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react'

const Todaybooks = (bookingDate,start_time,end_time,name) => {
  return (
    <div>
       <Card 
       sx={{ maxWidth: "41%",
       margin:'auto',
       mt:3,
       padding:2,
       boxShadow:"5px 5px 10px #ccc",
       ":hover":{
        boxShadow:"10px 10px 20px #ccc",
       }
       }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red'}} aria-label="recipe">
            {name}
          </Avatar>
        }
        title={name}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {bookingDate}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {start_time}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {end_time}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default Todaybooks;
