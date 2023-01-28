import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MyBookings from "./Components/MyBookings";
import Support from "./Components/Support";
import BookNow from "./Components/BookNow";
import CreateAccount from "./Components/CreateAccount";
import Users from "./Components/User/Users";

function App() {
  return (
  <React.Fragment>
    <Header>
      <Header />
    </Header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/users" element={<Users />} exact/>
        <Route path="/mybookings" element={<MyBookings />} exact/>
        <Route path="/support" element={<Support />} exact/>
        <Route path="/booknow" element={<BookNow />} exact/>
        <Route path="/createaccount" element={<CreateAccount />} exact/>
      </Routes>
    </main>
    </React.Fragment>
  );
}

export default App;
