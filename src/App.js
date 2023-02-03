import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import MyBookings from "./Components/MyBookings";
//import Support from "./Components/Support";
import BookNow from "./Components/BookNow";
import Header from "./Components/Header";
import Login from "./Components/Login";
import BookingDetails from "./Components/BookingDetails";
import { useSelector } from "react-redux";
import TodayBookings from "./Components/TodayBookings";

function App() {
  const isLoggedIn =useSelector((state)=>state.isLoggedIn);
  console.log(isLoggedIn);
  return <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/add" element={<BookNow />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/todaybookings" element={<TodayBookings  />} />
        <Route path="/bookingdetails/:id" element={<BookingDetails />} />
      </Routes>
    </main>
    </React.Fragment>
};
export default App;