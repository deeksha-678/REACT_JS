import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./component/Login";

import Digital from "./component/Digital";
import SMS from "./component/SMS";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/showpassword" element={<Login />} />
          <Route path="/sms" element={<SMS />} />
          <Route path="/digital" element={<Digital />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;