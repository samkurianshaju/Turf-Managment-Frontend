import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Todaybooks from './Todaybooks';

const TodayBookings = () => {
  const [todaybook, settodaybook] = useState();
  const sendRequest = async () => {
    const res = await axios.get("http://localhost:5000/api/book").catch(err=>console.log(err));
    const data = await res.data;
    return data;
  }
    useEffect(() => {
     sendRequest().then(data=>settodaybook(data.todaybook));
    },[])
    console.log(todaybook)
  return (
  <div>
    {//todaybook && todaybook.map((todaybook, index) => <Todaybooks />)
    }<Todaybooks />
    </div>
  )
}
export default TodayBookings
