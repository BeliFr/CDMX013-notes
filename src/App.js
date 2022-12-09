import React, { useState } from "react";
import { Routes,Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Notes } from "./components/Notes";
import { Register } from "./components/Register";
import {AuthProvider} from './context/authContext';


 function App() {
  

  return(
    <div className="notesContainer">
      <div className="notesheader my-2 px-1">
      <h1>U-notes</h1>
      </div>
    <div className="bg-purple-300 h-screen text-black flex">
      <AuthProvider>
    <Routes>
    <Route path="/" element={
      <Home/>
      }></Route>
      <Route path="/Register" element={<Register/>} />
      <Route path="/Notes" element={<Notes/>} />
  
    </Routes>
    </AuthProvider>
    </div>
    </div>
  )
}

export default App;
