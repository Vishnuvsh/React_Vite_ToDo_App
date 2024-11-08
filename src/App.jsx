import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coutter from "./conponent/Coutter";
import Todo from "./conponent/Todo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>

            <Route path="/" element={<Coutter/>}/>
            <Route path="/todo" element={<Todo/>}/>
            

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
