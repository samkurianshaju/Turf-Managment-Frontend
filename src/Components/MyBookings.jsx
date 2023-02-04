import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MyBookings = () => {
  const [mybooks, setmybooks] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async() => {
    const res = await axios
    .get(`http://localhost:5000/api/book/user/${id}`)
    .catch((err) => console.log(err));
  const data = await res.data;
  return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setmybooks(data.bookings));
  },[]);
  console.log(mybooks);
  return (
    <div>
      This is my bookings page
    </div>
  )
}

export default MyBookings
