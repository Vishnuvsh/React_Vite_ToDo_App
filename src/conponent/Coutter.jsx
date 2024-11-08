import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Coutter.css";

export default function Coutter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="divid">
        <div className="div2">
          <h1>REACT</h1>
          <h1>count={count}</h1>
          <button className="m-2" onClick={() => setCount(count + 1)}>
            <strong>+</strong>
          </button>
          <button onClick={() => setCount(count - 1)} disabled={count == 0}>
            <strong>-</strong>
          </button>{" "}
          <br /> <br /> <br />
          <Link className="div3" to={"/todo"}>
            click here
          </Link>
        </div>
      </div>
    </>
  );
}
