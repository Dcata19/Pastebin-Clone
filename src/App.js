import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Authentication from "./Components/Authentication";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import { useState } from "react";

export default function App() {

  const [message, setMessage] = useState();

  return (
    <>
      <NavBar setMessage={setMessage} />
      <div className="container bg-dark text-white" style={{ border: "1px solid #888888" }}>
        <Routes>
          <Route path="/" element={<Home message={message} setMessage={setMessage} />} />
          <Route path="authentication" element={<Authentication message={message} setMessage={setMessage} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}
